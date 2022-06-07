import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const UserInfo = (props) => {
    const {user} = props



    return (
        <div>
            <Container>
                <div className="row">
                    <h1>{user.firstName} {user.lastName}</h1>
                </div>
                <div className="row">
                    <h4>Email: {user.email}</h4>
                </div>
            </Container>
        </div>
    )
}

export default UserInfo