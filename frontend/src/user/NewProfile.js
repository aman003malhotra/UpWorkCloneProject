import React, {useState} from 'react';
import Menu from '../core/Menu';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import { isAuthenticated } from '../auth/helper/index';
import { newProfile } from '../auth/helper/profiles';
import Footer from "../core/Footer";


const NewProfile = () =>{
    const [values, setValues] = useState({
        title: "",
        description:"",
        price: "",
        typeOfPayment:"",
        qualification:"",
        institution:"",
        availabilty:"",
        error: "",
        success: false
      });

    const { title,description, typeOfPayment, price, qualification, institution, availabilty, error, success } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const {user, token} = isAuthenticated();

    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        newProfile({ title,description, typeOfPayment, price, qualification, institution, availabilty,}, user._id, token)
          .then(data => {
            if (data.err) {
              setValues({ ...values, error: data.err, success: false });
            } else {
              setValues({
                ...values,
                title: "",
                description:"",
                price: "",
                typeOfPayment:"",
                qualification:"",
                institution:"",
                availabilty:"",
                error: "",
                success: true
              });
            }
          })
          .catch(console.log("Error in signup"));
    };

    const successMessage = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <div
                className="alert alert-success"
                style={{ display: success ? "" : "none" }}
              >
                New Profile Made.
              </div>
            </div>
          </div>
        );
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
        <Container style={{padding:"35px"}}>
            <Row >
                <Col md={{ span: 6, offset: 3 }} style={{border:"2px solid black", padding:"30px", borderRadius:"7px"}}>
                    <h4 style={{ fontWeight:"900", paddingBottom:"10px"}}>Make up a profile, get hired!</h4>
                    <Form>                   
                        <Form.Group controlId="title">
                            <Form.Control 
                            type="text" 
                            placeholder="Precisely tell us what you are good at" 
                            onChange={handleChange("title")}
                            value={title} />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Control 
                            type="text" 
                            placeholder="Description of your skills" 
                            onChange={handleChange("description")}
                            value={description}  />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Type of Payment </Form.Label>
                            <Form.Control as="select" onChange={handleChange("typeOfPayment")}>
                                <option>Select</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Fixed">Fixed</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="price">
                            <Form.Control 
                            type="text" 
                            placeholder= "How much do you charge"
                            onChange={handleChange("price")}
                            value={price} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Qualification </Form.Label>
                            <Form.Control as="select" onChange={handleChange("qualification")}>
                                <option>Select</option>
                                <option value="Graduation">Graduation</option>
                                <option value="Post Graduation">Post Graduation</option>
                                <option value="High School">High School</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="institution">
                            <Form.Control 
                            type="text" 
                            placeholder= "Name of your Alma Mater"
                            onChange={handleChange("institution")}
                            value={institution} />
                        </Form.Group>
                        <Form.Group controlId="availabilty">
                            <Form.Control 
                            type="text" 
                            placeholder= "How many hours/week you can work"
                            onChange={handleChange("availabilty")}
                            value={availabilty} />
                        </Form.Group>
                        <Button variant="success" type="submit" onClick={onSubmit} block>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        {successMessage()}
        {errorMessage()}
        <Footer />

        </>
    );
}

export default NewProfile;