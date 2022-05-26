import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap'

const Navigationbar = (props) => {
    const [user, setUser] = useState()

    useEffect((userId) => {
        axios.get(`http://localhost:8000/api/user/${userId}`)
            .then(res => {
                setUser(res.data)
            });
    }, [])


    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Forum Site</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Navbar.Text>|</Navbar.Text>
                            <Nav.Link href="/posts">Discussions</Nav.Link>
                            <Navbar.Text>|</Navbar.Text>
                            <Nav.Link href="/support">Contact</Nav.Link>
                            <Navbar.Text>|</Navbar.Text>
                            <Nav.Link href={`/user/`}>Account</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="/login">Place Holder</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigationbar;