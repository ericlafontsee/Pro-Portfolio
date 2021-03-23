import React from "react";
import data from "./data";
import Flipcard from "../../components/Flipcard";
// import Card from "../../components/Card";
import "./style.css";

export default function Projects() {
  return (
    <>
      <div className="projects container">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex flex-wrap justify-content-space-evenly">
              {data.map((item, key) => {
                return <Flipcard {...item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
