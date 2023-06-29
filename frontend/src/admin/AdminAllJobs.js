import React, {useEffect, useState} from 'react';
import Menu from '../core/Menu';
import { getAllJobs, deleteJob } from '../auth/helper/jobs';
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Card, Nav } from 'react-bootstrap';
import { isAuthenticated } from "../auth/helper/index";

const AdminAllJobs = () => {

const [ jobs, setJobs ] = useState([]);

const { user } = isAuthenticated();

const preload = () => {
    getAllJobs().then(data => {
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
    <Container>
        <Nav variant="tabs" defaultActiveKey="/alljobs">
            <Nav.Item>
                <Nav.Link href="/" >Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/adminportal" >Admin</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/alljobs" >All Jobs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/allprofiles">All Profiles</Nav.Link>
            </Nav.Item>
        </Nav>
    </Container>
    <Container style={{fontSize:"14px", margin:"auto", marginTop:"50px", height:"100vh"}}>
        <h3 style={{ fontWeight:"900", paddingBottom:"10px", textAlign:"center"}}>{jobs.length>0 ? "Here's a List of all the Jobs Uploaded" : "Sorry no jobs created"}</h3>
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
                            <Col><b>Price</b>: <span className="text-success">{job.price}</span></Col>
                            <Col><b>Experience Needed</b>: <span className="text-success">{job.experienceNeeded}</span></Col>
                            <Col>
                            <Button variant="danger" onClick={() => {deleteThisJob(job._id)}}>
                                <Link 
                                style={{textDecoration:"none", color:"white"}} 
                                to="/alljobs">
                                    Delete 
                                </Link>
                            </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        )})};
    </Container>
    
    
    
    </>
)
}

export default AdminAllJobs;