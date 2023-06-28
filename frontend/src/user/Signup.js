import React, { useState } from "react";
import Menu from "../core/Menu";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper/index";
import Footer from "../core/Footer";

const Signup = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    error: "",
    success: false,
  });

  const { firstName, lastName, email, password, role, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      firstName != "" &&
      lastName != "" &&
      email != "" &&
      password != "" &&
      role != ""
    ) {
      setValues({ ...values, error: false });
      signup({ firstName, lastName, email, password, role })
        .then((data) => {
          if (data.error) {
            setValues({ ...values, error: data.error, success: false });
          } else {
            setValues({
              ...values,
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              error: "",
              value:"",
              success: true,
            });
          }
        })
        .catch((err) => console.log(err));
    }else{
      setValues({ ...values, error: "please fill the form correctly"});
    }
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please
            <Link to="/signin"> Login Here</Link>
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
  return (
    <>
      <div style={{ backgroundColor: "#1d4354" }}>
        <Menu />
      </div>
      <Container style={{ padding: "35px", height:"100vh" }}>
        <Row>
          <Col
            md={{ span: 6, offset: 3 }}
            style={{
              border: "2px solid black",
              padding: "30px",
              borderRadius: "7px",
            }}
          >
            <h4 style={{ fontWeight: "900", paddingBottom: "10px" }}>
              Don't Have an Account, Signup!
            </h4>
            <Form>
              <Row>
                <Col>
                  <Form.Group controlId="firstName">
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      onChange={handleChange("firstName")}
                      value={firstName}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="lastName">
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      onChange={handleChange("lastName")}
                      value={lastName}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handleChange("password")}
                  value={password}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={handleChange("email")}
                  value={email}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="role">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  as="select"
                  name="role"
                  onChange={handleChange("role")}
                  value={role}
                >
                  <option value="">Why do you want to join freelanceIt</option>
                  <option value="2">Become a Freelancer</option>
                  <option value="1">To Hire Someone</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I Agree all to Terms and Conditions"
                />
              </Form.Group>
              <Button variant="success" type="submit" onClick={onSubmit} block>
                Submit
              </Button>
              <Form.Text>
                Already Have an account
                <Link to="/signin" className="text-success">
                  {" "}
                  Login
                </Link>
              </Form.Text>
            </Form>
          </Col>
        </Row>
      </Container>
      {successMessage()}
      {errorMessage()}
      <Footer />
    </>
  );
};

export default Signup;
