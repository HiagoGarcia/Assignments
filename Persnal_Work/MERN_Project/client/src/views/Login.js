import React, {useEffect, useState} from "react";
import axios from "axios";
import UserLogin from "../components/UserLogin";
import { Container } from "react-bootstrap";

const Login = (props) => {
    const [user, setUser] = useState()

    useEffect(() => {
        axios.get('http://localhost:8000/api/user')
            .then(res => {
                setUser(res.data)
            });
    }, []);

    return (
        <Container>
            <div>
                {user && <UserLogin user={user}/>}
            </div>
        </Container>
    )
}

export default Login;