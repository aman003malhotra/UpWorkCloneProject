import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper/index";
import { Navbar, Nav, Container } from 'react-bootstrap';

// const currentTab = (history, path) => {
//     if (history.location.pathname === path) {
//         return {color: "#2ecc72"};
//     }else{
//         return {color: "#FFFFFF"}
//     }
// };

const Menu = () => {

const { user } = isAuthenticated();
console.log(user)

return (
  <>
    <Container style={{backgroundColor:"transparent", color:"white", fontSize:"24px"}}>
      <Navbar collapseOnSelect expand="lg" >
        <Navbar.Brand style={{fontSize:"2.5rem", fontWeight:"900"}}>
          <Link to="/" style={{textDecoration:"none", color:"white"}}>
          <span className="text-success">Free</span>lanceIt
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {isAuthenticated() && user.role === 0 && (
              <Nav.Link>
              <Link to="/adminportal" style={{textDecoration:"none", color:"white"}}>
                Admin Portal
              </Link>
            </Nav.Link>
            )}
            {isAuthenticated() && user.role === 1 && (
              <>
              <Nav.Link>
                <Link to="/add/job" style={{textDecoration:"none", color:"white"}}>
                  Add New Job
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/myjobs" style={{textDecoration:"none", color:"white"}}>
                  Uploaded Jobs
                </Link>
              </Nav.Link>
              </>
            )}
            {isAuthenticated() && user.role === 2 && (
            <Nav.Link>
              <Link to="/jobs" style={{textDecoration:"none", color:"white"}}>
                Find Work
              </Link>
            </Nav.Link>
            )}
            {isAuthenticated() && user.role === 1 && (
            <Nav.Link>
              <Link to="/freelancers" style={{textDecoration:"none", color:"white"}}>
                Freelancers
              </Link>
            </Nav.Link>
            )}
            {!isAuthenticated() && (
              <Fragment>
                <Nav.Link>
                  <Link to="/signup" style={{textDecoration:"none", color:"white"}}>
                    Signup
                  </Link>
                </Nav.Link>
                  <Nav.Link>
                  <Link to="/signin" style={{textDecoration:"none", color:"white"}}>
                    Login
                  </Link>
                </Nav.Link>
              </Fragment>
            )}
            {isAuthenticated() && user.role === 2 && (
            <Nav.Link>
              <Link to="/myprofile" style={{textDecoration:"none", color:"white"}}>
                My Profile 
              </Link>
            </Nav.Link>
            )}

            {isAuthenticated() && (
            <Nav.Link>
              <Link to="/" style={{textDecoration:"none", color:"white"}} onClick={() => signout()}>
                Signout
              </Link>
            </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </>
)}

export default Menu;