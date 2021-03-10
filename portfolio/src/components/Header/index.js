import React from "react";
import "./style.css";
import Contact from "../Contact";

function Header() {
  return (
    <header id="header" className="container-fluid">
      <div className="d-flex flex-row">
          <h1>Eric LaFontsee</h1>
          <Contact />
      </div>
    </header>
  );
}

export default Header;
