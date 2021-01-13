import React from "react";
import logo from "../../../images/logo-color-wildlife.png";
import Sidebar from "../../sidebar/sidebar";
import classes from "./Subtitle.module.css";
import {Link} from "gatsby";

const Subtitle =(props)=>{
    const NavLink=(Link);
    return(
        <>
            <ul className={classes.subtitle}>
                <li className={classes.elements}> <Sidebar /> </li>
                <li className={classes.elements}>
                <div className={classes.subtitleDiv}>
                     <h2>{props.titleName}</h2>
                    <span></span>
                </div>
                </li>
                <li className={classes.elements} style={{order:"1"}} > <NavLink to="/"><img src={logo} alt="Wildlife response logo" className={classes.image}/></NavLink></li>
            </ul>

            </>
    )
};

export default Subtitle;