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
      <a className={classes.navbar_item} href="#home">All websites</a>
      <a className={classes.navbar_item} href="#news">Only publishers I’ve worked with</a>
      <a className={classes.navbar_item} href="#contact">Exclude sites I’ve worked with</a>
    
    </div>
  );
};

export default NavBarSearchResults;
