import axios from "axios";
import React, {useEffect, useState} from 'react';
import Navigationbar from "../components/Navigationbar";

const UserDetail = (props) => {
    const [user, setUser] = useState()

    useEffect((userId) => {
        axios.get(`http://localhost:8000//api/user/${userId}`, { withCredentials: true})
            .then(res => {
                setUser(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Navigationbar/>
        </div>
    )
}

export default UserDetail;