import React from "react";
import { Link } from "react-router-dom";
import UserForm from "../components/UserForm";

const NewUser = () => {

    return(
        <div>
            <header><h1>Create User</h1></header>
            <Link to="/">Home</Link>
            <UserForm/>
        </div>
    )
}

export default NewUser;