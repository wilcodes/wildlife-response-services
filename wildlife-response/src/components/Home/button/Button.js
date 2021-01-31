import React from "react";
import {Link} from "gatsby";
import classes from "./Button.module.css"
import {IoMdArrowRoundForward} from "react-icons/io";
const Button=()=>{
    const NavLink =(Link);
    return(
        <>
            <NavLink  className={classes.Button} to='/services'>  <IoMdArrowRoundForward className={classes.Icon} /> Learn More </NavLink>
        <NavLink  className={classes.Button2} to='/contact'>  <IoMdArrowRoundForward className={classes.Icon}/> I Really need Help  </NavLink>
        </>
    )



};
export default Button