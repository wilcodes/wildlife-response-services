import React, {useState} from "react";
import {Link} from "gatsby";
import classes from "./sidebar.module.css";
import {IoIosMenu, IoMdClose} from "react-icons/io";
import Backdrop from "../Backdrop/Backdrop";
const Sidebar=()=>{
    let attachedClasses = [classes.sidebarWrapper, classes.Close];
    if (!toggleSidebar) {
        attachedClasses = [classes.sidebarWrapper, classes.Open];
    }
    let [toggleSidebar, setToggleSidebar]=useState(false);
    const NavLink=(Link);
    const onToggle=()=>{
      setToggleSidebar(!toggleSidebar);
    };
    let conditionalNav=<IoIosMenu  onClick={onToggle} className='icon-2' style={{
        position:"relative",
        top:"7px",
        fontSize:"40px",
        color:"#14281f",
        marginRight:"20px"
    }}/>

    if(toggleSidebar===true){
        conditionalNav=<>
            <Backdrop show={toggleSidebar}/>
            <div className={attachedClasses.join(' ')}>
            <IoMdClose onClick={onToggle} className='icon-2' style={{
            position:"relative",
            top:"7px",
            fontSize:"40px",
            color:"#14281f",
            marginRight:"20px"
        }}/> <nav className={classes.itemsSidebar} >
            <NavLink to='/services' className={classes.itemSidebar} >Services</NavLink>
            <NavLink to='/mission' className={classes.itemSidebar}>Mission</NavLink>
            <NavLink to='/about' className={classes.itemSidebar}>About</NavLink>
            <NavLink to='/contact' className={classes.itemSidebar}>Contact</NavLink>
        </nav>
            </div>
        </>


    }
    return(
        <>
            <div className={classes.navIcon}  >
                {conditionalNav}
            </div >
            </>
    )
};
export default Sidebar;