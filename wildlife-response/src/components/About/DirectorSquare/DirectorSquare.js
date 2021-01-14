import React from "react";
import classes from "./DirectorSquare.module.css"
import bird from "../../../images/aboutBird.png";
const DirectorSquare =()=>(
   <>
       <div className={classes.container}>
           <div className={classes.directorTitle}>
               <h2 className={classes.directorMainTitle}>MANAGING DIRECTOR</h2>
               <p className={classes.directorName}>RONDA MURGATROYD</p>
           </div>
           <div className={classes.image}>
               <img src={bird} className={classes.bird}/>
           </div>
           <div className={classes.text}>
               <p className={classes.description}>  Rhonda Murgatroyd is the owner and managing director of Wildlife Response Services, LLC located in the Houston/Galveston area.
                   She has been involved in wildlife rehabilitation and oiled wildlife response for over fifteen years, and possesses both federal
                   and state permits, including rehabilitation of endangered species. Her experience includes working with several rehabilitation groups and area veterinarians along the Gulf Coast and inland areas. Ms. Murgatroyd also serves on the board of directors for Armand Bayou Nature Center in the capacity of wildlife committee chairman, and is the lead facilitator for Youth Educational Support Services Water-Borne BaySmart Program. She has led the environmental unit in large-scale emergency responses, and consults with industry and private entities regarding site specific contingency planning. Rhonda received Certified Occupational Safety Specialist certification in January 2010 through the Louisiana Safety Council, and is also certified as a CPR/AED/First Aid instructor through the American Heart Association.

               </p>

           </div>
       </div>

   </>
    )


export default DirectorSquare;