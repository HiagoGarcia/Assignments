import AuthorForm from "../components/AuthorForm";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";;

const Update = (props) => {

    const { id } = useParams();
    const [author, setAuthor] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                setAuthor(res.data);
            })
        // eslint-disable-next-line
    }, [])

    const updateAuthor = author => {
        axios.put(`http://localhost:8000/api/author/${id}`, author)
            .then(res => {
                console.log(res)
                navigate('/')
            });
    }
    return (
        <div>
            <h1>Update Author</h1>
            {author && (
                <>
                    <Link to="/">Home</Link>
                    <AuthorForm
                        onSubmitProp={updateAuthor}
                        initialFirstName={author.firstName}
                        initialLastName={author.lastName}
                        initialRating={author.rating}
                    />
                    <Link to="/">Cancel</Link>
                </>
            )}
        </div>
    )
}

export default Update;