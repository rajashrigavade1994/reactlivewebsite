import React from "react";
import web from "../src/images/logo512.png";
// import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const Home = () => {
    return(
        <>
            <Commom  name="Grow your bussiness with" 
            imgsrc={web} 
            visit="/service" 
            btname="Get Started" />
        </>
    );
};
export default Home; 