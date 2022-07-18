import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
import Form from '../components/Form';

const Update = (props) => {
    const { id } = useParams(); 
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const updateAuthor = (author) => {
        console.log(author);
        axios.put('http://localhost:8000/api/author/' + id, {
            name: author,  
        })
            .then(res => {
                console.log(res);
                navigate("/"); // this will take us back to the Main.js
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                const errorArray = [];
                    for (let key of Object.keys(errorResponse)) {
                        errorArray.push(errorResponse[key].message)
                    }
                    setErrors(errorArray)
                    console.log('Post error', err);
                })
    }
    return (
        <div>
            <h1>Update an Author</h1>
            <Form updateForm = {true} id = {id} onSubmitProp = {updateAuthor} errors = {errors} />
        </div>
    )
}

export default Update;