import React from "react";
import {Link} from "gatsby";
import classes from "./Navbar.module.css"
import logo from "../../../images/transparent-logo.png";
const NavBar = () =>{
    const NavLink =(Link);
    return(
        <>
            <div className="container-fluid">
                <div className="row">
            <div className="col-md-6">
                <NavLink to='/' > <img src={logo} alt="wildlife-logo" className={classes.image}/> </NavLink>
            </div>
                <div className="col-md-6">
                    <nav className={classes.parent} >
                        <NavLink to='/services' className={classes.children} >Services</NavLink>
                        <NavLink to='/mission' className={classes.children}>Mission</NavLink>
                        <NavLink to='/about' className={classes.children}>About</NavLink>
                        <NavLink to='/contact' className={classes.children}>Contact us</NavLink>
                    </nav>
                    </div>
                </div>
            </div>

        </>
    )
};
export default NavBar;
