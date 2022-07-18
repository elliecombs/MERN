//Displays below renders data from database 
import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const AuthorList = (props) => {
    const {authorList, setAuthorList, removeFromDom} = props;

    const deleteAuthor = (id) => {
        //Delete back end
        axios.delete(`http://localhost:8000/api/author/${id}`)
        //Delete front end
        .then((res) => {
            removeFromDom(id)
        })
    };

    useEffect(()=>{
        axios.get("http://localhost:8000/api/author")
        .then((res)=>{
            console.log(res.data);
            setAuthorList(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, []);
    
    return (
            <div>
                <Link to={`author/create`}>Add an Author</Link>
            {
                authorList.map((author, index)=>{
                return (
                <div key = {index}>
                <Link to={`/author/${author._id}`}>
                    <p>
                        {author.name}, 
                    </p>
                </Link>
                <Link to={`/author/update/${author._id}`}>Update </Link>
                <button onClick = {() => deleteAuthor(author._id)}>Delete</button>
                </div> 
                )})
            }
        </div>
    )
}

export default AuthorList;