import React from 'react';
import classes from "./Responders.module.css";
import animal1 from "../../../images/animal1.jpg";
import animal2 from "../../../images/animal2.jpg";
import animal3 from "../../../images/animal3.jpg";

const Responders =(props)=>{
const responderOne ={
    key:1,
    firstClass:classes.lineSeparator,
    secondClass: classes.container,
    thirdClass: classes.picture,
    image: {source: animal1, name: "Panda", style: classes.image},
    fourClass: classes.information,
    fifthClass: classes.description,
    description: "Brian Cain received a Bachelor and Master of Science degree from Texas A&I Univ. in Kingsville, TX in 1965 and 1968, and a Ph D from the Univ.\n" +
        "                        of Illinois in 1972. He worked as an Assistant Professor at Texas A&M University in the Wildlife Department until 1978 when he joined the U. S.\n" +
        "                        Fish and Wildlife Service as a Contaminant Specialist. He remained in that position until retiring in January 2007.",
    title:{name:"Deer", style:classes.positionTitle}

}
const responderTwo ={
    key:2,
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

                {responders.map(responder => {
                    return  <>
                    {/*//Logic to render responses with an Array*/}
                    <li key={responder.key}>
                        <div className={responder.firstClass}  />
                        <h2 className={responder.title.style} >{responder.title.name} </h2>
                        <div className={responder.secondClass} >
                            <div className={responder.thirdClass} >
                        <img src={responder.image.source} alt={responder.image.name} className={responder.image.style} />
                            </div>
                        <div className={responder.fourClass} >
                    <p className={responder.fifthClass} >
                    Brian Cain received a Bachelor and Master of Science degree from Texas A&I Univ. in
                    Kingsville, TX in 1965 and 1968, and a Ph D from the Univ.
                    of Illinois in 1972. He worked as an Assistant Professor at Texas A&M University in the
                    Wildlife Department until 1978 when he joined the U. S.
                    Fish and Wildlife Service as a Contaminant Specialist. He remained in that position
                    until retiring in January 2007.
                    </p>
                        </div >
                    <div/>
                        </div>
                    </li>
                    </>
                })}

        </>
    )
};
export default Responders;