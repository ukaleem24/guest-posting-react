import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import classes from '../../../../assets/css/cutom_css/buyer/publisher/navSearchResult.module.css';

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
      <div className={classes.naveitem_container}>
        <NavItem className={classes.navlink_container}>
          <NavLink
          
            className={(navData) =>
              navData.isActive ? classes.navlink_active : classes.navlink
            }
           
          >
            All websites
          </NavLink>
        </NavItem>
      </div>
      <div className={classes.naveitem_container}>
        <NavItem className={classes.navlink_container}>
          <NavLink
            className={(navData) =>
              navData.isActive ? classes.navlink_active : classes.navlink
            }
            
          >
            Only publishers I’ve worked with
          </NavLink>
        </NavItem>
      </div>
      <div className={classes.naveitem_container}>
        <NavItem className={classes.navlink_container}>
          <NavLink
            className={(navData) =>
              navData.isActive ? classes.navlink_active : classes.navlink
            }
            
          >
            Exclude sites I’ve worked with
          </NavLink>
        </NavItem>
      </div>
    </div>
  );
};

export default NavBarSearchResults;
