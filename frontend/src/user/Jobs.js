import React, {useEffect, useState} from 'react';
import Menu from '../core/Menu';
import { getAllJobs, addProposal } from '../auth/helper/jobs.js';
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { isAuthenticated } from "../auth/helper/index";
import Footer from "../core/Footer";



const Jobs = () => {
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

const makeProposal = (userId, jobId) => {
    addProposal(userId, jobId).then(data => {
        if (data.error) {
            console.log(data.error)
        }
    })
}

useEffect(() => {
    preload();  
}, []);

return(
    <>
    <div  style={{backgroundColor:"#1d4354"}}>
        <Menu />
    </div>
    <Container style={{fontSize:"14px", margin:"5%"}}>
        <h3 style={{ fontWeight:"900", paddingBottom:"10px", textAlign:"center"}}>Here's a List of all the Jobs</h3>
        {jobs.map((job,index)=>{
            return(
                <Col md={{ span: 10, offset:3 }} style={{marginTop:"20px"}} key={index}>
                <Card border={'success'} >
                    <Card.Body>
                        <Card.Header style={{marginBottom:"20px",}}>
                        {job.title}
                        </Card.Header>
                        <Card.Text>
                        Description: {job.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Row>
                            <Col>Type of Payment: <p className="text-success">{job.typeOfPayment}</p></Col>
                            <Col>Price: <p className="text-success">{job.price}</p> </Col>
                            <Col>Experience Needed: <p className="text-success">{job.experienceNeeded}</p></Col>
                            <Col><Button variant="success"><Link style={{textDecoration:"none", color:"white"}} to="/jobs" onClick={()=> {makeProposal(user._id, job._id)}} >Interested</Link></Button></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        )})};
    </Container>
    
    <Footer />
    
    
    </>
)
}

export default Jobs;