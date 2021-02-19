import React from "react";
import classes from "./Subtitle.module.css";
const Subtitle =(props)=>{
    return(
        <>
            <div className={classes.mainSubtitle} >
               <h2 className={classes.text}>{props.titleName}</h2>
                <span></span>
            </div>

            </>
    )
};

export default Subtitle;