import React from 'react';
import classes from "./Responders.module.css";
import responderOnePicture from "../../../images/responderOne.png";
import animal2 from "../../../images/animal2.jpg";
import Responder from '../reponder/Responder';
const Responders =(props)=>{
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
    title:{name:"Joyce Riesinger", style:classes.positionTitle}

}
const responderTwo ={
    id:'responderTwo',
    firstClass:classes.lineSeparator,
    secondClass: classes.containerRight,
    thirdClass: classes.pictureTwo,
    image: {source: animal2, name: "william", style: classes.image},
    fourClass: classes.ContainerInformationTwo,
    fifthClass: classes.descriptionTwo,
    description: "Brian Cain received a Bachelor and Master of Science degree from Texas A&I Univ. in Kingsville, TX in 1965 and 1968, and a Ph D from the Univ. of Illinois in 1972. He worked as an Assistant Professor at Texas A&M University in the Wildlife Department until 1978 when he joined the U. S. Fish and Wildlife Service as a Contaminant Specialist. He remained in that position until retiring in January 2007.\n" +
        "As a Contaminant Specialist in the Houston Field Office his major duties included evaluation of Hazardous Waste Sites, Pesticide Applications, Petroleum Product Manufacturing and Oil or Hazardous Material Spills, as these programs related to fish and wildlife health and habitat. He was involved in writing the Natural Resource Damage Assessments both from the Department of Interior, after CERCLA, and the Department of Commerce, after the Oil Pollution Act of 1990. He was also a participant in the Area Committees established to develop the Area Contingency Plans for both the Houston/Galveston and Port Arthur areas.",
    title:{name:"Panda", style:classes.positionTitleTwo},

}
const responders =[];
responders.push(responderOne);
responders.push(responderTwo);

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