import React from "react";
import logo from "../../images/white-logo.png";
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
                  backgroundColor:"#21283B",

                }
            }>
                <Navlink to={"/"} > <img src={logo} alt="Wildlife Logo" className={classes.logo}/></Navlink>
            </div>
            </>
    )
};
export default LogoNav;