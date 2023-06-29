import React, {useState, useEffect} from 'react';
import {Container, Nav, Col, Card} from 'react-bootstrap';
import { isAuthenticated, getUserDetail } from "../auth/helper/index";

const AdminPanel = () => {
    const [ profile, setProfile ] = useState([]);

    const { user } = isAuthenticated();

    const preload = () => {
        getUserDetail(user._id).then(data => {
            if(data.error) {
                console.log(data.error)
            }else{
                setProfile(data)
            }
        });
    }
    
    useEffect(() => {
        preload();  
    }, []);

    return(
        <>
        <Container>
            <Nav variant="tabs" defaultActiveKey="/adminportal">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/adminportal" >Admin</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/alljobs">All Jobs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/allprofiles">All Profiles</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
        <Container>
            <Col md={{ span: 10, offset: 1 }} style={{marginTop:"20px"}} >
            <h3 style={{ fontWeight:"900", paddingBottom:"10px", textAlign:"center"}}>Welcome Admin</h3>
            <Card border={'success'} className='text-center' >
                <Card.Body>
                    <Card.Header style={{marginBottom:"20px",}}>
                    <h5><p className="text-success">{profile.firstName} {profile.lastName}</p></h5>
                    </Card.Header>
                    <Card.Text>
                    <b>Email:</b> <span className="text-success">{profile.email}</span><br />
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                </Card.Body>
            </Card>
            </Col>
        </Container>
        </>
    )
}

export default AdminPanel;

