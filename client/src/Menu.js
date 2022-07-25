
import { NavLink } from "react-router-dom";
import {link} from 'react'

function Menu(props) {
    return (    
        <div className="Menu-container">
            <nav className='nav-bar'>
                <NavLink className={({ isActive }) => isActive ? "red" : "blue"}  to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "red" : "blue"}  to='/About'>About</NavLink>
            </nav>
        </div>
    )
}
export default Menu