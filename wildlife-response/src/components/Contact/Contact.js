import React, {useState, useEffect, useCallback} from "react";
import NavTwo from "../NavTwo/NavTwo";
import LogoNav from "../LogoNav/LogoNav";
import dotImage from "../../images/dots-wildlifeWebsite-2.png";
import Subtitle from "../Subtitle/Subtitle";
import classes from "./Contact.module.css";
import {IoIosPerson, IoIosMail, IoMdPaperPlane, IoMdHelpCircleOutline}  from "react-icons/io";
const Contact =()=>{
    const [isValidated,setValidation]=useState(false);
    const [contactName,setContactName]= useState('');
    const [contactEmail,setContactEmail]= useState('');
    const [contactFind,setContactFind]= useState('');
    const [contactMessage,setContactMessage]= useState('');

const checkValidation =useCallback( ()=>{
    if (contactName.length> 1 && contactEmail.length>1 && contactMessage.length>1){
        setValidation(true);
    }
},[contactEmail,contactName,contactMessage])
    useEffect((()=>{
        checkValidation()
    }),[checkValidation])

    let button=null
        if (isValidated===true){
          button = <>
              <button type="submit"
                      className={classes.button}
                      disabled={!isValidated}
              > Click Here to Submit!</button>
       </>
        }else {
            button = <>
                <button type="submit"
                        className={[classes.button,classes.disabled].join(' ')}
                        disabled={!isValidated}
                > Click Here to Submit!</button>
            </>
        }

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
                            <input
                                type="text"
                                name="FirstName"
                                id={"name"}
                                className={classes.input}
                                placeholder={"Type your name"}
                                value={contactName}
                                onChange={event => setContactName(event.target.value)}
                                required
                            />

                            <label htmlFor={"email"} className={classes.label}>
                               <IoIosMail className={classes.icon}/> Email
                                </label>
                            <input type="text"
                                   name="Your email"
                                   id={"email"}
                                   className={classes.input}
                                   placeholder={"Type your Email"}
                                    value={contactEmail}
                                   onChange={event => setContactEmail(event.target.value)}
                                   required
                            />

                            <label htmlFor={"FindUs"} className={classes.label}>
                               <IoMdPaperPlane className={classes.icon}/> How did you find us
                            </label>
                            <select name="Find us"  id={"FindUs"}
                                    className={classes.select}
                                    value={contactFind}
                                    onChange={event => setContactFind(event.target.value)}>
                                <option value=""> Select an option</option>
                                <option value="Search Online"> Search Online</option>
                                <option value="Referred">Referred </option>
                                <option value="Other"> Others</option>
                            </select>

                            <label htmlFor={"message"} className={classes.label} > <IoMdHelpCircleOutline className={classes.icon}/> Let us Help You</label>

                                <textarea type="text"
                                          name="Write your Message"
                                          id={"message"}
                                          className={classes.textArea}
                                          placeholder={"Start typing your message"}
                                          value={contactMessage}
                                          onChange={event => setContactMessage(event.target.value)}
                                          required
                                />

                            {button}
                </form>
            </section>

        </>
    )
};
export default Contact;