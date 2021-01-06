import React from "react";
import Navbar from "./NavBar/NavBar";
import classes from "./Home.module.css";
import image from "../../images/home-background.png";
import Title from "./Title/Title";
import Button from "./button/Button";
const Home =()=>{
    return(
        <>
            <header className={classes.header} style={{backgroundImage:`url(${image})`}}>
                <Navbar />
                <Title/>
                <Button/>
            </header>
                </>
    )
}
export default Home;