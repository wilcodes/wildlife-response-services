import React from "react";
import {Link} from "gatsby";
import classes from "./Navbar.module.css"
const NavBar = () =>{
    const NavLink =(Link);
    return(
        <>
            <nav className={classes.parent} >
                <NavLink to='/services' className={classes.children} > Services </NavLink>
                <NavLink to='/mission' className={classes.children}> Mission </NavLink>
                <NavLink to='/about' className={classes.children}> About </NavLink>
                <NavLink to='/contact' className={classes.children}> Contact us </NavLink>
            </nav>
        </>
    )
};
export default NavBar;
