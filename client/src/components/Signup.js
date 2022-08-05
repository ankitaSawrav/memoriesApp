import { Component } from "react";

import './signup.css';

import axios from 'axios';
import { Link } from "react-router-dom";
import { Grid , Paper } from'@material-ui/core'

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
    
        if(event.target.className === "username"){
            this.setState({...this.state,[event.target.className]:event.target.value})
        }
        if(event.target.className === "email"){
            this.setState({...this.state,[event.target.className]:event.target.value})
        }
        if(event.target.className ==="password"){
            this.setState({...this.state,[event.target.className]:event.target.value})
        }

    }
    handleSubmit= (event)=>{
        event.preventDefault();
       
        const data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
          };
    

         axios.post("/api/users",data)
        .then((response) => {
         if (response.data.success){
            this.setState({...this.state,errormsg:"",success:true})
         }
        })
        .catch((error) => {
            this.setState({...this.state,errormsg:error.response.data.message,success:false})
        })
    }
    render(){
        return (
            <div className="signUp-container">
                <h1>SignUp</h1>
                <div className="alert">
                {this.state.success? <p> SignUp Successful!! Please login</p>:<p className="error-message">{this.state.errormsg}</p>}
                </div>
                <form className="signup-form" onSubmit={(event) => this.handleSubmit(event)}>
                <div className= "inputContainer">
                    <label className="username-label" htmlFor="username">Username</label>
                        <input 
                            className="username"
                            type="text" 
                            placeholder='Username' 
                            name='username' 
                            onChange={(event) => this.handleChange(event)}
                        />
                    </div>
                    <div className= "inputContainer">
                        <label className="email-label"htmlFor="email">Email</label>
                        <input 
                            className="email"
                            type="text" 
                            placeholder='Email' 
                            name='email' 
                            onChange={(event) => this.handleChange(event)}
                        />
                        </div>
                    <div className= "inputContainer">
                    <label className="password-label" htmlFor="password">Password</label>
                        <input 
                            className="password"
                            type="password" 
                            placeholder='Password' 
                            name='password' 
                            onChange={(event) => this.handleChange(event)}
                        />
                    </div>
                        
                        
                        
                        <button className="createUser" 
                            type='submit'
                            onSubmit = {(event)=>this.handleSubmit(event)}
                            >Sign up
                        </button>
                        <span className="signup-login-link">
                            Already have an account? 

                            <Link to='/Login'>Login</Link>
                        
                        </span>
                </form>
             
        </div>

        
        )

 
    }
      
  }
export  default Signup