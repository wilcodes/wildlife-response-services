import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import '@brainhubeu/react-carousel/lib/style.css';
import image1 from "../../../images/truck.jpg";
import image2 from "../../../images/pelican.jpg";
import image3 from "../../../images/background.jpg";
import image4 from "../../../images/caruselOne.jpg";
import image5 from "../../../images/caruselTwo.jpg";
import image6 from "../../../images/caruselThree.jpg";
import classes from "./ImageSlider.module.css";

const ImageSlider =()=> {
  // const images = [{ src:image1, name: "truck"},
  //     { src:image2, name: "pelican"},
  //     { src:image3, name: "bird"},
  //     { src:image4, name: "pelican In the beach " },
  //     { src:image5, name: "Pelican Flying" },
  //     { src:image6, name: "truck for spills" }];

 return(
  <div style={{ textAlign: "center", marginBottom:"2em"}} >
    <Carousel
      slidesPerPage={1}
      autoPlay={4000}
      animationSpeed={1800}
      infinite
    >
      <img src={image1} alt={"truck"} className={classes.images}/>
      <img src={image2} alt={"truck"} className={classes.images}/>
      <img src={image3} alt={"truck"} className={classes.images}/>
      <img src={image4} alt={"truck"} className={classes.images}/>
      <img src={image5} alt={"truck"} className={classes.images}/>
      <img src={image6} alt={"truck"} className={classes.images}/>

    </Carousel>
  </div>)
};

export default ImageSlider;