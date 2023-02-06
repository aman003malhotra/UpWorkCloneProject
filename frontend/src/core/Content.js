import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import wordpress from "../static/wordpress5.jpg";
import logoDesigning from "../static/logo designing.jpg";
import socialMedia from "../static/socialMedia.jpg";
import websiteDesigning from "../static/website designing.jpg";
import team from "../static/team.jpeg";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Testimonial from './Testimonial';



const Companies = () => {
    return(
        <>
            <Container style={{ marginTop:"50px", marginBottom:"50px"}}>
                <h3 style={{fontWeight:"900", marginBottom:"20px"}}>Popular Professional Services</h3>
                <Row className="text-center">
                    <Col>
                        <Card className="text-light" >
                            <Card.Img src={wordpress} style={{height:"350px"}} alt="Card image" />
                            <Card.ImgOverlay>

                                <Card.Title><b>Wordpress Designing</b></Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card  className="text-light">
                            <Card.Img src={logoDesigning} style={{height:"350px"}} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title><b>Logo Designing</b></Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card  className="text-light">
                            <Card.Img src={socialMedia} style={{height:"350px"}} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title><b>Social Media</b></Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card  className="text-light">
                            <Card.Img src={websiteDesigning} style={{height:"350px"}} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title><b>Website Designing</b></Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div style={{backgroundColor:"#e6f2ff"}}>
                <Container>
                    <Row style={{padding:"70px"}}>
                        <Col>
                            <h4 style={{fontWeight:"900"}}>Why <i>FreelanceIt</i> is the best in the Market</h4>
                            <div>
                                <h6><CheckCircleOutlineIcon fontSize="small" /> Get Quality Work done</h6>
                                <p>Get the best quality work from the best freelancers in the market.Join us and get out source your work</p>
                            </div>
                            <div>
                                <h6><CheckCircleOutlineIcon fontSize="small" /> Protected Payments</h6>
                                <p>Scared of online payment ? Be assured about the payment methods and secured payment gateways.</p>
                            </div>
                            <div>
                                <h6><CheckCircleOutlineIcon fontSize="small" /> 24/7 Support</h6>
                                <p>Have a question in mind. Contact our customer support team and get assistance. </p>
                            </div>
                        </Col>
                        <Col style={{marginLeft:"40px"}}>
                            <img src={team} alt="freelanceIt" style={{height:"330px"}} />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{marginTop:"70px"}}>
                <Testimonial />
            </div>
            
        </>
    )
}

export default Companies;