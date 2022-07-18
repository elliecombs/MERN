//Main home page that we see and updates front and back end
import React, {useState, useEffect} from "react";
import axios from 'axios';
import Form from '../components/Form';
import AuthorList  from '../components/AuthorList';

const Home = (props) =>{
    const [loaded, setLoaded] = useState(false); 
    const [errors, setErrors] = useState([]);
    const [authorList, setAuthorList] = useState([]);
    
    //Get Authors List
    useEffect(()=>{
        axios.get("http://localhost:8000/api/author")
        .then((res)=>{
            // console.log(res.data);
            setAuthorList(res.data);
            setLoaded(true);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, []);

    //Create Author 
    const CreateAuthor = (author) => {
            axios
                //argument: Route we are posting to
                .post(`http://localhost:8000/api/author`, {
                    //argument: Data we are posting to
                author,
                })
                .then((res) => {
                    console.log(res.data);
                    //Spread operator 
                    setAuthorList([...authorList, res.data]);
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
        };
    
    //Delete Button
    const removeFromDom = id => {
        setAuthorList(authorList.filter(AuthorList => AuthorList._id !== id));
    }
    return(
        <>
        <Form initialName = "" onSubmitProps = { CreateAuthor } errors = {errors} />
        {/* If the author list loads it will display and won't show   */}
        { loaded && <AuthorList authorList = {authorList} removeFromDom={removeFromDom} setAuthorList = {setAuthorList} /> }
        </>
    )
}

export default Home;