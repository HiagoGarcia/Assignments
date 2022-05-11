import React, { useState } from 'react'

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstNameError] = useState(true);
    const handleFirstname = (e) => {
        setFirstname(e.target.value);
        if (e.target.value.length < 1) {
            setFirstNameError("First name is required")
        } else if (e.target.value.length < 2) {
            setFirstNameError("First name must be 2 characters or longer.")
        } else {
            setFirstNameError("")
        }
    }

    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastNameError] = useState(true);
    const handleLastname = (e) => {
        setLastname(e.target.value);
        if (e.target.value.length < 1) {
            setLastNameError("Last name is required")
        } else if (e.target.value.length < 2) {
            setLastNameError("Last name must be 2 characters or longer.")
        } else {
            setLastNameError("")
        }
    }

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(true);
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is required")
        } else if (e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer")
        } else {
            setEmailError("")
        }
    }

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(true);
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer.")
        } else {
            setPasswordError("")
        }
    }

    const [confirmpassword, setConfirm] = useState("");
    const [confirmpasswordError, setConfirmError] = useState(true);
    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        if (e.target.value !== password) {
            setConfirmError("Must match your password.")
        } else {
            setConfirmError("")
        }
    }


    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefualt();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
    };

    return (
        <div>
            <form onSubmit={createUser}>
                {
                    hasBeenSubmitted ?
                        <h3>Thank you for submitting the form!</h3> :
                        <h3>Welcome, please submit the form.</h3>
                }
                <div>
                    <label htmlFor="Firstname">First Name</label>
                    <input type="text" name="firstname" onChange={handleFirstname} value={firstname} />
                    {
                        firstnameError ?
                        <p style={{color:'red'}}>{firstnameError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="Lastname">Last Name</label>
                    <input type="text" name="lastname" onChange={handleLastname} value={lastname} />
                    {
                        lastnameError ?
                        <p style={{color:'red'}}>{lastnameError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="Email">Email</label>
                    <input type="text" name="email" onChange={handleEmail} value={email} />
                    {
                        emailError ?
                        <p style={{color:'red'}}>{emailError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="Password">Password</label>
                    <input type="text" name="password" onChange={handlePassword} value={password} />
                    {
                        passwordError ?
                        <p style={{color:'red'}}>{passwordError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="ConfirmPassword">ConfirmPassword</label>
                    <input type="text" name="confirmPassword" onChange={handleConfirm} value={confirmpassword} />
                    {
                        confirmpasswordError ?
                        <p style={{color:'red'}}>{confirmpasswordError}</p> :
                        ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
        </div>
    );
};

export default UserForm;