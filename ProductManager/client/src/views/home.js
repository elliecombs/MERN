//Main home page that we see and updates front and back end
import React, {useState} from "react";
import Product from '../components/form';
import ProductList  from '../components/productlist'

const Home = (props) =>{
    const [productList, setProductList] = useState([]);
    const removeFromDom = id => {
        setProductList(productList.filter(ProductList => ProductList._id !== id));
    }
    return(
        <>
        <Product productList={productList} setProductList={setProductList} />
        <ProductList productList={productList} setProductList={setProductList} removeFromDom={removeFromDom} />
        </>
    )
}

export default Home;