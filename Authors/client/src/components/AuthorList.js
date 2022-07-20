//Displays below renders data from database 
import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteButton from './Delete';

const AuthorList = (props) => {
    const {authorList, setAuthorList, removeFromDom} = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/author")
        .then((res)=>{
            console.log(res.data);
            setAuthorList(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, [setAuthorList]);
    
    return (
            <div>
                <table className="table table-bordered border-secondary">
                    <thead>
                        <tr>
                            <th>
                                Author
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
            <tbody>{
                authorList.map((author, index)=>{
                return (
                <tr key={index}>
                <td><Link to={`/author/update/${author._id}`}>
                    {author.name}
                </Link></td>
                <td>
                    <DeleteButton authorId = {author._id} successCallBack = {() => removeFromDom(author._id)}  />
                    <Link key={index} to={`/author/update/${author._id}`}>Update </Link>
                </td>
                </tr>
                )})
            }
            </tbody>
            </table>
        </div>
    )
}

export default AuthorList;