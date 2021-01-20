import React from 'react'
import './Header.css'
import logo from '../img/logo.svg'
import { Link } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="header">

            
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand  className='mr-5 ml-5' href="/"><img src={logo} alt='' className="logo " /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='mr-5'>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link eventKey={2} href="/about">
                          About
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="/course">
                            Course
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="/resource">
                            Resource
                    </Nav.Link>
                    <Nav.Link eventKey={3} href="/contact">
                            Contact us
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <button className='btn'> Enroll now</button>
            </Navbar>
        </div>
    )
}

export default Header
