import React from "react";
import data from "./data";
import Flipcard from "../../components/Flipcard";
// import Card from "../../components/Card";
import "./style.css";

export default function Projects() {

  return (
    <>
      <div id="projects">
        {data.map((item, key) => {
          return <Flipcard {...item} />;
        })}
      </div>
    </>
  );
}
