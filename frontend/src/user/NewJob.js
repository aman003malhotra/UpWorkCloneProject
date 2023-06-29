import React, {useState} from 'react';
import Menu from '../core/Menu';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import { isAuthenticated } from '../auth/helper/index';
import { newJob } from '../auth/helper/jobs';
import Footer from "../core/Footer";



const NewJob = () =>{
    const [values, setValues] = useState({
        title: "",
        description:"",
        typeOfPayment: "",
        price: "",
        experienceNeeded:"",
        error: "",
        success: false
      });

    const { title,description, typeOfPayment, price, experienceNeeded, error, success } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const {user, token} = isAuthenticated();

    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        newJob({ title, description, typeOfPayment, price, experienceNeeded}, user._id, token)
          .then(data => {
            if (data.err) {
              setValues({ ...values, error: data.err, success: false });
            } else {
              setValues({
                ...values,
                title: "",
                description:"",
                typeOfPayment: "",
                price: "",
                experienceNeeded:"",
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
                New Job Added.
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
        <Container style={{padding:"35px", height:"100vh"}}>
            <Row >
                <Col md={{ span: 6, offset: 3 }} style={{border:"2px solid black", padding:"30px", borderRadius:"7px"}}>
                    <h4 style={{ fontWeight:"900", paddingBottom:"10px"}}>Add a New Job</h4>
                    <Form>                   
                        <Form.Group controlId="title">
                            <Form.Control 
                            type="text" 
                            placeholder="Job Title" 
                            onChange={handleChange("title")}
                            value={title} />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Control 
                            type="text" 
                            placeholder="Description of Job" 
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
                            placeholder="Price (USD)"
                            onChange={handleChange("price")}
                            value={price} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Experience Needed</Form.Label>
                            <Form.Control as="select" onChange={handleChange("experienceNeeded")}>
                                <option>Select</option>
                                <option value="Basic">Basic</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </Form.Control>
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

export default NewJob;