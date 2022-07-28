
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { Autocomplete } from "@mui/material";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import axios from 'axios';
import { useState} from 'react'
// import { useHistory } from "react-router-dom";



function Login(props){
    // let history = useHistory()
    const[useremail,setEmail]= useState("")
    const[password,setPassword]= useState("")

    const handleChange=(event)=>{
        if(event.target.className === "email"){
            console.log("inhere ")
            // setEmail({[event.target.className]:event.target.value})
            setEmail(event.target.value)
        }
        if(event.target.className === "password"){
            console.log("inhere ")
            // setPassword({[event.target.className]:event.target.value})
            setPassword(event.target.value);
        }
        console.log(event.target.className,event.target.value, "email&password")
    }


    const handleSubmit=(event)=>{
        event.preventDefault();
      const data={
        "useremail":useremail,
        "password":password
      }
      console.log(data,"data")
      axios.post("/api/session", data)
      .then((response)=>{
        console.log(response.data,"response")
        props.setIsLoggedin(true)
        
      })
      .catch(error=>{
        console.log(error.response.data.message,"error")
      })

    //   history.push("/");
    }



    return (
        <div className="container-login">
            <Box>
                <h1>Login</h1>
                <form onSubmit={(event) => handleSubmit(event)}>
                    {/* <label className="username-label" htmlFor="username">Username:</label>
                        <input 
                            className="username"
                            type="text" 
                            placeholder='Username' 
                            name='username' 
                            onChange={(event) => handleChange(event)}
                        /> */}
                        <label className="email-label"htmlFor="email">email:</label>
                        <input 
                            className="email"
                            type="text" 
                            placeholder='Email' 
                            name='email' 
                            onChange={(event) => handleChange(event)}
                        />
                        <label className="password-label" htmlFor="password">Password:</label>
                        <input 
                            className="password"
                            type="password" 
                            placeholder='Password' 
                            name='password' 
                            onChange={(event) => handleChange(event)}
                        />
                        
                        <button className="createUser" 
                            type='submit'
                            onSubmit = {(event)=>handleSubmit(event)}
                            >Login
                        </button>
                        <span>
                            Don't have an account? 
                            {/* <Routes> */}
                            <Link to='/SignUp'>Signin</Link>
                            {/* <Route path='/' element={<HomePage/>}/> */}
                            {/* </Routes> */}
                           
                        
                        </span>
                </form>
            </Box>     
        </div>
        
    )
}

export default Login