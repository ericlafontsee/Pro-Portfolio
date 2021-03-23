import React, { useState } from "react";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Testimonials from "../../components/Testimonials";
import "./style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Transition, animated } from "react-spring/renderprops";


const pages = [
  (style) => (
    <animated.div style={{ ...style,  }}><About/></animated.div>
  ),
  (style) => (
    <animated.div style={{ ...style,  }}><Projects/></animated.div>
  ),
  (style) => (
    <animated.div style={{ ...style,  }}><Testimonials/></animated.div>
  )
];


function Home() {
  const [index, setIndex] = useState(0);
  const toggle = () =>{
    index === 2 ? setIndex(0) : setIndex(index + 1);
  }

  return (
    <>
          {/* <div className="main container-fluid mainContent" onClick={toggle}>
        <Transition
          native
          reset
          unique
          items={index}
          from={{ opacity: 0, transform: "translate3d(100%,0,0)" }}
          enter={{ opacity: 1, transform: "translate3d(0%,0,0)" }}
          leave={{ opacity: 0, transform: "translate3d(-50%,0,0)" }}
        >
          {(index) => pages[index]}
        </Transition>
      </div> */}
      <BrowserRouter>
        <div className="container-fluid mainContent">
          <Switch>
            <Route exact path={"/"} component={About} />
            <Route exact path={"/projects"} component={Projects} />
            <Route exact path={"/resume"} component={Testimonials} />
          </Switch>
        </div>
      </BrowserRouter>

      ///////
      {/* <div className="container-fluid mainContent">
        <div className="row aboutRow">
          <div className="col-md-12 about">
            <About />
            </div>
          <div className="col-md-12 projects">
            <Projects />
          </div>
          <div className="col-md-12 testimonials">
            <Testimonials />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;
