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
            to="/event/unread"
          >
            <b>Unread</b>
          </NavLink>
        </NavItem>
      </div>
      <div className={classes.naveitem_container}>
        <NavItem className={classes.navlink_container}>
          <NavLink
            className={(navData) =>
              navData.isActive ? classes.navlink_active : classes.navlink
            }
            to="/event/read"
          >
           <b> Read</b>
          </NavLink>
        </NavItem>
      </div>
      
      
    </div>
  );
};




export default NavBar