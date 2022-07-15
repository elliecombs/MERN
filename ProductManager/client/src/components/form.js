//Form to enter in the products 
// {} = destructing and [ ] = is used for setting state

import React, { useState } from 'react'
import axios from 'axios';
const Product = ({ productList, setProductList }) => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/product', {
            title,    // this is shortcut syntax for title, setTitle
            price,      // this is shortcut syntax for price, setPrice
            description,
        })
            .then(res=>{
                console.log(res); 
                console.log("here");
                console.log(res.data);
                setTitle("");
                setPrice("");
                setDescription("");
                setProductList([ ...productList, res.data])
        })
            .catch(err=>console.log(err))
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
        <header>Product Manager</header>
            <div>
                <p>
                    <label>Title</label>
                    <input type="text" value={title} name="title" onChange = {(e)=> setTitle(e.target.value)}/>
                </p>
            </div>
            <div>
                <p>
                    <label>Price</label>
                    <input type="number" value={price} name="price" onChange = {(e)=> setPrice(e.target.value)}/>
                </p>
            </div>
            <div>
                <p>
                    <label>Description</label>
                    <input type="text" value={description} name="description" onChange = {(e)=> setDescription(e.target.value)}/>
                </p>
            </div>
            <input value="Create" type="submit"/>
        </form>
    );
};

export default Product;

