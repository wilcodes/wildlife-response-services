import React from "react";
import {Link} from "gatsby";
import classes from "./Navbar.module.css"
import logo from "../../../images/wil2.png";
import Sidebar from "../../sidebar/sidebar";
const NavBar = () =>{
    const NavLink =(Link);


    return(
        <>
            <div className="container-fluid">
                <div className="row">
            <div className="col-6">
                <NavLink to='/' > <img src={logo} alt="wildlife-logo" className={classes.image}/> </NavLink>
            </div>
                <div className="col-6">
                    <div className={classes.sidebar}>
                        <Sidebar />
                    </div>
                    <nav className={classes.parent}>
                        <NavLink to='/services' className={classes.children} >Services</NavLink>
                        <NavLink to='/mission' className={classes.children}>Mission</NavLink>
                        <NavLink to='/about' className={classes.children}>About</NavLink>
                        <NavLink to='/team' className={classes.children}>Responders</NavLink>
                        <NavLink to='/contact' className={classes.children}>Contact us</NavLink>
                    </nav>
                    </div>
                </div>
            </div>

        </>
    )
};
export default NavBar;
