import React from "react";
import Backdrop from "../../Backdrop/Backdrop";
import classes from "./Modal.module.css";
import { TiThumbsDown, TiThumbsUp } from "react-icons/ti";
import Spinner from "../Spinner/Spinner";
const Modal = (props)=> {

  let modal = null;
  const hideModal=()=>{
    modal= null;
  };
  if (props.message ==="open") {
  modal =  <div className={classes.Modal}>
    <p className={classes.subDescription}> Your Message has been sent without Problems </p>
    <p className={classes.description}> We will contact you as soon as possible
      <TiThumbsUp className={classes.icons}/>
    </p>
    <p className={classes.subDescription}> Wildlife Response Services Team </p>

  </div>
  }
  if (props.message ==="closed"){
    modal = null;
  }
  if (props.message ==="openError"){
    modal = <>
      <div className={classes.Modal}>
      <p className={classes.subDescription}> Your Message could not be sent </p>
      <p className={classes.description}> Please Reload the page and try Again <TiThumbsDown className={classes.icons}/></p>

    </div>
  </>
  }
  if (props.message ==="loading"){
    modal= <div className={classes.Modal}> <Spinner/> </div>
  }

   return(
     <>
       < Backdrop show = { props.message==="open" || props.message ==="openError" ? true : false}/>
       {modal}
    </>)
};
export default Modal;
