import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Commom from "./Commom";
// import Footer from "./Footer";
import { Redirect, Route, Switch } from "react-router-dom";

const App = () => {
    return(
        <>
        {/* <h1> Hii </h1> */}
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/commom" component={Commom} />
            <Redirect to="/" />
        </Switch>
        {/* <Footer /> */}
        </>
    );
};
export default App;