import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserForm from "../components/UserForm";

const NewUser = () => {
    const[user, setUser] = useState()

    useEffect(() => {
        axios.get('http://localhost:8000/api/user')
            .then(res => {
                setUser(res.data)
            })
    })

    return(
        <div>
            <header><h1>Create User</h1></header>
            <Link to="/">Home</Link>
            <UserForm user={user}/>
        </div>
    )
}

export default NewUser;