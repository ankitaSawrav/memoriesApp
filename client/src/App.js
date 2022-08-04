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
  const [userId,setUserid] = useState("")

  const handleLogout= (value) => {
    setIsLoggedin(value)
  }

  useEffect(()=>{
    axios.get('api/session')
    .then((response)=>{
      // console.log(response.data)
      if(response.status===401){
        setIsLoggedin(false)
      }
      else{ 
        setIsLoggedin(true)
        setUser(response.data.name)
        setUserid(response.data.id)
      } 
    })
    .catch((error)=>{
      console.log("on page App.js,line 33",error.response.data)
    })
  
  },[isLoggedin])  
  // <div style={{ 
 

  return (
    <div className="App" >
     
        <BrowserRouter>
        <Menu isLoggedin={isLoggedin} setLogout={(value)=>handleLogout(value)} user={user} userId={userId} />

        <Routes>

            <Route 
              path='/' 
              element={
                      <HomePage
                        isLoggedin={isLoggedin}
                        user={user}
                        userId={userId}
                        />}/>
            <Route 
              path='/About' 
              element={<About/>}/>
            <Route 
              path='/AddMemories' 
              element= {<AddMemories
                        isLoggedin={isLoggedin}
                        user={user}
                        userId={userId}/>}/>
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

