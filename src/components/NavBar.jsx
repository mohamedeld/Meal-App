import React from 'react'
import {Navbar,Nav,Container,Button,Form, Row} from "react-bootstrap";
const NavBar = () => {
  return (
    <Row>
        <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">Resturant Meal</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-warning">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  )
}

export default NavBar