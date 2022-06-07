import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";

const UpdateUser = (props) => {
    const [user, setUser] = useState();
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/auth`, {withCredentials: true})
            .then(res => {
                setUser(res.data)
            })
    }, [])

    const updateUser = user => {
        axios.put(`http://localhost:8000/api/user/${user._id}`, user, {withCredentials: true})
            .then(res => {
                console.log(res)
                navigate(`/user/${user._id}`)
            });
    }

    return(
        <div>
            <h1>Edit User</h1>
            {user && (
                <>
                <UserForm
                    onSubmitProp={updateUser}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    email={user.email}
                />
                </>
            )}
        </div>
    )
}

export default UpdateUser