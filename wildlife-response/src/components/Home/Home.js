import React from "react";
import Navbar from "./NavBar/NavBar";
import classes from "./Home.module.css";
import image from "../../images/pelican.jpg";
import Title from "./Title/Title";
import Button from "./button/Button";
import Footer from "../Footer/Footer";
const Home =()=>{
    return(
        <>

            <header className={classes.header} style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5),
                       rgba(0, 0, 0, 0.7)), url(${image})`}}>
                <Navbar />
                    <Title/>
                    <Button/>
                <Footer id={"home"}/>
            </header>
                </>
    )
}
export default Home;