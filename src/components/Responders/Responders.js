import React from 'react';
import classes from "./Responders.module.css";
import responderZeroPicture from "../../images/RhondaMurgatroyd.jpg";
import responderOnePicture from "../../images/ResponderOneJoyce.png";
import responderFourPicture from "../../images/patty.jpg";
import responderFivePicture from "../../images/JessicaMurgatroyd.jpg";
import responderSixthPicture from "../../images/Darst Mike.jpg"
import Responder from './responder/Responder';
import LogoNav from "../LogoNav/LogoNav";
import Footer from "../Footer/Footer";
import NavTwo from "../NavTwo/NavTwo";
import Subtitle from "../Subtitle/Subtitle"
import dots from "../../images/dotsNew.png"
import dotImage from "../../images/dotsNew.png"
const Responders =(props)=>{


    const responderZero ={
        id:'responderZero',
        firstClass:classes.lineSeparator,
        secondClass: classes.containerRight,
        thirdClass: classes.pictureTwo,
        image: {source: responderZeroPicture, name: "Rhonda", style: classes.image},
        fourClass: classes.ContainerInformationTwo,
        fifthClass: classes.descriptionTwo,
        description: "Rhonda Murgatroyd is the owner and managing director of Wildlife Response Services, LLC located in the Houston/Galveston area. She has been involved in wildlife rehabilitation and oiled wildlife response, " +
          "including over seventy spills of varying impact, since 2001.  Ms. Murgatroyd has filled various roles in several large-scale emergency responses, including the position of Wildlife Branch Director, for the Deepwater Horizon Incident from April 2010 through August 2011.  " +
          "In addition, she is a principal wildlife response trainer, and consultant for industry and private entities regarding site specific contingency planning.",
        title:{name:"Rhonda Murgatroyd / Managing Director", style: classes.positionTitleTwo},

    };
const responderOne ={
    id:"responderOne",
    firstClass:classes.lineSeparator,
    secondClass: classes.container,
    thirdClass: classes.picture,
    image: {source: responderOnePicture, name: "Panda", style: classes.image},
    fourClass: classes.information,
    fifthClass: classes.description,
    description: "Joyce Riesinger received her Bachelor of Science degree in Marine Biology in 1992 from the University of West Florida. " +
      "She has worked in this field for over 25 years, and within the realm of spill response for over 10 years. Joyce has experience with both large and small scale spill response and has worked with WRS for over 2 years in various capacities." +
      " She possess a high level of training and experience, making her capable of filling  positions within the ICP as well as the Wildlife Rehabilitation Center.  " +
      "Given her background in wildlife biology, she may also be tasked to fill the role of field reconnaissance and recovery supervisor. ",
    title:{name:"Joyce Riesinger / Responder", style:classes.positionTitle}

};


    const responderFour ={
        id:'responderFour',
        firstClass:classes.lineSeparator,
        secondClass: classes.containerRight,
        thirdClass: classes.pictureTwo,
        image: {source: responderFourPicture, name: "Patty", style: classes.image},
        fourClass: classes.ContainerInformationTwo,
        fifthClass: classes.descriptionTwo,
        description: "As the newest member, Patty Simmons joined WRS in 2020 and has worked several spills.  " +
          "She brings with her over 15 years of wildlife rehabilitation experience and is both state and federally permitted.  " +
          "She also is a primary member with Bay Area Wildlife where she rehabilitates wildlife and is involved in various public wildlife education programs",
        title:{name:"Patty Simmons / Responder", style: classes.positionTitleTwo},

    };

    const responderFive = {
        id:"responderFive",
        firstClass:classes.lineSeparator,
        secondClass: classes.container,
        thirdClass: classes.picture,
        image: {source: responderFivePicture, name: "Jessica", style: classes.image},
        fourClass: classes.information,
        fifthClass: classes.description,
        description: "Jessica is a third-year veterinary student at Louisiana State University School of Veterinary Medicine. Her focus is on exotic, " +
          "small animal, and native wildlife medicine. Jessica has a Bachelor of Science in Natural Resources Management from Texas Tech University. " +
          "She has worked with Wildlife Response Services since 2018 and has experience with avian species, mammals, reptiles, and amphibians."
          ,
        title:{name:"Jessica Murgatroyd / Responder", style:classes.positionTitle}
    }

    const responderSix = {
        id:'responderSixth',
        firstClass:classes.lineSeparator,
        secondClass: classes.containerRight,
        thirdClass: classes.pictureTwo,
        image: {source: responderSixthPicture, name: "Michael Darst ", style: classes.image},
        fourClass: classes.ContainerInformationTwo,
        fifthClass: classes.descriptionTwo,
        description: "Michael Darst has worked in the field of Wildlife Rehabilitation for over ten years.  " +
          "He has filled various roles within the rehab facility including those related to animal nutrition, handling, " +
          "and construction of appropriate caging and holding areas.  Mike has worked large spill incidents with Wildlife Response Services, " +
          "LLC as a member of the wildlife rehabilitation staff for the past two years where he oversaw the handling and care of impacted wildlife. " +
          " His strong skills in design and construction of an efficient rehabilitation center make him a valuable asset to the WRS Team.",
        title:{name:"Michael Darst / Responder", style: classes.positionTitleTwo},

    }

const responders =[];
    responders.push(responderZero);
    responders.push(responderOne);
    responders.push(responderFour);
    responders.push(responderFive);
    responders.push(responderSix);

    return(
        <section style={{backgroundImage:`url(${dotImage})`, backgroundRepeat:"repeat"}}>
            <LogoNav/>
            <NavTwo description={"responders"}/>
            <Subtitle titleName={"Core Response Team Members"}/>

                {responders.map( responder => (
                   <Responder
                       key={responder.id}
                       data={responder} />
                ))}
            <Footer/>
        </section>
    )
};
export default Responders;