import React from "react";
import Subtitle from "../Subtitle/Subtitle";
import classes from "./Mission.module.css";
import dotImage from "../../images/dotsNew.png";
import NavTwo from "../NavTwo/NavTwo";
import LogoNav from "../LogoNav/LogoNav";
import Footer from "../Footer/Footer";
import ImageSlider from "./Carousel/ImageSlider"
const Mission =(props)=>{
    return(
        <>

            <section style={{backgroundImage:`url(${dotImage})`, backgroundRepeat:"repeat"}}>
                <LogoNav/>
                <NavTwo description={"mission"}/>
            <Subtitle titleName={"mission"}  />
              <ImageSlider/>
            <div className={classes.introductionContainer}>

                <p className={classes.introductionText}> The primary goal of WRS is to conduct Wildlife Response Services, LLC activities in a manner that produces the best achievable outcome for impacted wildlife, ranging from training of personnel, to the capture, care, cleaning, and ultimately release of healthy individuals back into their natural environment.  This goal is achieved by keeping the health and safety of both the responders and animals involved as the most important aspect of all actions taken.
                    This best achievable outcome will be accomplished by working collaboratively with our industry partners and wildlife trustees in determining the most beneficial response approach to take for the protection of both the animals and the habitat in which they live.
                </p>
            </div>



                <Footer/>
            </section>

            </>
    )
};
export default Mission;