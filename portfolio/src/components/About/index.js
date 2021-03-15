import React from "react";
import "./style.css";

export default function About() {
  return (
    <>
        <div  id="about" className="container-fluid">
          <div className="row">
            <div className="col-md-4 bio">
              <div > 
                Full stack web developer with a background in the music
                business. Successfully managed tours for a Sony artist providing
                support for national acts like Lynyrd Skynyrd. Known for my time
                management skills and discipline, I taught myself XML languages
                and got offered a job as junior programmer at a technical
                publications company. Recently earned a certificate in Full
                Stack Web Development from Vanderbilt University learning HTML,
                CSS, and JavaScript. Motivated to work with a team invested in
                developing cutting-edge web applications. My determination
                combined with diligence makes me a reliable and successful team
                member.
              </div>
            </div>
            <div className="col-md-4 ">
              <img
                src={process.env.PUBLIC_URL + "/images/professional_pic.JPG"}
                className="propic img-fluid "
                alt="Portrait of Eric LaFontsee"
              />
            </div>
          </div>
        </div>
    </>
  );
}
