import React, {useEffect, useState} from 'react';
import Menu from '../core/Menu';
import { myJobs, deleteJob } from '../auth/helper/jobs.js';
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { isAuthenticated } from "../auth/helper/index";
import Footer from "../core/Footer";

const MyJob = () => {

const [ jobs, setJobs ] = useState([]);

const { user } = isAuthenticated();

const preload = () => {
    myJobs(user._id).then(data => {
        if(data.error) {
            console.log(data.error)
        }else{
            setJobs(data)
        }
    });
}
const deleteThisJob = jobId => {
    deleteJob(jobId).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

useEffect(() => {
    preload();  
}, []);

return(
    <>
    <div  style={{backgroundColor:"#1d4354"}}>
        <Menu />
    </div>
    <Container style={{fontSize:"14px", margin:"auto", marginTop:"50px", height:"100vh"}}>
        <h3 style={{ fontWeight:"900", paddingBottom:"10px", textAlign:"center"}}>{jobs.length>0 ? "Here's a List of all the Jobs You Uploaded" : "Sorry you created no job Make one!"}</h3>
        <Button variant="secondary" block>
            <Link 
            style={{textDecoration:"none", color:"white"}} 
            to="/add/job">
                Add New Job
            </Link>
        </Button>
        {jobs.map((job,index)=>{
            return(
                <Col style={{marginTop:"20px"}} key={index}>
                <Card border={'success'} >
                    <Card.Body>
                        <Card.Header style={{marginBottom:"20px",}}>
                        <h5><p className="text-success">{job.title}</p></h5>
                        </Card.Header>
                        <Card.Text>
                        <b>Description:</b> <span className="text-success"></span>{job.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Row>
                            <Col><b>Type of Payment</b>: <span className="text-success">{job.typeOfPayment}</span></Col>
                            <Col><b>Price</b>: <span className="text-success">{job.price} $</span></Col>
                            <Col><b>Experience Needed</b>: <span className="text-success">{job.experienceNeeded}</span></Col>
                            <Col>
                            <Button variant="success">
                                <Link 
                                style={{textDecoration:"none", color:"white"}} 
                                to={`/myjobs/update/${job._id}`}>
                                    Update
                                </Link>
                            </Button>{' '}
                            <Button variant="danger" onClick={() => {deleteThisJob(job._id)}}>
                                <Link 
                                style={{textDecoration:"none", color:"white"}} 
                                to="/myjobs">
                                    Delete 
                                </Link>
                            </Button>
                            </Col>
                        </Row>
                        <b>Proposals By </b>
                        {(job.proposals).map((proposal, index) => {
                            return(
                            <p>{proposal.email}</p>
                            )
                        })}
                    </Card.Body>
                </Card>
            </Col>
        )})};
    </Container>
    
    <Footer />
    
    
    </>
)
}

export default MyJob;