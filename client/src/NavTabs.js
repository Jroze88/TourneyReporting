import React, { Component } from 'react';
import {Nav, Navbar, NavItem, MenuItem, Form, Button, NavDropdown} from 'react-bootstrap'
import $ from 'jquery';
import logo from './logo.png'



class NavTabs extends Component {


  state = {
    menu : 'up'
  }

  clickHandler(e) {
    e.preventDefault()

    if (this.state.menu === 'up') {

    $('.dropdown-menu').css('display', 'block')
      this.setState({
        menu : 'down'
      })

    } else if (this.state.menu === 'down') {
      $('.dropdown-menu').css('display', 'none')
      this.setState({
        menu : 'up'
      })
    }


  }

  render() {

    const title = {
      color: 'white',
      fontSize : '1.0em',
      textAlign: 'center'
    }

    const styles = {
      backgroundColor: '#343a4050'
    }


return (

<Navbar bg="dark" variant="dark" expand="lg" style={styles}>
  <Navbar.Brand href="#home"><img
        alt=""
        src='/logo.png'
        width="95"
        height="45"
        className="d-inline-block align-top"
      /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <h3 style={title}>URL would be 'https://ASOIAFcc.com/TOreport' or something&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
          Where the TO would enter info &nbsp;&nbsp;
          &nbsp;&nbsp;          </h3>
    <Form inline>
      <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>


)}
}



export default NavTabs;