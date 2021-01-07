import React, {useState} from "react";
import {Link} from "gatsby";
import classes from "./sidebar.module.css";

const toggleClass=()=>{
  let classes ="navIcon"
};
const Sidebar=()=>{
    let [toggleSidebar, setToggleSidebar]=useState(false);
    const NavLink=(Link);
    const onToggle=()=>{
      setToggleSidebar(!toggleSidebar);
    };
    let navigation=null
    if(toggleSidebar===true){
        navigation= <nav className={classes.itemsSidebar} >
            <NavLink to='/services' className={classes.itemSidebar} >Services</NavLink>
            <NavLink to='/mission' className={classes.itemSidebar}>Mission</NavLink>
            <NavLink to='/about' className={classes.itemSidebar}>About</NavLink>
            <NavLink to='/contact' className={classes.itemSidebar}>Contact us</NavLink>
        </nav>
    }
    return(
        <>
            <div className={classes.navIcon} onClick={onToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {navigation}
            </>
    )
};
export default Sidebar;