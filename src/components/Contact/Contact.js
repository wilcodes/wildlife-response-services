import React, {useState, useEffect, useCallback} from "react";
import NavTwo from "../NavTwo/NavTwo";
import LogoNav from "../LogoNav/LogoNav";
import dotImage from "../../images/dotsNew.png";
import Subtitle from "../Subtitle/Subtitle";
import classes from "./Contact.module.css";
import {IoIosPerson, IoIosMail, IoMdHelpCircleOutline}  from "react-icons/io";
import Footer from "../Footer/Footer";
import emailjs from "emailjs-com";
const Contact =()=>{
    const [isValidated,setValidation]=useState(false);
    const [contactName,setContactName]= useState('');
    const [contactEmail,setContactEmail]= useState('');
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
                        disabled={!isValidated} to={'/'}
                > Click Here to Submit!</button>
            </>
        }

        const sendEmail=(e)=>{
            e.preventDefault();
            emailjs.sendForm('service_c7mmf6g', 'template_gotx84l', e.target, 'user_SVVnZkO5DWGt5scPKPwAx')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            window.location.reload();

        };
    return(

        <>
            <section style={{backgroundImage:`url(${dotImage})`, backgroundRepeat:"repeat"}}>
                <LogoNav/>
                <NavTwo/>
                <Subtitle titleName={"Contact us"}/>
                <form className={classes.form} onSubmit={sendEmail} >
                    <h2 className={classes.subtitle} >We are ready to help you! </h2>
                            <label htmlFor={"name"} className={classes.label}>
                              <IoIosPerson className={classes.icon}/>  Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
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
                                   name="email"
                                   id={"email"}
                                   className={classes.input}
                                   placeholder={"Type your Email"}
                                    value={contactEmail}
                                   onChange={event => setContactEmail(event.target.value)}
                                   required
                            />


                            <label htmlFor={"message"} className={classes.label} > <IoMdHelpCircleOutline className={classes.icon}/> Let us Help You</label>

                                <textarea type="text"
                                          name="message"
                                          id={"message"}
                                          className={classes.textArea}
                                          placeholder={"Start typing your message"}
                                          value={contactMessage}
                                          onChange={event => setContactMessage(event.target.value)}
                                          required
                                />

                            {button}
                </form>
                <Footer/>
            </section>

        </>
    )
};
export default Contact;