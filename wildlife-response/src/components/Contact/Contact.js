import React from "react";
import NavTwo from "../NavTwo/NavTwo";
import LogoNav from "../LogoNav/LogoNav";
import dotImage from "../../images/dots-wildlifeWebsite-2.png";
import Subtitle from "../Subtitle/Subtitle";
const Contact =()=>{
    return(
        <>
            <section style={{backgroundImage:`url(${dotImage})`, backgroundRepeat:"repeat-x"}}>
                <LogoNav/>
                <NavTwo/>
                <Subtitle titleName={"Contact us"}/>
            </section>

        </>
    )
};
export default Contact;