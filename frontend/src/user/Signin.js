import React, {useState} from 'react';
import Menu from '../core/Menu';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from '../auth/helper/index'
import Footer from "../core/Footer";


const Signin = () =>{
    const [values, setValues] = useState({
        email:"",
        password:"",
        error:"",
        loading:false,
        didRedirect: false
    })

    const { email, password, error, loading, didRedirect } = values;

    const handleChange = name => event => {
        setValues({...values, error: false, [name]:event.target.value });
    };

    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password })
          .then(data => {
            if (data.error) {
                console.log(data.error)
              setValues({ ...values, error: data.error, loading: false });
            } else {
                authenticate(data, () => {
                setValues({
                  ...values,
                  didRedirect: true
                });
              });
            }
          })
          .catch(console.log("signin request failed"));
    };

    const performRedirect = () => {
        if (didRedirect) {
            const { user } = isAuthenticated(); 
          if (user && user.role === 0) {
            return <Redirect to="/adminportal" />;
          } 
          else if(user && user.role === 1) {
            return <Redirect to="/freelancers" />;
          }
          else if(user && user.role === 2) {
            return <Redirect to="/jobs" />;
          }
        }
    };

    const errorMessage = () => {
    return (
        <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
            <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
            >
            {error}
            </div>
        </div>
        </div>
        );
    };

    return(
        <>
        <div  style={{backgroundColor:"#1d4354"}}>
            <Menu />
        </div>
        <Container style={{padding:"35px", height:"100vh"}}>
            <Row >
                <Col md={{ span: 6, offset: 3 }} style={{border:"2px solid black", padding:"30px", borderRadius:"7px"}}>
                <h4 style={{ fontWeight:"900", paddingBottom:"10px"}}>You already have an account, Login here</h4>
                    <Form  style={{backgroundColor:"white"}}>
                        <Form.Group controlId="email">
                            <Form.Control 
                            type="email" 
                            placeholder="Enter email"
                            onChange={handleChange("email")}
                            value={email} />

                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Control 
                            type="password" 
                            placeholder="Password"
                            onChange={handleChange("password")}
                            value={password} />
                        </Form.Group>
                        
                        <Button variant="success" type="submit" onClick={onSubmit} block>
                            Submit
                        </Button>
                        <Form.Text >
                            Doesn't Have an account<Link to="/signup" className="text-success"> Signup</Link>
                        </Form.Text>
                    </Form>
                </Col>
            </Row>
        </Container>
        {errorMessage()}
        {performRedirect()}
    <Footer />

        </>
    );
}

export default Signin;