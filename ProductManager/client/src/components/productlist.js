//Displays below renders data from database 
import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ProductList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (PersonList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    const {productList, setProductList, removeFromDom} = props;

    const deleteProduct = (id) => {
        //Delete back end
        axios.delete(`http://localhost:8000/api/product/${id}`)
        //Delete front end
        .then((res) => {
            removeFromDom(id)
        })
    };

    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
        .then((res)=>{
            console.log(res.data);
            setProductList(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, []);
    
    return (
            <div>
            {
                productList.map((product, index)=>{
                return <div>
                <Link key = {index} to={`/product/${product._id}`}>
                    <p>
                        {product.title}, {product.price}, {product.description}
                    </p>
                </Link>
                <Link to={`/product/update/${product._id}`}>Update </Link>
                <button onClick = {() => deleteProduct(product._id)}>Delete</button>
                </div> 
                })
            }
        </div>
    )
}

export default ProductList;

