import React, { useState, useRef } from "react";
import { useTransition, useSpring, useChain, config } from "react-spring";
import { Container, Item } from "./styles";
import data from "./data";
import Flipcard from "../../components/Flipcard";
// import Card from "../../components/Card";
import "./style.css";

export default function Projects() {
  const [open, setOpen] = useState(false);

  const expand = open ? "X" : "My Work";

  let topNum = 0;
  let posType = "relative";
  let leftNum = 0;
  let w = "150px";
  let h = "100px";

  if (open) {
    topNum = 0;
    posType = "fixed";
    leftNum = 0;
    w = "100%";
    h = "100%";
  }

  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: "20%", background: "black" },
    to: {
      size: open ? "100%" : "20%",
      background: open ? "rgba(0,0,0,0.6)" : "black"
    }
  });

  const transRef = useRef();
  const transitions = useTransition(open ? data : [], (item) => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" }
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6
  ]);

  return (
    <>
      <div
        id="projects"
        style={{ top: topNum, position: posType, left: leftNum, width: w, height: h }}
      >
        <Container style={{ ...rest, width: size, height: size }} >
          <button
            style={{
              background: "black",
              color: "white",
              maxWidth: "100px",
              maxHeight: "75px",
              width: '200px',
              height: '100%',
              zIndex: 134,
              position: 'absolute',
              top: 0,
              left: 0
            }}
            onClick={() => setOpen((open) => !open)}
          >
            {expand}
          </button>
          {transitions.map(({ item, key, props }) => (
            <Item key={key} style={{ ...props }}>
              <Flipcard {...item} />
              {/* <Card {...item} /> */}
            </Item>
          ))}
        </Container>
      </div>
    </>
  );
}
