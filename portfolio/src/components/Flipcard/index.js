import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./style.css";

function Flipcard(props) {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  return (
    <div className="card mx-auto" onClick={() => set((state) => !state)}>
      <animated.div
        className="c front"
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      >
        <img
          className="img-fluid mx-auto"
          src={process.env.PUBLIC_URL + props.image}
          alt={props.name}
        />
      </animated.div>

      <animated.div
        className="c back"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`)
        }}
      >
        <div id="appName">{props.name}</div>
        <p id="appDesc">{props.description}</p>
        <div className="links mx-auto">
          <a id="github" href={props.GitHub} target="_blank">
            Github
          </a>
          <span id="bar"> | </span>
          <a id="deployed" href={props.Deployed} target="_blank">
            Deployed
          </a>
        </div>
      </animated.div>
    </div>
  );
}

export default Flipcard;
