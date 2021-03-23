import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';


//Open Nav Menu Component

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        About
      </a>
      <a href="/projects" tabIndex={tabIndex}>
        Projects
        </a>
      <a href="/contact" tabIndex={tabIndex}>
       Contact
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
