import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./CustomNavbar.scss";

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" collapseOnSelect>
        <Navbar.Brand href="/">React App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="news">News</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default CustomNavbar;
