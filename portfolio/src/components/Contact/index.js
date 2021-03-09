import "./style.css";
import React, { useState } from "react";
import { Keyframes, config } from "react-spring/renderprops";
import { Input } from "antd";
import delay from "delay";

const items = [
  {
    key: 1,
    content: <Input size="medium" placeholder="Name" />
  },
  {
    key: 2,
    content: <Input size="medium" placeholder="Phone" />
  },
  {
    key: 3,
    content: <Input size="medium" placeholder="Email" />,
  },
  {
    key: 4,
    content: <Input size="medium" placeholder="Message" />,
  }

];

const Menu = Keyframes.Spring({
  in: async (next) => {
    await next({
      transform: "translateX(0%)"
    });
  },
  out: async (next) => {
    await delay(700);
    await next({
      transform: "translateX(-100%)"
    });
  }
});

const MenuItems = Keyframes.Trail({
  in: async (next) => {
    await delay(600);
    await next({
      opacity: 1,
      transform: "translateX(0px)"
    });
  },
  out: async (next) => {
    await next({
      opacity: 0,
      transform: "translateX(-40px)"
    });
  }
});

function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleBtnClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Contact">
      <button onClick={handleBtnClick}>Contact</button>

      <Menu config={config.gentle} unique state={menuOpen ? "in" : "out"}>
        {(props) => (
          <nav style={props}>
            <form>
              <MenuItems
                keys={(item) => item.key}
                items={items}
                state={menuOpen ? "in" : "out"}
                reverse={!menuOpen}
              >
                {(trailitem) => (trailprops) => (
                <div className="contactForm" style={trailprops}>{trailitem.content}</div>
                )}
              </MenuItems>
            </form>
          </nav>
        )}
      </Menu>
    </div>
  );
}

export default Contact;
