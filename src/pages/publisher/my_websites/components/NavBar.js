import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import classes from '../../../../assets/css/cutom_css/buyer/task/navbar.module.css';

const NavBar = () => {
  return (
    <div className={classes.scrollmenu}>
      <div className={classes.naveitem_container}>
        <NavItem className={classes.navlink_container}>
          <NavLink
            className={(navData) =>
              navData.isActive ? classes.navlink_active : classes.navlink
            }
          >
            All
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
            Pending specification
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
            Pending moderation
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
            Approved
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
      <div className={classes.naveitem_container}>
        <NavItem className={classes.navlink_container}>
          <NavLink
            className={(navData) =>
              navData.isActive ? classes.navlink_active : classes.navlink
            }
          >
            On hold
          </NavLink>
        </NavItem>
      </div>
      
    </div>
  );
};

export default NavBar;
