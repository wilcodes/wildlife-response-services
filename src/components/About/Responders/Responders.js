import React from 'react';
import classes from "./Responders.module.css";
import responderZeroPicture from "../../../images/RhondaMurgatroyd.jpg";
import responderOnePicture from "../../../images/responderOneJoyce.png";
import responderFourPicture from "../../../images/patty.jpg";
import responderFivePicture from "../../../images/JessicaMurgatroyd.jpg";
import Responder from '../responder/Responder';
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
    description: "Joyce Riesinger received her Bachelors of Science in Marine Biology in 1992 from the University of West Florida. She has worked within the field of biology for over 25 years, and within the realm of spill response for over 10 years.  \n" +
        "Joyce has experience with both, large and small scale spill response and has worked with WRS for more than 2 years in various capacities as related to spill response and wildlife capture and rehabilitation.  She has served in positions within the ICP, Wildlife Rehab Center and in field positions as the Wildlife Response Manager, Wildlife Rehabilitation Center Manager and Wildlife Recovery Group Supervisor.  \n",
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
        description: "Jessica is a third-year veterinary student at Louisiana State University School of Veterinary Medicine. " +
          "She hopes to focus on exotic and small animal medicine and work with native wildlife in the future. Jessica has a Bachelor of Science in Natural Resources Management from Texas Tech University. "+
          "She has worked with Wildlife Response Services since 2018 and has experience with avian species, mammals, and reptiles and amphibians.\n" +
          "\n" +
          " ",
        title:{name:"Jessica Murgatroyd / Responder", style:classes.positionTitle}
    }

const responders =[];
    responders.push(responderZero);
    responders.push(responderOne);
    responders.push(responderFour);
    responders.push(responderFive);

    return(
        <>
                {responders.map( responder => (
                   <Responder
                       key={responder.id}
                       data={responder} />
                ))}
        </>
    )
};
export default Responders;