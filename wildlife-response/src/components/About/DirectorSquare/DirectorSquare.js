import React from "react";
import classes from "./DirectorSquare.module.css"
import Rhonda from "../../../images/RhondaMurgatroyd.jpg";
const DirectorSquare =()=>(
   <>
       <div className={classes.container}>
           <div className={classes.directorTitle}>
               <h2 className={classes.directorMainTitle}>MANAGING DIRECTOR</h2>
               <p className={classes.directorName}>RHONDA MURGATROYD</p>
           </div>
           <div className={classes.image}>
               <img src={Rhonda} className={classes.bird} alt={"bird"}/>
           </div>
           <div className={classes.text}>
               <p className={classes.description}>
                   Rhonda Murgatroyd is the owner and managing director of Wildlife Response Services, LLC located in the Houston/Galveston area.   She has been involved in wildlife rehabilitation and oiled wildlife response, including over fifty spills of varying impact since 2007, for over twenty years and works with several rehabilitation groups and area veterinarians along the Gulf Coast and inland areas.  Ms. Murgatroyd has filled various roles in several large-scale emergency responses, consults with industry and private entities regarding site specific contingency planning, and from April 2010 through August 2011 served as Wildlife Branch Director for the Deepwater Horizon Incident.  Ms. Murgatroyd and her team possess a diverse and high level of experience and are prepared to respond to any wildlife incident with a premier network of professionals.

               </p>

           </div>
       </div>

   </>
    )


export default DirectorSquare;