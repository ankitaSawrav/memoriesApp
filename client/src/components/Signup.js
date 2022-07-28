import { Component } from "react"
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { Autocomplete } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
// import { useHistory } from "react-router-dom";
import {useNavigate} from 'react-router-dom';



class  Signup extends Component{
   

    constructor(props) {
        super(props)
        this.state = { 
            username: "" ,
            email:"",
            password : "",
            errormsg : "",
            success:""
        }
      }

     
 
   
    handleChange=(event)=>{
        console.log(event.target.className, "target evnt")
    
        if(event.target.className === "username"){
         console.log("in name if loop")
            this.setState({...this.state,[event.target.className]:event.target.value})
        }
        if(event.target.className === "email"){
            this.setState({...this.state,[event.target.className]:event.target.value})
        }
        if(event.target.className ==="password"){
            this.setState({...this.state,[event.target.className]:event.target.value})
        }
        console.log(this.state, "state")
    }
    handleSubmit= (event)=>{
        
        event.preventDefault();
       
        const data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
          };
          console.log(data,"data")
       
        // sending data to server database
         axios.post("/api/users",data)
        .then((response) => {
         console.log(response.data.success)
         if (response.data.success){
            this.setState({...this.state,['success']:true})
            console.log(this.state,"satet data for success")
         
           
         }
          });
          

    }
 

    render(){
        return (
        <div className="container">
            <Box>
                <h1>Signin</h1>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label className="username-label" htmlFor="username">Username:</label>
                        <input 
                            className="username"
                            type="text" 
                            placeholder='Username' 
                            name='username' 
                            onChange={(event) => this.handleChange(event)}
                        />
                        <label className="email-label"htmlFor="email">email:</label>
                        <input 
                            className="email"
                            type="text" 
                            placeholder='Email' 
                            name='email' 
                            onChange={(event) => this.handleChange(event)}
                        />
                        <label className="password-label" htmlFor="password">Password:</label>
                        <input 
                            className="password"
                            type="password" 
                            placeholder='Password' 
                            name='password' 
                            onChange={(event) => this.handleChange(event)}
                        />
                        
                        <button className="createUser" 
                            type='submit'
                            onSubmit = {(event)=>this.handleSubmit(event)}
                            >Sign up
                        </button>
                        <span>
                            Already have an account? 
                            {/* <Routes> */}
                            <Link to='/'>Login</Link>
                            {/* <Route path='/' element={<HomePage/>}/> */}
                            {/* </Routes> */}
                           
                        
                        </span>
                </form>
            </Box>     
        </div>
        )

 
    }
      
  }
export  default Signup