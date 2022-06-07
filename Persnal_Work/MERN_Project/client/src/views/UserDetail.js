import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Container, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Navigationbar from "../components/Navigationbar";
import UserDiscussions from "../components/UserDiscussions";
import UserInfo from "../components/UserInfo";


const UserDetail = (props) => {
    const [user, setUser] = useState()
    const { id } = useParams()


    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/${id}`, user, { withCredentials: true })
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/auth`, { withCredentials: true })
            .then(res => {
                setUser(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <Navigationbar />
            <div className="row">
                <div className="col-md-4 ms-auto">
                    {user && <Nav.Link href={`/user/edit/${user}`}>Edit Account</Nav.Link>}
                </div>
            </div>
            <Container>
                <div className="row">
                    {user && <UserInfo user={user} />}
                </div>
                <div className="row">
                    <div className="col-md-4 ms-auto">
                        <UserDiscussions />
                    </div>
                </div>
            </Container>
        </Container>
    )
}

export default UserDetail;