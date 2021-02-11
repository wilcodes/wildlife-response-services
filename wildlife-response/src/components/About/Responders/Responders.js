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
    description: "She has worked within the field of biology for over 25 years, and within the realm of spill response for over 10 years.  \n" +
        "Joyce has experience with both, large and small scale spill response and has worked with WRS for more than 2 years in various capacities as related to spill response and wildlife capture and rehabilitation.  She has served in positions within the ICP, Wildlife Rehab Center and in the field in such positions as the Wildlife Response Manager, Wildlife Rehabilitation Center Manager and Wildlife Recovery Group Supervisor.  \n",
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
    description: "Brian Cain received a Bachelor and Master of Science degree from Texas A&I Univ. in Kingsville, TX in 1965 and 1968, and a Ph D from the Univ.\n" +
        "                        of Illinois in 1972. He worked as an Assistant Professor at Texas A&M University in the Wildlife Department until 1978 when he joined the U. S.\n" +
        "                        Fish and Wildlife Service as a Contaminant Specialist. He remained in that position until retiring in January 2007.",
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