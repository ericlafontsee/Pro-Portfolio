import {config } from 'react-spring';
import delay from 'delay';
import ReactPlaceholder from 'react-placeholder';
import React, { useState } from "react";
import { Keyframes } from "react-spring/renderprops";
import './style.css';

const items = [
  {
    key: 1,
    content: <ReactPlaceholder type="media" rows={2} />,
  },
  {
    key: 2,
    content: 'Home',
  },
  {
    key: 3,
    content: 'Favourites',
  },
  {
    key: 4,
    content: 'Sign out',
  },
];

const Menu = Keyframes.Spring({
  in: async next => {
    await next({
      transform: 'translateX(0%)',
    });
  },
  out: async next => {
    await delay(700);
    await next({
      transform: 'translateX(-100%)',
    });
  },
});

const MenuItems = Keyframes.Trail({
  in: async next => {
    await delay(600);
    await next({
      opacity: 1,
      transform: 'translateX(0px)',
    });
  },
  out: async next => {
    await next({
      opacity: 0,
      transform: 'translateX(-40px)',
    });
  },
});

function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);


  const handleBtnClick = () => {
setMenuOpen(!menuOpen);
     
  };


  return (
      <>
      <div className="App">
        <button onClick={handleBtnClick}>☰</button>

        <Menu
          config={config.gentle}
          unique
          state={menuOpen ? 'in' : 'out'}
        >
          {props => (
            <nav style={props}>
              <ul>
                <MenuItems
                  keys={item => item.key}
                  items={items}
                  state={menuOpen ? 'in' : 'out'}
                  reverse={menuOpen}
                >
                  {trailitem => trailprops => (
                    <li style={trailprops}>{trailitem.content}</li>
                  )}
                </MenuItems>
              </ul>
            </nav>
          )}
        </Menu>
      </div>
    </>
  );
}

export default Contact;
