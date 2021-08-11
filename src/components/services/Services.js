import React from "react";
import Subtitle from "../Subtitle/Subtitle";
import classes from "./Services.module.css";
import image1 from "../../images/Adult Brown Pelican[834].jpg";
import image2 from "../../images/training-min.png";
import image3 from "../../images/responderOne.png";
import dotImage from "../../images/dotsNew.png";
import NavTwo from "../NavTwo/NavTwo";
import Footer from "../Footer/Footer";
import LogoNav from "../LogoNav/LogoNav";
const Services =()=> {
    return(
        <section className={classes.section} style={{backgroundImage:`url(${dotImage})`, backgroundRepeat:"repeat"}}>
            <LogoNav/>
            <NavTwo description={"services"}/>
            <Subtitle titleName={"services"} />
          <h2 className={classes.textInt}> Our experience and commitment are focused on... </h2>


            <div className="container">
                <div className="row" >
                    <div className="col-sm"  style={{textAlign:"center", backgroundColor:"#c3ced4"}}>

                        <h2 className={classes.subDescription}> Response</h2>
                       <p className={classes.information}> With our experienced core team members and extensive network of contract personnel, we possess the capability to respond to multiple incidents concurrently.
                         Wildlife Response Services, LLC responds to incidents with a professional, permitted wildlife spill management team consisting of personnel to capture, clean and rehabilitate animals as well as fill command center positions as required.

                       </p>
                        <img  src={image1} className={classes.images} alt="Turtle" />
                    </div>
                    <div className="col-sm" style={{textAlign:"center",  backgroundColor:"#a0bcbf" }}>

                        <h2 className={classes.subDescription}> training</h2>
                        <p className={classes.information}> To assist industry partners, wildlife trustees and other interested parties in a clearer understanding of the components of wildlife response, training workshops may be requested of our team.
                          Some topics that may be introduced are: an introduction to wildlife response; safety requirements for wildlife responders; permitting requirements; wildlife response within the ICS structure; expectations of the wildlife responder; responsible party roles in wildlife response; use of volunteers; resource tracking; and the logistics surrounding wildlife response.
                        </p>
                        <img  src={image2} className={classes.images} alt="Bird"/>
                    </div>
                    <div className="col-sm" style={{textAlign:"center", backgroundColor:"#c3ced4"}} >

                        <h2 className={classes.subDescription}>Consulting</h2>
                       <p className={classes.information} > Our team is available to assist in writing facility response plans for our clients and testing those plans within the structure of both company led and regulator initiated exercises.
                         We offer our expertise to work alongside industry professionals, as well as state and federal wildlife trustees in participating in site surveys and assessments to determine environmental protection priorities and strategies.

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