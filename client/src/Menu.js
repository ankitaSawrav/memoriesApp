
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
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
    // console.log(props.userId,"userId")
    return (    
        <div className="Menu-container">
            <nav className='nav-bar'>
                <NavLink className={({ isActive }) => isActive ? "red" : "blue"}  to='/'>Home</NavLink>
                <br></br>
                <NavLink className={({ isActive }) => isActive ? "red" : "blue"}  to='/About'>About</NavLink>
                {(!props.isLoggedin?
                <div>
                <NavLink className={({ isActive }) => isActive ? "red" : "blue"}  to='/Signup'>Signup</NavLink>
                <NavLink className={({ isActive }) => isActive ? "red" : "blue"}  to='/Login'>Login</NavLink>
                </div>
                :
                <div>
                <p>Hello {props.user}</p>
                <NavLink className={({ isActive }) => isActive ? "red" : "blue"}  to='/AddMemories'>Add Memory</NavLink>
                <br></br>
                <Button className="logout-btn"   onClick={handleLogoutClick}>Logout</Button>
                </div>
                )}
            </nav>
        </div>
    )
}
export default Menu