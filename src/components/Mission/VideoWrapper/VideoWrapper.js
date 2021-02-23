import React from "react";
import Video from "../Video/Video";
import classes from "./VideoWrapper.module.css";
import { VscArrowRight} from "react-icons/vsc";
const VideoWrapper=()=>{
    const  style= ["col-sm-6", classes.video, "col-md-12"];
    return(
        <>
            <div className="container">
                <div className="row" style={{marginTop:"3em"}}>
                    <div className="col-sm-6" style={{backgroundColor:"#4e6471", paddingTop:"3.5em", width:"45%", height:"100%"}}>
                        <h2 style={{margin:"2em auto", color:"#ebf1ff", textShadow:"none", textTransform:"none"}}>
                            Learn More about our Company watching the following Video of our managing director Rhonda Murgatroyd
                        </h2>
                        <VscArrowRight className={classes.icon}/>
                    </div>
                    <div className={style.join(" ")}>
                        <Video/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default VideoWrapper;
