import React from 'react';
import classes from "./Responders.module.css";
import animal1 from "../../../images/animal1.jpg";
import animal2 from "../../../images/animal2.jpg";
import animal3 from "../../../images/animal3.jpg";

const Responders =()=>{
    return(
        <>
                <div className={classes.lineSeparator}/>
                    <h2 className={classes.positionTitle}>Deer</h2>
            {/*Referring to First type of block*/}
                <div className={classes.container}>
                <div className={classes.picture}>
                    <img src={animal1} alt="william" className={classes.image}/>
                </div>
                    <div className={classes. information}>
                    <p className={classes.description}>
                    Brian Cain received a Bachelor and Master of Science degree from Texas A&I Univ. in Kingsville, TX in 1965 and 1968, and a Ph D from the Univ.
                        of Illinois in 1972. He worked as an Assistant Professor at Texas A&M University in the Wildlife Department until 1978 when he joined the U. S.
                        Fish and Wildlife Service as a Contaminant Specialist. He remained in that position until retiring in January 2007.
                    </p>
                </div>
                <div/>
                </div>
            <div className={classes.lineSeparator}/>
            {/*//Referring to the second type of block*/}
                 <h2 className={classes.positionTitleTwo}>Panda</h2>
                <div className={classes.containerRight}>
                    <div className={classes.pictureTwo}>
                    <img src={animal2} alt="william" className={classes.image}/>
                </div>
                <div className={classes.ContainerInformationTwo}>
                    <p className={classes.descriptionTwo}> Brian Cain received a Bachelor and Master of Science degree from Texas A&I Univ. in Kingsville, TX in 1965 and 1968, and a Ph D from the Univ. of Illinois in 1972. He worked as an Assistant Professor at Texas A&M University in the Wildlife Department until 1978 when he joined the U. S. Fish and Wildlife Service as a Contaminant Specialist. He remained in that position until retiring in January 2007.</p>
                </div>
                <div/>
                </div>
                <div className={classes.lineSeparator}/>
                <h2 className={classes.positionTitle}> Turtle </h2>
                <div className={classes.container}>
                <div className={classes.picture}> <img src={animal3} alt="william " className={classes.image}/> </div>
                <div className={classes. information}>
                    <p className={classes.description}> Brian Cain received a Bachelor and Master of Science degree from Texas A&I Univ. in Kingsville, TX in 1965 and 1968,
                        and a Ph D from the Univ. of Illinois in 1972. He worked as an Assistant Professor at Texas A&M University in the Wildlife Department until 1978 when
                        he joined the U. S.
                        Fish and Wildlife Service as a Contaminant Specialist. He remained in that position until retiring in January 2007.</p>
                </div>
                <div/>
                </div>


        </>
    )
};
export default Responders;