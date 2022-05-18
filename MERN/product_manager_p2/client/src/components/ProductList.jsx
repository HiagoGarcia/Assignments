import React from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = (props) => {
    return (
        <div>
            {props.product.map( (product, i) =>
            <p key={i}>
                <Link to={"/api/product/" +product._id}>{product.title}</Link>
                </p>
            )}
        </div>
    )
}

export default ProductList