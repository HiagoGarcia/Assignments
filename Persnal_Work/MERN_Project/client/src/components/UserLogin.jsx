import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form } from "react-bootstrap";

const UserLogin = (props) => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { user } = props;
    const navigate = useNavigate();

    const errors = {
        email: "invalid email",
        pass: "invalid password"
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const handleSubmit = (e) => {
        e.preventDefault();

        var { email, pass } = document.forms[0];

        const userData = user.find((user) => user.email === email.value)

        if (userData) {
            if (userData.password !== pass.value) {
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
                navigate('/');
            }
        } else {
            setErrorMessages({ name: "email", message: errors.email });
        }
    };

    return (
        <Container>
            <Link to="/" >Home</Link>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required name="email"/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    {renderErrorMessage("email")}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password </Form.Label>
                    <Form.Control type="password" placeholder="Enter password" required name="pass"/>
                    {renderErrorMessage("pass")}
                </Form.Group>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </Form>
        </Container>
    );
}

export default UserLogin