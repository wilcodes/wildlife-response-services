import React, {Component} from "react";
import {Link} from "gatsby";
import classes from "./NavTwo.module.css";
class NavTwo extends Component {
    render(){
        const NavLink=(Link);
        return(
            <section >
                <nav className={classes.parent} >
                    <NavLink to='/' className={classes.children} >Home</NavLink>
                    <NavLink to='/services' className={classes.children} >Services</NavLink>
                    <NavLink to='/mission' className={classes.children}>Mission</NavLink>
                    <NavLink to='/about' className={classes.children}>About</NavLink>
                    <NavLink to='/contact' className={classes.children}>Contact us</NavLink>
                </nav>
            </section>
        )

    }



}



export default NavTwo