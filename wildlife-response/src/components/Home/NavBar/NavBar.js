import React, {useState, useEffect} from "react";
import {Link} from "gatsby";
import classes from "./Navbar.module.css"
import logo from "../../../images/transparent-logo.png";

const NavBar = () =>{
    const NavLink =(Link);
    const [windowWidth, setWindowWidth]= useState(window.innerWidth);
    const handleResize =()=>{
        setWindowWidth(window.innerWidth);
    };

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.addEventListener("resize", handleResize);
        }
    },[]);
let conditionalNav= null;
    if (windowWidth>1024) {
        conditionalNav= <nav className={classes.parent} >
           <NavLink to='/services' className={classes.children} >Services</NavLink>
           <NavLink to='/mission' className={classes.children}>Mission</NavLink>
           <NavLink to='/about' className={classes.children}>About</NavLink>
           <NavLink to='/contact' className={classes.children}>Contact us</NavLink>
       </nav>
    }else {
        conditionalNav = <div> gg </div>
    }
    return(
        <>
            <div className="container-fluid">
                <div className="row">
            <div className="col-md-6">
                <NavLink to='/' > <img src={logo} alt="wildlife-logo" className={classes.image}/> </NavLink>
            </div>
                <div className="col-md-6">
                    {conditionalNav}
                    </div>
                </div>
            </div>

        </>
    )
};
export default NavBar;
