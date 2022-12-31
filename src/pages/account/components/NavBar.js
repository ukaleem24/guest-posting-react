import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import classes from 'assets/css/cutom_css/buyer/task/navbar.module.css';

const NavBar = () => {
  return (
    <div className={classes.scrollmenu}>
      <div className={classes.naveitem_container}>
        <NavItem className={classes.navlink_container}>
          <NavLink
            className={(navData) =>
              navData.isActive ? classes.navlink_active : classes.navlink
            }
            to="/account-detail/profile"
          >
            <b>Account Settings</b>
          </NavLink>
        </NavItem>
      </div>
      <div className={classes.naveitem_container}>
        <NavItem className={classes.navlink_container}>
          <NavLink
            className={(navData) =>
              navData.isActive ? classes.navlink_active : classes.navlink
            }
            to="/account-detail/contact"
          >
            <b> Contect Info</b>
          </NavLink>
        </NavItem>
      </div>
      <div className={classes.naveitem_container}>
        <NavItem className={classes.navlink_container}>
          <NavLink
            className={(navData) =>
              navData.isActive ? classes.navlink_active : classes.navlink
            }
            to="/account-detail/notification"
          >
            <b>Notification settings</b>
          </NavLink>
        </NavItem>
      </div>
      <div className={classes.naveitem_container}>
        <NavItem className={classes.navlink_container}>
          <NavLink
            className={(navData) =>
              navData.isActive ? classes.navlink_active : classes.navlink
            }
            // to="/event/read"
          >
            <b> Billing details</b>
          </NavLink>
        </NavItem>
      </div>
    </div>
  );
};

export default NavBar;
