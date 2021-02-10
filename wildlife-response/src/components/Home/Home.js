import React from "react";
import Navbar from "./NavBar/NavBar";
import classes from "./Home.module.css";
import image from "../../images/background.jpg";
import Title from "./Title/Title";
import Button from "./button/Button";
import Footer from "../Footer/Footer";
const Home =()=>{
    return(
        <>
            <header className={classes.header} style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.3),
                       rgba(0, 0, 0, 0.6)), url(${image})`}}>
                <Navbar />
                    <Title/>
                    <Button/>
                <Footer id={"home"}/>
            </header>
                </>
    )
}
export default Home;