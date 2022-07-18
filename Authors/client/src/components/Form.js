//Form to enter in the authors 
// {} = destructing and [ ] = is used for setting state
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Author = (props) => {
    //Using props we can update and edit 
    const {
        id, onSubmitProp, updateForm, authorList, setAuthorList, setErrors, errors 
    } = props
    
    const [name, setName] = useState(""); 
    const navigate = useNavigate();
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        if (updateForm) {
            onSubmitProp(name);
        }
        else {
            createAuthor(name);
        }
        setName("");
    }

    useEffect(() => {
        if (updateForm) {
            axios.get('http://localhost:8000/api/author/' + id)
                .then(res => {
                    setName(res.data.name);
                    console.log(res.data);
                })
                .catch(err => console.log(err))
        }
    }, [])

//     //Create 
//     const createAuthor = (author) => {
//     console.log(author);
//     axios
//         //argument: Route we are posting to
//         .post(`http://localhost:8000/api/author`, {
//             //argument: Data we are posting to
//         name: author,
//         })
//         .then((res) => {
//             console.log(res.data);
//             //Spread operator 
//             setAuthorList([...authorList, res.data]);
//             navigate('/');
//         })
//         .catch((err) => {
//         console.log(err.response);
//             const errorResponse = err.response.data.error.errors;
//             const errorArray = [];
//                 for (let key of Object.keys(errorResponse)) {
//                     errorArray.push(errorResponse[key].message)
//                 }
//                 setErrors(errorArray)
//                 console.log('Post error', err);
//         })
// };

    return (
        <form onSubmit={onSubmitHandler}>
        <header>Author</header>
            <div>
                <p>
                    <label>Name</label>
                    <input type="text" value={name} name="name" onChange = {(e)=> setName(e.target.value)}/>
                </p>
            </div>
        {/* ternary or if else statement (react return statement use ternary only) */}
            <input value= {updateForm? "Update" : "Create"} type="submit"/>
        </form>
    );
};

export default Author;