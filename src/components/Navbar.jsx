import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import TuneIcon from "@mui/icons-material/Tune";
import {NavLink} from 'react-router-dom'

import "./navbar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="generalNavbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler">
          <TuneIcon />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='nav-link' to="/">Home</NavLink>
            <NavLink className='nav-link' to="/faculty">Faculty</NavLink>
            <NavLink className='nav-link' to="/activity">Activities</NavLink>
            <NavLink className='nav-link' to="/events">Events</NavLink>
            <NavLink className='nav-link' to="/labs">Labs</NavLink>
            <NavLink className='nav-link' to="/chairman">Chairman</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
