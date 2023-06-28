import React, {useEffect, useState} from 'react';
import Menu from '../core/Menu';
import { myProfile } from '../auth/helper/profiles.js';
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { isAuthenticated } from "../auth/helper/index";
import Footer from "../core/Footer";

const MyJob = () => {

const [ profiles, setProfiles ] = useState([]);

const { user } = isAuthenticated();

const preload = () => {
    myProfile(user._id).then(data => {
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
    <div  style={{backgroundColor:"#1d4354"}}>
        <Menu />
    </div>
    <Container style={{fontSize:"14px", margin:"auto" ,marginTop:"50px", height:"100vh"}}>
        <h3 style={{ fontWeight:"900", paddingBottom:"10px", textAlign:"center"}}>{profiles.length>0 ? `Here is your profile ${user.email}` : "Sorry you created no Profile Make one!"}</h3>
        {profiles.length === 0 && (
            <Button variant='secondary' block>
                <Link 
                style={{textDecoration:"none", color:"white"}} 
                to="/add/profile">
                    Add New Profile
                </Link>
            </Button>
        )}
        
        {profiles.map((profile,index)=>{
            return(
                <Col style={{marginTop:"20px"}} key={index}>
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
                            <Col><b>Price:</b> <span className="text-success">{profile.price} $</span> </Col>
                            <Col><b>Qualification:</b> <p className="text-success">{profile.qualification}</p></Col>
                            <Col><b>Institution:</b> <p className="text-success">{profile.institution}</p></Col>
                            <Col>
                            <Button variant="success">
                                <Link 
                                style={{textDecoration:"none", color:"white"}} 
                                to={`/myprofile/update/${profile._id}`}>
                                    Update
                                </Link>
                            </Button>
                            </Col>
                        </Row>
                        <b>Offers By following employers </b><br />
                        {(profile.offers).map((offer, index) => {
                            return(
                            <p>{offer.email}</p>
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