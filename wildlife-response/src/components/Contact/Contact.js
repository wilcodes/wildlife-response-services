import React from "react";
import NavTwo from "../NavTwo/NavTwo";
import LogoNav from "../LogoNav/LogoNav";
import dotImage from "../../images/dots-wildlifeWebsite-2.png";
import Subtitle from "../Subtitle/Subtitle";
import classes from "./Contact.module.css";
const Contact =()=>{
    return(
        <>
            <section style={{backgroundImage:`url(${dotImage})`, backgroundRepeat:"repeat-x"}}>
                <LogoNav/>
                <NavTwo/>
                <Subtitle titleName={"Contact us"}/>
                <h2 className={classes.subtitle}>We are ready to help you! </h2>
            </section>

        </>
    )
};
export default Contact;