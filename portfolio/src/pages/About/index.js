import React from "react";
import data from "./data";
import "./style.css";
import Projects from "../Projects";

export default function About() {
  console.log(data);
  return (
    <>
      <div id="about">
        <div id="description">{data[0].description}</div>
        <Projects />

        <img
          id="propic"
          src={data[0].image}
          alt="Eric LaFontsee's Profile Picture"
        />
      </div>
    </>
  );
}
