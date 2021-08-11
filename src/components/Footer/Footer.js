import React from "react";
import classes from "./Footer.module.css";
import {Link} from "gatsby";
const Footer= (props) =>{
    const NavLink =(Link);
    let footer = null;
    if(props.id==="home"){
        footer = <footer className={classes.footer}>
            <p className={classes.element}>©2021 Wildlife Response Services, LLC  </p>
            <p className={classes.element}>  P.O.Box 842
                • Seabrook, TX 77586 •
                Phone: 713-705-5897</p>

        </footer>
    } else {
        footer =
            <footer className={classes.globalFooter} style={{marginTop:`${props.margin}`}} >
                <nav className={classes.NavFooter}>
                    <NavLink to='/services'  className={classes.FooterLinks}>Services</NavLink>
                    <NavLink to='/mission'  className={classes.FooterLinks}>Mission</NavLink>
                    <NavLink to='/about'  className={classes.FooterLinks}>About</NavLink>
                    <NavLink to='/responders'  className={classes.FooterLinks}>Responders</NavLink>
                    <NavLink to='/contact'  className={classes.FooterLinks}>Contact us</NavLink>

                </nav>
                <div style={{paddingBottom:"1em"}}>

                </div>
            <p className={classes.globalElement}>©2021 Wildlife Response Services, LLC  </p>
            <p className={classes.globalElement}>  P.O.Box 842
                • Seabrook, TX 77586 •
                Phone: 713-705-5897
            </p>
            </footer>
    }
    return(
        <>
            {footer}
            </>
    )

};
export default Footer;