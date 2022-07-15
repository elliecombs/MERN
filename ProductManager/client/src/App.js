import './App.css';
import Show from './components/show';
//CHECK IMPORTS!!! Route, Routes, BrowserRouter below
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/home';
import Update from './components/update';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
          {/* //User sees these routes */}
            <Route path='/' element={<Home/>}  />
            <Route path='/product/:id' element={<Show/>}  /> 
            <Route path='/product/update/:id' element={<Update/>}  /> 
          </Routes>
      </BrowserRouter>                           
      </div>
  );
}

export default App;


