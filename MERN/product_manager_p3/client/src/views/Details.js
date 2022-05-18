import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams, Link, useNavigate} from "react-router-dom"

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
            .then(res => {
                navigate('/api/product/')
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then (res => setProduct(res.data))
            .catch(err => console.log(err));
            // eslint-disable-next-line
    }, []);

    return (
        product&&

        <div>
        <p>Title: {product.title}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <Link to={`/api/product/${product._id}/edit`}>Edit</Link>
        |
        <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
        </div>
    )
}

export default Detail;