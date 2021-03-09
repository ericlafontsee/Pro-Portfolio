import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="footer">
      <p className="eric" >&copy; 2020 Eric LaFontsee</p>
      <a
        href="https://www.instagram.com/eric_lafontsee/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
          <FontAwesomeIcon icon={["fab", "instagram"]} className="ficon"/>
      </a>
      <a
        href="https://www.facebook.com/eric.lafontsee"
        target="_blank"
        rel="noopener noreferrer"
      >
             <FontAwesomeIcon icon={["fab", "facebook"]} className="ficon"/>
      </a>
      <a
        href="https://www.linkedin.com/in/eric-lafontsee-a2b65a6b/"
        target="_blank"
        rel="noopener noreferrer"
      >
         <FontAwesomeIcon icon={["fab", "linkedin"]} className="ficon"/>
      </a>
      <a
        href="https://github.com/ericlafontsee"
        target="_blank"
        rel="noopener noreferrer"
      >
             <FontAwesomeIcon icon={["fab", "github"]} className="ficon"/>
      </a>
    </footer>
  );
}

export default Footer;
