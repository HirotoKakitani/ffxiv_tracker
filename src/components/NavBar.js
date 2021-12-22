import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import '../styles/NavBar.css'
class NavBar extends React.Component {
  render() {
    return (
      <Navbar className="nav-test-class" collapseOnSelect expand="lg">
        <Navbar.Brand href="/">FFXIV Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="ffxiv-navbar-collapse"></Navbar.Toggle>
        <Navbar.Collapse id="ffxiv-navbar-collapse">
          <Nav>
            <Nav.Link className="ffxiv-navbar-item" href="/mounts">Mounts</Nav.Link>
            <Nav.Link className="ffxiv-navbar-item" href="/404">Minions</Nav.Link>
            <Nav.Link className="ffxiv-navbar-item" href="/404">Aether Currents</Nav.Link>
            <Nav.Link className="ffxiv-navbar-item" href="/404">Minions</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar