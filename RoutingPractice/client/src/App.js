import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
//Remember, we can write these functional components in their own files 
//to be exported and imported to the App component.
//We've combined them here to simplify our example.
const Home = (props) => { 
  return (
    <div><h1>Welcome!</h1></div>
  )
}
    
const Four = (props) => {
  return (
    <div><h1 style={{color: "blue"}}>This Number is: 4 </h1></div>
  )
}

const Hello = (props) => {
  return (
    <div><h1 style={{color: "blue"}}>Hello! </h1></div>
  )
}

const HelloRedBlue = (props) => {
  return (
    <div><h1 style={{color: "red", backgroundColor: "blue"}}>Hello red and blue! </h1></div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/hello" element={<Hello />}/>
        <Route path="/four" element={<Four />}/>
        <Route path="/hello/red/blue" element={<HelloRedBlue />}/>
      </Routes>
    </BrowserRouter>
  );
}
    
export default App
