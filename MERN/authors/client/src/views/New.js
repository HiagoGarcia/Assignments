import React, { useState } from "react";
import axios from "axios";
import AuthorForm from "../components/AuthorForm";
import { useNavigate, Link } from "react-router-dom";


const New = (props) => {
    const [authors, setAuthors] = useState();
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const options = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' }
    ]

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
            <AuthorForm onSubmitProp={createAuthor} initialFirstName="" initialLastName="" errors ={errors} initialRating="" options={options}/>
            <Link to="/">Cancel</Link>
        </div>
    )
}


export default New;