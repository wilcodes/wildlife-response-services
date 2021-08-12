import React from "react";
import {Link} from "gatsby";
import classes from "./NavTwo.module.css";
const NavTwo =(props)=> {
        const NavLink=(Link);


    let conditionalNav = null
        if(props.description==="mission" ){
            conditionalNav=   (<><NavLink to='/services' className={classes.children} >Services</NavLink>
            <NavLink to='/about' className={classes.children}>About</NavLink>
              <NavLink to='/team' className={classes.children}>Responders</NavLink>
            <NavLink to='/contact' className={classes.children}>Contact</NavLink></> )
        }else if(props.description==="services" ){
            conditionalNav=   (<><NavLink to='/mission' className={classes.children} >Mission</NavLink>
                <NavLink to='/about' className={classes.children}>About</NavLink>
              <NavLink to='/team' className={classes.children}>Responders</NavLink>
                <NavLink to='/contact' className={classes.children}>Contact</NavLink></> )
        } else if (props.description==="about" ){
           conditionalNav= (<><NavLink to='/mission' className={classes.children} >Mission</NavLink>
                <NavLink to='/services' className={classes.children}>Services</NavLink>
                <NavLink to='/team' className={classes.children}>Responders</NavLink>
                <NavLink to='/contact' className={classes.children}>Contact</NavLink></> )
        }else if (props.description==="contact" ){
            conditionalNav= (<><NavLink to='/mission' className={classes.children} >Mission</NavLink>
                <NavLink to='/services' className={classes.children}>Services</NavLink>
                <NavLink to='/team' className={classes.children}>Responders</NavLink>
                <NavLink to='/about' className={classes.children}>About</NavLink></> )
        }else if (props.description==="team"){
         conditionalNav = <><NavLink to='/services' className={classes.children} >Services</NavLink>
            <NavLink to='/about' className={classes.children}>About</NavLink>
           <NavLink to='/mission' className={classes.children} >Mission</NavLink>
            <NavLink to='/contact' className={classes.children}>Contact</NavLink></>
        }

        return(
            <section >
                <nav className={classes.parent} >
                    <NavLink to='/' className={classes.children}>Home</NavLink>
                    {conditionalNav}
                </nav>
            </section>
        )

    };



export default NavTwo