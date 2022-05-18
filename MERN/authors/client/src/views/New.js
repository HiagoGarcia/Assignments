import React, { useState } from "react";
import axios from "axios";
import AuthorForm from "../components/AuthorForm";
import { useNavigate, Link } from "react-router-dom";


const New = (props) => {
    const [authors, setAuthors] = useState();
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);


    const createAuthor = author => {
        axios.post('http://localhost:8000/api/author', author)
            .then(res => {
                setAuthors(res.data)
                navigate('/')
            })
            .catch(err => {
                const errArr = []
                const errResData = err.response.data.errors
                console.log(errResData)
                for(const key in errResData){
                    errArr.push(errResData[key]["message"])
                }
                setErrors(errArr)
            })
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <AuthorForm onSubmitProp={createAuthor} initialFirstName="" initialLastName="" errors ={errors} />
            <Link to="/">Cancel</Link>
        </div>
    )
}

export default New;