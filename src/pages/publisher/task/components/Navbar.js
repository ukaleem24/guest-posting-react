import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import classes from '../../../../assets/css/cutom_css/buyer/task/navbar.module.css';

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

const Navbar = () => {
  return (
    <div className={classes.scrollmenu}>
      <div className={classes.naveitem_container}>
        <NavItem className={classes.navlink_container}>
          <NavLink
            className={(navData) =>
              navData.isActive ? classes.navlink_active : classes.navlink
            }
          >
            Your Acceptance
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
            In Progress
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
            Buyer&apos;s Approval
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
            Improvement
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
           Completed
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
            Rejected
          </NavLink>
        </NavItem>
      </div>
    </div>
  );
};

export default Navbar;
