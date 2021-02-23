import React from "react";
import Subtitle from "../Subtitle/Subtitle";
import classes from "./Mission.module.css";
import { CgWorkAlt, CgProfile, } from "react-icons/cg";
import {VscWarning, VscCalendar} from "react-icons/vsc";
import dotImage from "../../images/dotsNew.png";
import NavTwo from "../NavTwo/NavTwo";
import LogoNav from "../LogoNav/LogoNav";
import Footer from "../Footer/Footer";
import Video from "./Video/Video";
const Mission =(props)=>{
    return(
        <>

            <section style={{backgroundImage:`url(${dotImage})`, backgroundRepeat:"repeat"}}>
                <LogoNav/>
                <NavTwo/>
            <Subtitle titleName={"mission"}  />
            <div className={classes.introductionContainer}>
                <p className={classes.introductionText}> We know that an impact or potential impact to wildlife is the most visible aspect of an incident in the public eye.
                    It is not something that any Responsible Party or Potential Responsible Party wants to have as a part of a response.
                    However, the possibility is very real and you can be prepared by having a wildlife plan in place within your overall facility/company response plan.
                    That response plan should include a twenty-four hour contact number for an oiled wildlife response team.</p>
            </div>
            <div className="container">
                <div className="row" >
                    <div className="col-sm"  style={{textAlign:"center"}}>
                        <CgWorkAlt className={classes.icons}  />
                        <h3 className={classes.subtitle}> Amazing training Skills</h3>
                        <p className={classes.information}> Conduct training workshops for responders, agency representatives, and industry personnel.</p>
                    </div>
                    <div className="col-sm" style={{textAlign:"center"}}>
                        <CgProfile className={classes.icons}/>
                        <h3 className={classes.subtitle}> Experience in a great amount of spills</h3>
                        <p className={classes.information}> Work with industry and agencies to develop facility wildlife response plans.</p>
                    </div>
                    <div className="col-sm" style={{textAlign:"center"}} >
                        <VscWarning className={classes.icons}/>
                            <h3 className={classes.subtitle}> Quickly and efficient emergency services </h3>
                        <p className={classes.information}> Emergency Response; providing a professional, permitted wildlife spill management team.
                        </p>
                    </div>
                    <div className="col-sm" style={{textAlign:"center"}}>
                        <VscCalendar className={classes.icons}/>
                        <h3 className={classes.subtitle}> Anytime/ Anywhere</h3>
                        <p className={classes.information}> Our Response plan include a twenty-four hour contact number for an oiled wildlife response team.
                        </p>
                    </div>
                </div>
                <div className={classes.videoWrapper}  >
                    <Video/>
                </div>
            </div>

                <Footer/>
            </section>

            </>
    )
};
export default Mission;