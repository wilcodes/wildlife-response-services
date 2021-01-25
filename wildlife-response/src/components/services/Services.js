import React from "react";
import Subtitle from "../Subtitle/Subtitle";
import classes from "./Services.module.css";
import image1 from "../../images/wildlife-about-1.jpg";
import image2 from "../../images/wildlife-about-2.jpg";
import image3 from "../../images/wildlife-about-3.jpg";
import dotImage from "../../images/dots-wildlifeWebsite-2.png";
import NavTwo from "../NavTwo/NavTwo";
import LogoNav from "../LogoNav/LogoNav";
import Footer from "../Footer/Footer";
const Services =()=> {
    return(
        <section className={classes.section} style={{backgroundImage:`url(${dotImage})`, backgroundRepeat:"repeat-x"}}>
            <LogoNav/>
            <NavTwo/>
            <Subtitle titleName={"services"} />
            <p className={classes.textInt}> We can help you with... </p>
            <div className="container">
                <div className="row" >
                    <div className="col-sm" style={{textAlign:"center"}}>
                        <img  src={image1} className={classes.images} alt="Turtle"/>
                       <p className={classes.information}> This small snapping turtle is one of several species of turtles that have been cared for by WRS staff members.
                           The head is covered with a section of PVC pipe during the cleaning process to avoid harm to response personnel.</p>
                    </div>
                    <div className="col-sm" style={{textAlign:"center"}}>
                        <img  src={image2} className={classes.images} alt="Bird"/>
                        <p className={classes.information}> Not a common species to be admitted to the rehabilitation center during an incident,
                            this tiny ovenbird was found resting on a section of containment boom during a recent incident.
                            Unfortunately its journey brought it down to regain some of its strength at a contaminated site during the winter migration.</p>
                    </div>
                    <div className="col-sm" style={{textAlign:"center"}}>
                        <img  src={image3} className={classes.images} alt="Bird"/>
                       <p className={classes.information}> This beautiful loon was found hauled out on a shoreline near a spill site with significant contaminate covering its entire body.
                           The bird had apparently re-surfaced after a dive and encountered a pool of contained oil. Not able to fly, it was easy to capture once out of the water.
                           </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    )
};
export default Services;