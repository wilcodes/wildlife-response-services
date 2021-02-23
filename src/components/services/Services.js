import React from "react";
import Subtitle from "../Subtitle/Subtitle";
import classes from "./Services.module.css";
import image1 from "../../images/Adult Brown Pelican[834].jpg";
import image2 from "../../images/pelican.jpg";
import image3 from "../../images/truck.jpg";
import dotImage from "../../images/dotsNew.png";
import NavTwo from "../NavTwo/NavTwo";
import Footer from "../Footer/Footer";
import LogoNav from "../LogoNav/LogoNav";
const Services =()=> {
    return(
        <section className={classes.section} style={{backgroundImage:`url(${dotImage})`, backgroundRepeat:"repeat"}}>
            <LogoNav/>
            <NavTwo/>
            <Subtitle titleName={"services"} />
            <h2 className={classes.textInt}> Our experience and commitment are focused on... </h2>
            <div className="container">
                <div className="row" >
                    <div className="col-sm"  style={{textAlign:"center", backgroundColor:"#c3ced4"}}>

                        <h2 className={classes.subDescription}> Response</h2>
                       <p className={classes.information}> Participation in projects using proven skills in oversight capabilities with a detail-oriented
                           approach to project completion; accurate documentation being a primary goal.
                       </p>
                        <img  src={image1} className={classes.images} alt="Turtle" />
                    </div>
                    <div className="col-sm" style={{textAlign:"center",  backgroundColor:"#a0bcbf" }}>

                        <h2 className={classes.subDescription}> training</h2>
                        <p className={classes.information}> Managing Director of a premier network of environmental professionals that has responded to
                            over 60 incidents in the past 14 years along the gulf coast and inland states; at times engaged in
                            multiple incidents concurrently.</p>
                        <img  src={image2} className={classes.images} alt="Bird"/>
                    </div>
                    <div className="col-sm" style={{textAlign:"center"}} >

                        <h2 className={classes.subDescription}>Consulting</h2>
                       <p className={classes.information} > Skilled in management of operations involving multiple contractors for projects involving
                           federal, state, and local agencies.
                           </p>
                        <img  src={image3} className={classes.images} alt="Bird"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    )
};
export default Services;