import React, {useEffect, useState} from "react";
import {Link} from "gatsby";
import classes from "./sidebar.module.css";
import {IoIosMenu, IoMdClose, IoIosArrowRoundForward} from "react-icons/io";
import Backdrop from "../Backdrop/Backdrop";
const Sidebar=()=>{
    let [toggleSidebar, setToggleSidebar]=useState("closed");
    let attachedClasses=[classes.sidebarWrapper];

    const NavLink=(Link);
    const openSidebar=()=>{
      setToggleSidebar("open");
    };
    const closeSidebar = ()=>{
      setToggleSidebar("closing")
    };
    if ( toggleSidebar==="closed"){
        attachedClasses=[classes.sidebarWrapper, classes.Closed];
    }
    if (toggleSidebar==="open") {
        attachedClasses = [classes.sidebarWrapper, classes.Open];
    }else if (toggleSidebar==="closing"){
        attachedClasses = [classes.sidebarWrapper, classes.Close];
    }

    return(
        <>
            <div className={classes.navIcon}  >
                <>
                    <IoIosMenu  onClick={openSidebar} className={classes.Icon}/>
                    <Backdrop show={toggleSidebar==="open" ? true: false } />
                    <div className={attachedClasses.join(' ')} >

                        <IoMdClose onClick={closeSidebar} className={[classes.Icon, classes.IconX].join(' ')} />
                        <nav className={classes.itemsSidebar} >
                        <NavLink to='/services' className={classes.itemSidebar} >Services</NavLink>
                        <NavLink to='/mission' className={classes.itemSidebar}>Mission </NavLink>
                        <NavLink to='/about' className={classes.itemSidebar}>About </NavLink>
                        <NavLink to='/contact' className={classes.itemSidebar}>Contact</NavLink>
                    </nav>
                    </div>
                </>
            </div >
            </>
    )
};
export default Sidebar;