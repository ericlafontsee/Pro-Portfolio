// import 'antd/dist/antd.css'
import "./style.css";
import React, { Fragment, useState } from "react";
import { Keyframes, animated } from "react-spring/renderprops";
import { Form, Input, Button } from "antd";
import delay from "delay";

// Creates a spring with predefined animation slots
const Sidebar = Keyframes.Spring({
  // Slots can take arrays/chains,
  peek: [
    { x: 0, from: { x: -100 }, delay: 500 },
    { x: -100, delay: 800 }
  ],
  // single items,
  open: { delay: 0, x: 0 },
  // or async functions with side-effects
  close: async (call) => {
    await delay(400);
    await call({ delay: 0, x: -100 });
  }
});

// Creates a keyframed trail
const Content = Keyframes.Trail({
  peek: [
    { x: 0, opacity: 1, from: { x: -100, opacity: 0 }, delay: 600 },
    { x: -100, opacity: 0, delay: 0 }
  ],
  open: { x: 0, opacity: 1, delay: 100 },
  close: { x: -100, opacity: 0, delay: 0 }
});

const items = [
  <Input size="medium" placeholder="Name" />,
  <Input size="medium" placeholder="Phone" />,
  <Input size="medium" placeholder="email" />,
  <Input size="medium" placeholder="Subject" />,
  <Input size="large" placeholder="Message" />,
  <Fragment>
    <Button
      size="small"
      type="primary"
      htmlType="submit"
      className="login-form-button"
      children="Log in"
    />
  </Fragment>
];

function Contact() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const state =
    open === false ? "peek" : setOpen(true) ? "open" : "close";
  const icon = open ? "fold" : "unfold";
  return (
    <div style={{ background: "lightblue", width: "100%", height: "100%" }}>
      <Sidebar native state={state}>
        {({ x }) => (
          <animated.div
            className="sidebar"
            style={{
              transform: x.interpolate((x) => `translate3d(${x}%,0,0)`)
            }}
          >
            <Content
              native
              items={items}
              keys={items.map((_, i) => i)}
              reverse={!open}
              state={state}
            >
              {(item, i) => ({ x, ...props }) => (
                <animated.div
                  style={{
                    transform: x.interpolate((x) => `translate3d(${x}%,0,0)`),
                    ...props
                  }}
                >
                  <Form.Item className={i === 0 ? "middle" : ""}>
                    {item}
                  </Form.Item>
                </animated.div>
              )}
            </Content>
          </animated.div>
        )}
      </Sidebar>
    </div>
  );
}

export default Contact;
