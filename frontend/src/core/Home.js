import React from "react";
import Menu from "./Menu";
import Companies from "./Companies";
import Content from "./Content";
import mainImage from "../static/main-image.jpg";
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { isAuthenticated } from '../auth/helper/index';
import Footer from "./Footer";

const Home = () => {
    const { user } = isAuthenticated();
    return(
    <>  
        <div style={{backgroundImage:`url(${mainImage})`, padding:"2%"}}>
            <Menu /> 
            <Container style={{paddingTop:"3%"}}>
                <Row style={{paddingTop:"100px", paddingBottom:"100px"}}>
                    <Col>
                        
                    </Col>
                    <Col>
                    <h1 className="text-light align-self-center" style={{lineHeight:"1.5", fontWeight:"900"}}>Meet the Best Freelancers in your Industry</h1><br />
                    {!isAuthenticated() && (
                    <>
                    <Button variant="light" size="lg" style={{marginLeft:"20px"}}><Link style={{textDecoration:"none", color:"black"}} to="/signin">Login</Link></Button>
                    <Button variant="light" size="lg" style={{marginLeft:"20px"}}><Link style={{textDecoration:"none", color:"black"}} to="/signup">SignUp</Link></Button>
                    </>
                    )}
                    </Col>
                </Row>
            </Container>
        </div>
        <Companies />
        <Content />
        <Footer />
    </>
    )
    
}

export default Home;
