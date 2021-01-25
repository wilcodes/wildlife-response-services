import React from "react";
import classes from "./Footer.module.css";
import {IoLogoFacebook, IoLogoInstagram,IoLogoLinkedin } from "react-icons/io";
import {Link} from "gatsby";
const Footer= (props) =>{
    const NavLink =(Link);
    let footer = null;
    if(props.id==="home"){
        footer = <footer className={classes.footer}>
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

            <p className={classes.element}>©2007 - 2021 Wildlife Response Services, LLC  </p>
            <p className={classes.element}>  P.O.Box 842
                Seabrook, TX. 77586
                Phone:713-705-5897
                Pager:281-266-0054</p>

        </footer>
    } else {
        footer =
            <footer className={classes.globalFooter}>
                <nav className={classes.NavFooter}>
                    <NavLink to='/services'  className={classes.FooterLinks}>Services</NavLink>
                    <NavLink to='/mission'  className={classes.FooterLinks}>Mission</NavLink>
                    <NavLink to='/about'  className={classes.FooterLinks}>About</NavLink>
                    <NavLink to='/contact'  className={classes.FooterLinks}>Contact us</NavLink>
                </nav>
                <div style={{paddingBottom:"1em"}}>
            <IoLogoFacebook className='icon-2' style={{
                position:"relative",
                top:"7px",
                fontSize:"35px",
                color:"#fca26e",
                marginRight:"20px"
            }}/>
            <IoLogoInstagram className='icon-2' style={{
                position:"relative",
                top:"7px",
                fontSize:"35px",
                color:"#fca26e",
                marginRight:"20px"
            }}/>
            <IoLogoLinkedin className='icon-2' style={{
                position:"relative",
                top:"7px",
                fontSize:"35px",
                color:"#fca26e"
            }}/>
                </div>
            <p className={classes.globalElement}>©2007 - 2021 Wildlife Response Services, LLC  </p>
            <p className={classes.globalElement}>  P.O.Box 842
                Seabrook, TX. 77586
                Phone: 713-705-5897
                Pager: 281-266-0054</p>
            </footer>
    }
    return(
        <>
            {footer}
            </>
    )

};
export default Footer;