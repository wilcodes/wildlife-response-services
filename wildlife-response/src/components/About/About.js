import React from "react";
import LogoNav from "../LogoNav/LogoNav";
import NavTwo from "../NavTwo/NavTwo";
import dotImage from "../../images/dots-wildlifeWebsite.png";
import Subtitle from "../Subtitle/Subtitle";

const About =()=>{
return(
    <>
            <section style={{backgroundImage:`url(${dotImage})`, backgroundRepeat:"repeat-x"}}>
                    <LogoNav/>
                    <NavTwo/>
                    <Subtitle titleName={"About us"} />
            </section>

        </>
)
};
export default About;