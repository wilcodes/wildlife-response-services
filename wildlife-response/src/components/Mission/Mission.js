import React from "react";
import Subtitle from "../Subtitle/Subtitle";
import classes from "./Mission.module.css";
import { CgWorkAlt, CgProfile, } from "react-icons/cg";
import {VscWarning, VscCalendar} from "react-icons/vsc";
import dotImage from "../../images/dots-wildlifeWebsite-2.png";
import NavTwo from "../NavTwo/NavTwo";
import LogoNav from "../LogoNav/LogoNav";
const Mission =(props)=>{
    return(
        <>

            <section style={{backgroundImage:`url(${dotImage})`, backgroundRepeat:"repeat-x"}}>
                <LogoNav/>
                <NavTwo/>
            <Subtitle titleName={"mission"}  />
            <div className={classes.introductionContainer}>
                <p className={classes.introductionText}> Located in the upper Texas Gulf Coast area, WRS personnel have been involved in wildlife rehabilitation and oiled wildlife response for over twenty years,
                    and possess both state and federal permits, including permits to rehabilitate endangered species.
                    WRS has led the environmental unit in large-scale emergency responses, and consults with industry and private entities regarding site specific contingency planning.</p>
            </div>
            <div className="container">
                <div className="row" >
                    <div className="col-sm" style={{textAlign:"center"}} >
                        <CgWorkAlt className={classes.icons}  />
                        <h3 className={classes.subtitle}> Amazing training Skills</h3>
                        <p className={classes.information}> Conduct training workshops for responders, agency representatives, and industry personnel.</p>
                    </div>
                    <div className="col-sm" style={{textAlign:"center"}}>
                        <CgProfile className={classes.icons}/>
                        <h3 className={classes.subtitle}> Experience in a great amount of spills</h3>
                        <p className={classes.information}> Participate in spill drills, exercises and panel discussions.</p>
                    </div>
                    <div className="col-sm" style={{textAlign:"center"}}>
                        <VscWarning className={classes.icons}/>
                            <h3 className={classes.subtitle}> Quickly and efficient emergency services </h3>
                        <p className={classes.information}> Emergency Response; providing a professional, permitted wildlife spill management team.
                        </p>
                    </div>
                    <div className="col-sm" style={{textAlign:"center"}}>
                        <VscCalendar className={classes.icons}/>
                        <h3 className={classes.subtitle}> Connections with the environmental community</h3>
                        <p className={classes.information}> Consult with Environmental, Health and Safety personnel regarding potential wildlife issues on industrial facilities.
                        </p>
                    </div>
                </div>
            </div>
            </section>

            </>
    )
};
export default Mission;