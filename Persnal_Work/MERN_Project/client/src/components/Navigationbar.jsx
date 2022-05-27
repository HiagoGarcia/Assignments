import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap'

const Navigationbar = (props) => {
    const [user, setUser] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/user/logout", {}, {withCredentials: true})
            .then(res => {
                setUser(null)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/auth`, { withCredentials: true })
            .then(res => {
                setUser(res.data)
            })
            .catch(err => console.log(err))
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
                            {user && <Nav.Link href={`/user/${user._id}`}>Account</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        {user ? <div className="logged">
                            <Navbar.Text>
                                Signed in as: {user.firstName} {user.lastName} 
                            </Navbar.Text>
                            <button onClick={handleSubmit}>Logout</button>
                        </div>:
                            <Nav.Link href="/login">Login</Nav.Link>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigationbar;