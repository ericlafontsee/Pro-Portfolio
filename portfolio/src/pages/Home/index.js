import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import About from "../../components/About";
import Testimonials from "../../components/Testimonials";
import "./style.css";

function Home() {
  return (
    <>
      <Header />
      <div className="container-fluid mainContent">
        <div className="row">
          <div className="col-md-12 about">
            <About />
            </div>
          <div className="col-md-12 testimonials">
            <Testimonials />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
