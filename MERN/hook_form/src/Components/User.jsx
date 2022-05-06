import React, {useState} from 'react'

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (e) => {
        e.preventDefualt();
        const newUser = {firstname, lastname, email, password};
        console.log("Welcome", newUser);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
    };

    return(
        <div>

        <form onSubmit={createUser}>
            <div>
                <label htmlFor="Firstname">First Name</label>
                <input type="text" name="firstname" onChange={ (e) => setFirstname(e.target.value)} value={firstname} />
            </div>
            <div>
                <label htmlFor="Lastname">Last Name</label>
                <input type="text" name="lastname" onChange={ (e) => setLastname(e.target.value)} value={lastname}/>
            </div>
            <div>
                <label htmlFor="Email">Email</label>
                <input type="text" name="email" onChange={ (e) => setEmail(e.target.value)} value={email}/>
            </div>
            <div>
                <label htmlFor="Password">Password</label>
                <input type="text" name="password" onChange={ (e) => setPassword(e.target.value)} value={password}/>
            </div>
            <div>
                <label htmlFor="ConfirmPassword">ConfirmPassword</label>
                <input type="text" name="confirmPassword"/>
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