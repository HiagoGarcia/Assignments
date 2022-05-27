import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form } from "react-bootstrap";

const UserLogin = (props) => {
    const [errorMessages, setErrorMessages] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const { user } = props;
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const errors = {
        email: "invalid email",
        password: "invalid password"
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/user/login", {
            email,
            password
        }, { withCredentials: true })

            .then(res => {
                setLoggedIn(true)
                console.log(res)
                navigate('/')
            })
            .catch(err => {
                const errArr = []
                const errResData = err.response.data.errorMessages
                console.log(errResData)
                if (user) {
                    if (user.password !== password.value) {
                        setErrorMessages({ name: "pass", message: "Email or password is incorrect" });
                    }
                }
                // for (const key in errResData) {
                //     errArr.push(errResData[key]["message"])
                // }
                // setErrorMessages(errArr)
            })
    };

    return (
        <Container>
            <Link to="/" >Home</Link>
            <Form onSubmit={handleSubmit}>
                {renderErrorMessage("pass")}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required name="email" onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password </Form.Label>
                    <Form.Control type="password" placeholder="Enter password" required name="password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </Form>
        </Container>
    );
}

export default UserLogin