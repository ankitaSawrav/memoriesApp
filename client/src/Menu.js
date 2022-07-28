
import { NavLink } from "react-router-dom";
import {link} from 'react'

function Menu(props) {
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
                <NavLink className={({ isActive }) => isActive ? "red" : "blue"}  to='/AddMemories'>AddMemories</NavLink>
                <br></br>
                <NavLink className={({ isActive }) => isActive ? "red" : "blue"}  to='/logout'>Logout</NavLink>
                </div>
                )}
                

            </nav>
        </div>
    )
}
export default Menu