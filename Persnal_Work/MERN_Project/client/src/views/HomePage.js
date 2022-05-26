import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap'
import Navigationbar from "../components/Navigationbar";

const HomePage = (props) => {
    const [user, setUser] = useState()

    useEffect((userId) => {
        axios.get(`http://localhost:8000/api/user/${userId}`)
            .then(res => {
                setUser(res.data)
            });
    }, [])


    return (
        <div>
            <Navigationbar />
        </div>
    )
}

export default HomePage;