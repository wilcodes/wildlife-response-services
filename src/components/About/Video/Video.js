import React from "react";
import ReactPlayer from "react-player/lazy";
import classes from "./Video.module.css";
const Video=()=>(
    <>
        <div className={classes.videoWrapper}>
            <ReactPlayer
                url={"/www.youtube.com/watch?v=64DuPEkVGH0"}
                className={classes.video}
                width='100%'
                height='100%'
            />
        </div>
        </>
);
export default Video;
