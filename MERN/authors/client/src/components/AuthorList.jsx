import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import DeleteButton from './DeleteButton';

const AuthorList = (props) => {
    const {authors} = props;

    return (
        <div>
            {authors.map((author, idx) => {
                return (
                    <p key={idx}>
                        <Link to={`/author/${author._id}/edit`}>
                            {author.firstName} {author.lastName}
                        </Link>
                        |
                        <Link to = {`/author/${author._id}/edit`}>
                            Edit
                        </Link>
                        |
                        <DeleteButton authorId = {author._id} successCallback = 
                        {() => props.removeFromDom(author._id)}/>
                    </p>
                )
            })}
        </div>
    )
}

export default AuthorList;