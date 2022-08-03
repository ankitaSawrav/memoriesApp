
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

import './menu.css'
// import Logout from './components/Logout.js'

function Menu(props) {
    const navigate = useNavigate();
    const handleLogoutClick = ()=>{
        console.log("inhere for logout-Menu")
        props.setLogout(false)
        axios.delete("/api/session").then(() => {
            navigate('/')
        })
    }
    console.log(props.userId,"userId")
    return (    
        <div className="Menu-container">
            <nav className='nav-bar'>
                <NavLink id="homepage-lnk" className={({ isActive }) => isActive ? "red" : "blue"}  to='/'>Home</NavLink>
                <NavLink id="about-lnk"className={({ isActive }) => isActive ? "red" : "blue"}  to='/About'>About</NavLink>
                {!props.isLoggedin? <NavLink id="signup-lnk" className={({ isActive }) => isActive ? "red" : "blue"}  to='/Signup'>Signup</NavLink>: ""}
                {!props.isLoggedin?<NavLink id="login-lnk"  className={({ isActive }) => isActive ? "red" : "blue"} to='/Login'>Login</NavLink>:""}
                
                
                {props.isLoggedin? <NavLink id="add-memo-lnk" className={({ isActive }) => isActive ? "red" : "blue"}  to='/AddMemories'>Add Memory</NavLink>:""}
                
                {props.isLoggedin?<button id="logout-lnk" className="logout-btn"   onClick={handleLogoutClick}>Logout</button>:""}
            </nav>
        </div>
    )
}
export default Menu