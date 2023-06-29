import React, {useEffect, useState} from 'react';
import Menu from '../core/Menu';
import { Link } from "react-router-dom";
import { getAllProfiles, addOffer } from '../auth/helper/profiles.js';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { isAuthenticated } from "../auth/helper/index";
import Footer from "../core/Footer";


const Freelancers = () => {
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

const makeOffer = (userId, profileId) => {
    addOffer(userId, profileId).then(data => {
        if (data.error) {
            console.log(data.error)
        }
    })
}

useEffect(() =>{
    preload()   
}, []);

return(
    <>
        <div style={{backgroundColor:"#1d4354"}}>
            <Menu />
        </div>
        <Container style={{ margin:"auto", marginTop:"50px", height:"100vh"}}>
        <h3 style={{ fontWeight:"900", paddingBottom:"10px", textAlign:"center"}}>{profiles.length>0 ? "Here's a List of all the Freelancers" : "Sorry no freelancers created Check again after some time"}</h3>
        {profiles.map((profile,index)=>{
            return(
                <Col style={{marginTop:"20px"}} key={index}>
                <Card border={'success'} >
                    <Card.Body>
                        <Card.Header style={{marginBottom:"20px",}}>
                        {profile.title}
                        </Card.Header>
                        <Card.Text>
                        Description: {profile.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Row>
                            <Col>Qualification: <p className="text-success">{profile.qualification}</p></Col>
                            <Col>Instituion: <p className="text-success">{profile.institution}</p></Col>
                            <Col>Price: <p className="text-success">${profile.price}</p> </Col>
                            <Col><Button variant="success" block><Link style={{textDecoration:"none", color:"white"}} to="/freelancers" onClick={()=> {makeOffer(user._id, profile._id)}} >Hire</Link></Button></Col>
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

export default Freelancers;