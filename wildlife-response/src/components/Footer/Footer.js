import React from "react";
import classes from "./Footer.module.css";
import {IoLogoFacebook, IoLogoInstagram,IoLogoLinkedin } from "react-icons/io";
const Footer= () =>{
    return(
        <>

            <footer className={classes.footer}>
                    <IoLogoFacebook className='icon-2' style={{
                        position:"relative",
                        top:"7px",
                        fontSize:"27px",
                        color:"#14281f",
                        marginRight:"20px"
                    }}/>
                    <IoLogoInstagram className='icon-2' style={{
                        position:"relative",
                        top:"7px",
                        fontSize:"27px",
                        color:"#14281f",
                        marginRight:"20px"
                    }}/>
                    <IoLogoLinkedin className='icon-2' style={{
                        position:"relative",
                        top:"7px",
                        fontSize:"27px",
                        color:"#14281f"
                    }}/>

                <h4 className={classes.element}>  Wildlife Response Services, LLC</h4>
                <h4 className={classes.element}>  P.O.Box 842
                    Seabrook, TX. 77586
                    Phone:713-705-5897
                    Pager:281-266-0054</h4>
            </footer>

            </>
    )

};
export default Footer;