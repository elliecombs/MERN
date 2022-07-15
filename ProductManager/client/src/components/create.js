//Make and submit a form
import { useState } from 'react';
import axios from 'axios';
import { navigate } from 'react-router-dom';

const CreateProduct = () => {
    const [title, setTitle] = useState ('');
    const [price, setPrice] = useState ('');
    const [description, setDescription] = useState ('');
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            //argument: Route we are posting to
            .post(`http://localhost:8000/api/product`, {
                //argument: Data we are posting to
                title,
                price,
                description,
            })
            .then((res) => {
                console.log(res.data);
                navigate('/')
            })
            .catch((err) => console.log('Post error', err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Price</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            <label>Description</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </form>
        );
    };

export default CreateProduct;