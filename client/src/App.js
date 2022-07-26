import logo from './logo.svg';
import './App.css';
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu.js"
import HomePage from "./HomePage.js"
import About from "./About.js"
import AddMemories from './AddMemories';
import Signup from "./components/Signup";


function LoginUser(){
    return(
        <div>Login</div>
    )
}



function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        <Menu/>

        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/AddMemories' element= {<AddMemories/>}/>
          <Route path='/Login' element= {<LoginUser/>}/>
          <Route path='/signup' element= {<Signup/>}/>
       
      </Routes>
      
        </BrowserRouter>
    </div>
  );
}

export default App;

