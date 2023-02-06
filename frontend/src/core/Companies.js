import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import apple from '../static/apple.png';
import adidas from '../static/adidas.png';
import google from '../static/google.png';
import itc from '../static/itc.png';
import nike from '../static/nike.png';
import samsung from '../static/samsung.png';
import linkedin from '../static/linkedin.png';
import microsoft from '../static/microsoft.png';


const Companies = () => {
    return (
        <div style={{backgroundColor:"#F5F5F5"}}>
            <Container style={{paddingTop: "30px", paddingBottom:"30px"}} className="text-center">
                <h3 style={{fontWeight:"900"}}>Companies That Trust Us</h3>
                <Row style={{marginTop: "20px"}}>
                    <Col><img alt="apple" src={apple}  height="100px" /></Col>
                    <Col><img alt="adidas" src={adidas} height="100px" /></Col>
                    <Col><img alt="google" src={google} height="100px" /></Col>
                    <Col><img alt="itc" src={itc} height="100px" /></Col>
                </Row>
                <Row style={{marginTop: "20px"}}>
                    <Col><img alt="nike" src={nike} width="180px" /></Col>
                    <Col><img alt="samsung" src={samsung} height="120px" /></Col>
                    <Col><img alt="linkedin" src={linkedin} height="100px" /></Col>
                    <Col><img alt="microsoft" src={microsoft} height="100px" /></Col>
                </Row>
            </Container>
        </div>

    )
}
export default Companies;
