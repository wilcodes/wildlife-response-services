import React from "react";
import NavTwo from "../NavTwo/NavTwo";
import LogoNav from "../LogoNav/LogoNav";
import dotImage from "../../images/dots-wildlifeWebsite-2.png";
import Subtitle from "../Subtitle/Subtitle";
import classes from "./Contact.module.css";
import {IoIosPerson, IoIosMail, IoMdPaperPlane, IoMdHelpCircleOutline}  from "react-icons/io";
const Contact =()=>{
    return(
        <>
            <section style={{backgroundImage:`url(${dotImage})`, backgroundRepeat:"repeat-x"}}>
                <LogoNav/>
                <NavTwo/>
                <Subtitle titleName={"Contact us"}/>
                <form className={classes.form}>
                    <h2 className={classes.subtitle} >We are ready to help you! </h2>
                            <label htmlFor={"name"} className={classes.label}>
                              <IoIosPerson className={classes.icon}/>  Your Name
                            </label>
                            <input  type="text" name="FirstName" id={"name"} className={classes.input} placeholder={"Type your name"}/>

                            <label htmlFor={"email"} className={classes.label}>
                               <IoIosMail className={classes.icon}/> Email
                                </label>
                            <input type="text" name="Your email" id={"email"}  className={classes.input} placeholder={"Type your Email"}/>

                            <label htmlFor={"FindUs"} className={classes.label}>
                               <IoMdPaperPlane className={classes.icon}/> How did you find us
                            </label>
                            <select name="Find us"  id={"FindUs"} className={classes.select}>
                                <option value="Search Online"> Search Online</option>
                                <option value="Referred">Referred </option>
                                <option value="Other"> Others</option>
                            </select>

                            <label htmlFor={"message"} className={classes.label} > <IoMdHelpCircleOutline className={classes.icon}/> Let us Help You</label>

                                <textarea type="text" name="Write your Message" id={"message"} className={classes.textArea} placeholder={"Start typing your message"}
                                />

                            <button type="Button" className={classes.button} > Click Here to Submit!</button>
                </form>
            </section>

        </>
    )
};
export default Contact;