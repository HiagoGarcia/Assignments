import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams, Link} from "react-router-dom"

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams();
    const {removeFromDom} = props;

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
            .then(res => {
                removeFromDom(productId)
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
        <Link to={`/api/product`}><button onClick={(e) => {deleteProduct(product._id)}}>Delete</button></Link>
        </div>
    )
}

export default Detail;