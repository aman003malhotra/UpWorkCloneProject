import React, {useEffect, useState} from 'react';
import Menu from '../core/Menu';
import { getAllProfiles } from '../auth/helper/profiles';
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Card, Nav } from 'react-bootstrap';
import { isAuthenticated } from "../auth/helper/index";

const AdminAllProfiles = () => {

const [ profiles, setProfiles ] = useState([]);

const { user } = isAuthenticated();

const preload = () => {
    getAllProfiles().then(data => {
        if(data.error) {
            console.log(data.error)
        }else{
            setProfiles(data)
        }
    });
}

useEffect(() => {
    preload();  
}, []);

return(
    <>
    <Container>
        <Nav variant="tabs" defaultActiveKey="/allprofiles">
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/adminportal">Admin</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/alljobs">All Jobs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/allprofiles">All Profiles</Nav.Link>
            </Nav.Item>
        </Nav>
    </Container>
    <Container style={{fontSize:"14px", margin:"5%"}}>
        <h3 style={{ fontWeight:"900", paddingBottom:"10px", textAlign:"center"}}>{profiles.length>0 ? `Hi ${user.email}, Here are all the profiles uploaded` : "Sorry no Profile exist!"}</h3>
        {profiles.length === 0 && (
            <Button variant='secondary' block>
                <Link 
                style={{textDecoration:"none", color:"white"}} 
                to="/add/job">
                    Add New Job
                </Link>
            </Button>
        )}
        
        {profiles.map((profile,index)=>{
            return(
                <Col md={{ span: 10, offset: 1 }} style={{marginTop:"20px"}} key={index}>
                <Card border={'success'} >
                    <Card.Body>
                        <Card.Header style={{marginBottom:"20px",}}>
                        <h5><p className="text-success">{profile.title}</p></h5>
                        </Card.Header>
                        <Card.Text>
                        <b>Description:</b> <span className="text-success">{profile.description}</span><br />
                        <b>Availability:</b> <span className="text-success">{profile.availabilty} Hours/ Week</span> 
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Row>
                            <Col><b>Type of Payment:</b> <span className="text-success">{profile.typeOfPayment}</span></Col>
                            <Col><b>Price:</b> <span className="text-success">{profile.price}</span> </Col>
                            <Col><b>Qualification:</b> <p className="text-success">{profile.qualification}</p></Col>
                            <Col><b>Institution:</b> <p className="text-success">{profile.institution}</p></Col>

                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        )})};
    </Container>
    </>
)
}

export default AdminAllProfiles;