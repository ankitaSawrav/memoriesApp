import logo from './logo.svg';
import './App.css';
// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu.js"
import HomePage from "./HomePage.js"
import About from "./About.js"
import AddMemories from './AddMemories';
import Signup from "./components/Signup";
import Login from "./components/Login.js";
import {useEffect, useState} from 'react'
import axios from 'axios';

function App() {
  const [isLoggedin,setIsLoggedin] = useState(false)
  const [user,setUser]= useState('')

  useEffect(()=>{
    axios.get('api/session')
    .then((response)=>{
      console.log(response.data)
      if(response.status===401){
        setIsLoggedin(false)
      }
      else{
        
        setIsLoggedin(true)
        setUser(response.data.name)
      }
      
    },isLoggedin)
  
  })  
  return (
    <div className="App">
      
        <BrowserRouter>
        <Menu isLoggedin={isLoggedin} user={user}/>

        <Routes>

            <Route path='/' element={<HomePage/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/AddMemories' element= {<AddMemories/>}/>
            <Route path='/Login' element= {<Login setIsLoggedin={()=>setIsLoggedin(true)}/>}/>
            <Route path='/signup' element= {<Signup/>}/>
       
      </Routes>
      
        </BrowserRouter>
    </div>
  );
}

export default App;

