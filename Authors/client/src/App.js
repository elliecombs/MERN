import './App.css';
import Form from './components/Form';
import { BrowserRouter, useNavigate, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Update from './views/Update';
import AuthorList from './components/AuthorList';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
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

  //Delete
  const removeFromDom = id => {
    setAuthorList(authorList.filter(AuthorList => AuthorList._id !== id));
}

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
          {/* //User sees these routes */}
            <Route path='/' element={loaded && <AuthorList  removeFromDom={removeFromDom} setAuthorList = {setAuthorList} authorList = {authorList} />}  />
            <Route path='/author/create' element={ <Form setAuthorList = {setAuthorList} authorList = {authorList} initialName = "" errors = {errors} setErrors = {setErrors} />}  /> 
            <Route path='/author/update/:id' element={<Update/>}  /> 
          </Routes>
      </BrowserRouter>                           
      </div>
  );
}

export default App;
