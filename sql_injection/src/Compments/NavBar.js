import React from "react";
import { Navbar,Container,Nav,NavDropdown} from "react-bootstrap";
import { NavLink } from "react-router-dom";
const NavBarMenu = ()=>{
    return(
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">SQL Injection</Navbar.Brand>
                    <Nav className="me-auto">
                    <NavDropdown title="Login" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                        <NavDropdown.Item href="/loginex">LoginEx</NavDropdown.Item>
                    </NavDropdown>
                        <NavLink className="nav-link" to="/search">Serach</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};
export default NavBarMenu;