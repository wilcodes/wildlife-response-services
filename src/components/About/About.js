import React from "react";
import LogoNav from "../LogoNav/LogoNav";
import NavTwo from "../NavTwo/NavTwo";
import dotImage from "../../images/dotsNew.png";
import Subtitle from "../Subtitle/Subtitle";

import classes from "./About.module.css";
import Responders from "./Responders/Responders";
import Footer from "../Footer/Footer";
import Video from "../Mission/Video/Video"
const About =()=>{
return(
    <>
            <section style={{backgroundImage:`url(${dotImage})`, backgroundRepeat:"repeat"}}>
                    <LogoNav/>
                    <NavTwo description={"about"} />
                    <Subtitle titleName={"About us"} />
                <p className={classes.introductionParagraph}> Wildlife Response Services, LLC provides dedicated oiled wildlife response support for the Gulf of Mexico coast and inland gulf coast states.
                    We are based in the Houston/Galveston area, but our core network team consisting of trained responders, is capable of being dispatched at a moments notice to any incident involving wildlife throughout the United States.
                    Wildlife Response Services, LLC has a number of uniquely qualified wildlife responders and maintains a database of additional on-call contract personnel to assist with an incident, regardless of size or scope
                    The company was established in 2006 and is in the process of completing documentation for certification as both a Woman-Owned and Historically Underutilized Business.    </p>
                <h2 className={classes.subDescription}> We are composed by an Amazing team of responders</h2>
              <div className={classes.videoWrapper}>
                <Video/>
              </div>


                    <Responders/>
                    <Footer/>

            </section>

        </>
)
};
export default About;