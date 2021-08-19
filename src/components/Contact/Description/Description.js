import React from "react";
import classes from "./Description.module.css";
import { IoIosMail, IoIosCall, IoMdLocate, IoMdTime} from "react-icons/io";
const Description = ()=>{
  const containerClass = ["col", classes.Container];
  return(<>
    <div className="container-fluid" style={{marginTop:"3em"}}>
      <div className="row">

        <div className={containerClass.join(" ")}>

          <h3 className={classes.subtitle}> You can also find us here  <br/>
            <span></span>
          </h3>

          <ul className={classes.list}>
            <li className={classes.listItem}><IoMdTime/> 24/7 Availability </li>
            <li className={classes.listItem}><IoIosCall/>  713-705-5897 </li>
            <li className={classes.listItem}><IoIosMail/> Rhonda@Wildliferesponse.net  </li>
            <li className={classes.listItem}><IoMdLocate/> P.O. Box 842 • Seabrook, TX • 77586 </li>
          </ul>
        </div>
      </div>

    </div>
    </>
)
};


export default Description;