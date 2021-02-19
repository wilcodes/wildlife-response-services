import React from "react";
import ReactPlayer from "react-player/lazy";
import classes from "./Video.module.css";
const Video=()=>(
    <>
        <ReactPlayer url="/www.youtube.com/watch?v=64DuPEkVGH0" className={classes.video}/>
        </>
);
export default Video;
