import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

export default class NavBar extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
            <Navbar.Header>
            <Nav pullLeft>
            </Nav>
            <img src={ require('../images/LogoBLK.png') } alt="crown logo" height="30"/>
            <Navbar.Brand>
            <a href="#brand">Open Budget: CLT</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav pullRight>
            <NavItem eventKey={1} href="/#About">About</NavItem>

            <NavItem eventKey={3} href="/visualization">Visualizations</NavItem>
            <NavItem eventKey={4} href="#">Data</NavItem>
            <NavItem eventKey={5} href="#">Resources</NavItem>
            <NavDropdown eventKey={6} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={6.1}>Charlotte Budget 101</MenuItem>
            <MenuItem eventKey={6.2}>Tools and Projects</MenuItem>
            </NavDropdown>
            <NavItem eventKey={7} href="#">Feedback</NavItem>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            );
    }
}
