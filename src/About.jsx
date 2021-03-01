import React from "react";
import web from "../src/images/me.jpg";
// import { NavLink } from "react-router-dom";
import Commom from "./Commom";


const About = () => {
    return(
        <>
            <Commom  name="Welcome to About page" 
            imgsrc={web} 
            visit="/Contact" 
            btname="Contact Now" />
        </>
    );
};
export default About; 