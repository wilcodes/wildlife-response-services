import React, {useState} from "react";
import {Link} from "gatsby";
import classes from "./sidebar.module.css";
import {IoIosMenu, IoMdClose} from "react-icons/io";
import Backdrop from "../Backdrop/Backdrop";
import image from "../../images/white-logo.png";
const Sidebar=()=>{

    let [toggleSidebar, setToggleSidebar]= useState("closed");
    let attachedClasses=[classes.sidebarWrapper];

    const NavLink=(Link);
    const openSidebar=()=>{
      setToggleSidebar("open");
    };
    const closeSidebar = ()=>{
      setToggleSidebar("closing");
      setTimeout(function (){
          setToggleSidebar("closed")
      },500)
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
                    <IoIosMenu  onClick={openSidebar}  className={classes.Icon}/>
                    <Backdrop show={toggleSidebar==="open" ? true: false } />
                    <div className={attachedClasses.join(' ')} >

                        <IoMdClose onClick={closeSidebar} className={[classes.Icon, classes.IconX].join(' ')} />
                        <nav className={classes.itemsSidebar} >
                            <img src={image} alt={"logo"} className={classes.logo}/>
                        <NavLink to='/services' className={classes.itemSidebar} >Services</NavLink>
                        <NavLink to='/mission' className={classes.itemSidebar}>Mission </NavLink>
                        <NavLink to='/about' className={classes.itemSidebar}>About </NavLink>
                            <NavLink to='/team' className={classes.itemSidebar}>Responders </NavLink>
                        <NavLink to='/contact' className={classes.itemSidebar}>Contact</NavLink>
                            <p> {toggleSidebar}</p>
                    </nav>
                    </div>
                </>
            </div >
            </>
    )
};
export default Sidebar;