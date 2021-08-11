import React from 'react';

const Responder = (props) => (
    <>

<h2 className={props.data.title.style} >{props.data.title.name} </h2>
    <div className={props.data.secondClass} >
    <div className={props.data.thirdClass} >
        <img src={props.data.image.source} alt={props.data.image.name} className={props.data.image.style} />
    </div>
    <div className={props.data.fourClass} >
        <p className={props.data.fifthClass} >
            {props.data.description}
        </p>
    </div >
    </div>
        <div className={props.data.firstClass} />
        </>

);


export default Responder;