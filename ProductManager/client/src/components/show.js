//Shows page after entering 
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";
//Must be imported from the library

const Show = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams(); 
    const navigator = useNavigate();

    //UseEffect is a function that takes 2 arguments: a function and an array of dependencies 
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/product/" + id)
            .then( res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => console.log('Get product by ID error', err));
        }, []);

    const deleteProduct = (id) => 
            axios
                .delete(`http://localhost:8000/api/product/` + id)
                .then((res) => {
                    navigator('/')
                })
                .catch(err => console.log(err))

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={(e) => deleteProduct(product._id)}>Delete</button>
        </div>
    )
}

export default Show;

