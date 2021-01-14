import React from "react";
import {Link} from "gatsby";
import classes from "./Button.module.css"
import {IoMdArrowRoundForward} from "react-icons/io";
const Button=()=>{
    const NavLink =(Link);
    return(
        <>
            <NavLink  className={classes.Button} to='/services'>  <IoMdArrowRoundForward className='icon-2' style={{
                position:"relative",
                top:"7px",
                color:"#f5751D"
            }}/> Learn More </NavLink>
        <NavLink  className={classes.Button2} to='/contact'>  <IoMdArrowRoundForward className='icon-2' style={{
            position:"relative",
            top:"7px",
            color:"#f5751D"
        }}/> I Really need Help  </NavLink>


        </>
    )



};
export default Button