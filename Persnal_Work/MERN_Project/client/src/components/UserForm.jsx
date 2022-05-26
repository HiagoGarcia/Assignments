import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

//eslint-disable-next-line
export default (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const onSubmitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/user', {
            firstName,
            lastName,
            email,
            password
        })
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err => {
            const errArr = []
            const errResData = err.response.data.errors
            console.log(errResData)
            for (const key in errResData) {
                errArr.push(errResData[key]["message"])
            }
            if(password !== confirmPassword) {
                errArr.push('Passwords do not match')
                return
            }
            setErrors(errArr)
        })
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
            {
                errors.map((err, i) => (
                    <p key={i} style={{color: "red"}}>{err}</p>
                ))
            }
                <p>
                    <label>First Name:</label><br />
                    <input type='text' onChange={(e) => setFirstName(e.target.value)} value = {firstName} />
                </p>
                <p>
                    <label>Last Name:</label><br />
                    <input type='text' onChange={(e) => setLastName(e.target.value)} value = {lastName} />
                </p>
                <p>
                    <label>Email:</label><br />
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value = {email} />
                </p>
                <p>
                    <label>Password:</label><br />
                    <input type='password' onChange={(e) => setPassword(e.target.value)} value = {password} />
                </p>
                <p>
                    <label>Confirm Password:</label><br />
                    <input type='password' required onChange={(e) => setConfirmPassword(e.target.value)} value = {confirmPassword} />
                </p>
                <input type='submit' />
            </form>
        </div>
    )
}