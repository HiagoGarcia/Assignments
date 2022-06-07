import axios from "axios";
import React, { useEffect, useState } from "react";
import Navigationbar from "../components/Navigationbar";

const HomePage = (props) => {
    const [user, setUser] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/auth`, { withCredentials: true})
            .then(res => {
                setUser(res.data)
            });
    }, [])


    return (
        <div>
            <Navigationbar/>
        </div>
    )
}

export default HomePage;