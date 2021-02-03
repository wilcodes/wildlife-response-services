import React from "react";
import logo from "../../images/newLogo.png";
import classes from "./LogoNav.module.css";
import {Link} from "gatsby";

const LogoNav =()=>{
    const Navlink=(Link);
    return(
        <>
            <div style={
                {
                    top:"0%",
                    left:"0",
                    width:"100%",
                    textAlign:"center",
                    position:"relative",
                    clear:"both",
                    padding:"1em"
                }
            }>
                <Navlink to={"/"} > <img src={logo} alt="Wildlife Logo" className={classes.logo}/></Navlink>
            </div>
            </>
    )
};
export default LogoNav;