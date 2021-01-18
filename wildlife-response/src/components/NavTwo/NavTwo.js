import React, {useEffect, useState} from "react";
import {Link} from "gatsby";
import classes from "./NavTwo.module.css";

const NavTwo =()=> {
        const NavLink=(Link);
        const [url,setUrl]=useState("");

        useEffect(()=>{
            const url = typeof window !== 'undefined' ? window.location.href : '';
            setUrl(url);
    },[url])
    // obtaining the last word of the url which defines the name of the page
            const newUrl = url.split("/").pop();
    let conditionalNav = null
        if(newUrl==="mission"){
            conditionalNav=   (<><NavLink to='/services' className={classes.children} >Services</NavLink>
            <NavLink to='/about' className={classes.children}>About</NavLink>
            <NavLink to='/contact' className={classes.children}>Contact</NavLink></> )
        }else if(newUrl ==="services"){
            conditionalNav=   (<><NavLink to='/mission' className={classes.children} >Mission</NavLink>
                <NavLink to='/about' className={classes.children}>About</NavLink>
                <NavLink to='/contact' className={classes.children}>Contact</NavLink></> )
        } else if (newUrl ==="about"){
           conditionalNav= (<><NavLink to='/mission' className={classes.children} >Mission</NavLink>
                <NavLink to='/services' className={classes.children}>Services</NavLink>
                <NavLink to='/contact' className={classes.children}>Contact</NavLink></> )
        }else if (newUrl==="contact"){
            conditionalNav= (<><NavLink to='/mission' className={classes.children} >Mission</NavLink>
                <NavLink to='/services' className={classes.children}>Services</NavLink>
                <NavLink to='/about' className={classes.children}>About</NavLink></> )
        }

        return(
            <section >
                <nav className={classes.parent} >
                    <NavLink to='/' className={classes.children} >Home</NavLink>
                    {conditionalNav}
                </nav>
            </section>
        )

    };



export default NavTwo