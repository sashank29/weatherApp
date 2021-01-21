import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Icon from '../utils/Icon';

export const Header = () => {
  return (<React.Fragment>
    <Navbar bg="dark" className="navbar appHeader">
      <Navbar.Brand href="/">
        <Icon icon="cloud-sun" size="3x"
          className="d-inline-block align-top text-white" />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
        <NavLink to="/help" className="nav-link">Help</NavLink>
      </Nav>
    </Navbar>
  </React.Fragment>);
}

export default Header;