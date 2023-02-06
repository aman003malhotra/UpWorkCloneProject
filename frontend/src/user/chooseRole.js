/* eslint-disable */
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { signout, isAuthenticated, updateRole } from '../auth/helper';
import Menu from '../core/Menu';
import freelance from "../static/freelancer.jpg";
import employer from "../static/employer.jpg";
import Footer from "../core/Footer";


const chooseRole = () => {
    
    const { user, token } = isAuthenticated();

    const role = (num) => {
        updateRole(user._id, num, token);
        signout();
    }
return(
    <>  
        <div style={{backgroundColor:"#1d4354"}}>
            <Menu />
        </div>
        
        <Container style={{marginTop:"6%"}}>
        <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <div
                className="alert alert-success"
              >
                Make Sure to login after choosing the Role
              </div>
            </div>
          </div>
            <h3 style={{ fontWeight:"900", paddingBottom:"30px", textAlign:"center"}}>Choose What you want to Do</h3>

            <Row >
                <Col md={{ span: 4}} style={{marginLeft:"auto"}}>
                    <Link onClick={()=>{role(2)}} to="/">
                        <Card className="text-light" >
                            <Card.Img src={freelance} style={{height:"350px"}} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title><h4><b>Become Freelancer</b></h4></Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Link>
                </Col>
                <Col md={{ span: 4}} style={{marginRight:"auto"}}>
                    <Link onClick={()=>{role(1)}} to="/">
                        <Card className="text-light" >
                            <Card.Img src={employer} style={{height:"350px"}} alt="Card image" />
                            <Card.ImgOverlay>

                                <Card.Title><h4><b>Hire Someone</b></h4></Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </Container>
        <Footer />
    </>
)
}


export default chooseRole;