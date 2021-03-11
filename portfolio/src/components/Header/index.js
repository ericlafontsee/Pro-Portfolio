import React from "react";
import "./style.css";
import Contact from "../Contact";

function Header() {
  return (
    <header id="header" className="container-fluid">
      <div className="row">
        <div className="col-md-10">
          <h1>Eric LaFontsee</h1>
        </div>
        <div className="col-md-2">
          <Contact />
        </div>
      </div>
    </header>
  );
}

export default Header;
