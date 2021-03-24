import React from "react";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Testimonials from "../../components/Testimonials";
import "./style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";




function Home() {


  return (
    <>
      <BrowserRouter>
        <div className="container-fluid mainContent">
          <Switch>
            <Route exact path={"/"} component={About} />
            <Route exact path={"/projects"} component={Projects} />
            <Route exact path={"/contact"} component={Contact} />
            <Route exact path={"/resume"} component={Testimonials} />
          </Switch>
        </div>
        <div className="container-fluid polygon">

        </div>
      </BrowserRouter>

    </>
  );
}

export default Home;
