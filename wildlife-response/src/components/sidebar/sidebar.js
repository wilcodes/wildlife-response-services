import React, {useState} from "react";
import {Link} from "gatsby";
import classes from "./sidebar.module.css";
import {IoIosMenu, IoMdClose} from "react-icons/io";
const Sidebar=()=>{
    let [toggleSidebar, setToggleSidebar]=useState(false);
    const NavLink=(Link);
    const onToggle=()=>{
      setToggleSidebar(!toggleSidebar);
    };
    let navigation=null
    let icon = <IoIosMenu className='icon-2' style={{
        position:"relative",
        top:"7px",
        fontSize:"40px",
        color:"#14281f",
        marginRight:"20px"
    }}/>
    if(toggleSidebar===true){

        icon= <IoMdClose className='icon-2' style={{
            position:"relative",
            top:"7px",
            fontSize:"40px",
            color:"#14281f",
            marginRight:"20px"
        }}/>
        navigation= <nav className={classes.itemsSidebar} >
            <NavLink to='/services' className={classes.itemSidebar} >Services</NavLink>
            <NavLink to='/mission' className={classes.itemSidebar}>Mission</NavLink>
            <NavLink to='/about' className={classes.itemSidebar}>About</NavLink>
            <NavLink to='/contact' className={classes.itemSidebar}>Contact</NavLink>
        </nav>


    }

    return(
        <>
            <div className={classes.navIcon} onClick={onToggle} >
                {icon}
                {navigation}
            </div >
            </>
    )
};
export default Sidebar;