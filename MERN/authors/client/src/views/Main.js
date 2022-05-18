import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthorList from "../components/AuthorList";

const Main = (props) => {
    const [authors, setAuthors] = useState()

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => {
                setAuthors(res.data)
            });
    }, []);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }



    return (
        <div>
            <Link to="/author/new">Create and author</Link>
            {authors && <AuthorList authors={authors} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;