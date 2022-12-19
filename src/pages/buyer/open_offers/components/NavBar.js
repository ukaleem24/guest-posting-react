import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import classes from '../../../../assets/css/cutom_css/buyer/content_purchase/navbar.module.css';

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

const NavBar = () => {
  return (
    <div className={classes.scrollmenu}>
      <div className={classes.naveitem_container}>
        <NavItem className={classes.navlink_container}>
          <NavLink

          to="/marketer/offer/all"
            className={(navData) =>
              navData.isActive ? classes.navlink_active : classes.navlink
            }
          >
            All Offers
          </NavLink>
        </NavItem>
      </div>
      <div className={classes.naveitem_container}>
        <NavItem className={classes.navlink_container}>
          <NavLink
          to="/marketer/offer/active"
            className={(navData) =>
              navData.isActive ? classes.navlink_active : classes.navlink
            }
          >
            Active Offers
          </NavLink>
        </NavItem>
      </div>
      <div className={classes.naveitem_container}>
        <NavItem className={classes.navlink_container}>
          <NavLink
          to="/marketer/offer/paused"
            className={(navData) =>
              navData.isActive ? classes.navlink_active : classes.navlink
            }
          >
            Paused Offers
          </NavLink>
        </NavItem>
      </div>
      
    </div>
  );
};

export default NavBar;
