import React from 'react';
import classes from "../../assets/css/cutom_css/navSearchResult.module.css"
// import {
//   //   Row,
//   //   Col,
//   Nav,
//   NavItem,
//   Dropdown,
//   //   DropdownItem,
//   DropdownToggle,
//   //   DropdownMenu,
//   NavLink,
// } from 'reactstrap';

const NavBarSearchResults = () => {
  return (
    <div className={classes.scrollmenu}>
      <a href="#home">All websites</a>
      <a href="#news">Only publishers I’ve worked with</a>
      <a href="#contact">Exclude sites I’ve worked with</a>
    
    </div>
  );
};

export default NavBarSearchResults;
