import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #4E008E; }
  a, .navbar-nav, .navbar-light .nav-link {
    color:#ffffff;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #ffffff;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

export const Header = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Tampere University</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Notification</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/organization">Settings</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default Header