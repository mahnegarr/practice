import React from 'react'
import { NavLink } from 'react-router'

function NavBar() {
    return (
        <div>
            <ul>
                <li> <NavLink to={"/"} >Home Page </NavLink></li>
                <li>  <NavLink to={"/courses"} >Course Page</NavLink></li>
                <li> <NavLink to={"/about-us"} >About Us</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar