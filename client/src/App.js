import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu.js"
import HomePage from "./components/HomePage.js"
import About from "./components/About.js"
import AddMemories from './components/AddMemories';
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
        <Menu isLoggedin={isLoggedin} user={user} />

        <Routes>

            <Route 
              path='/' 
              element={
                      <HomePage
                        isLoggedin={isLoggedin}
                        user={user}/>}/>
            <Route 
              path='/About' 
              element={<About/>}/>
            <Route 
              path='/AddMemories' 
              element= {<AddMemories/>}/>
            <Route  
              path='/Login' 
              element={<Login 
                        setIsLoggedin={()=>setIsLoggedin(true)}
                        isLoggedin={isLoggedin}/>}/>
            <Route 
              path='/signup' 
              element={<Signup/>}/>
       
      </Routes>
      
        </BrowserRouter>
    </div>
  );
}

export default App;

