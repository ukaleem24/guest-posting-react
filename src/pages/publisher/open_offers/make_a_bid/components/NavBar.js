import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import classes from 'assets/css/cutom_css/buyer/content_purchase/navbar.module.css';

const NavBar = () => {
  return (
    <div className="mt-4">
      <div className={classes.scrollmenu}>
        <div className={classes.naveitem_container}>
          <NavItem className={classes.navlink_container}>
            <NavLink
              to="/marketer/offer/view/new-bid"
              className={(navData) =>
                navData.isActive ? classes.navlink_active : classes.navlink
              }
            >
              New Bids
            </NavLink>
          </NavItem>
        </div>
        <div className={classes.naveitem_container}>
          <NavItem className={classes.navlink_container}>
            <NavLink
              to="/marketer/offer/view/accepted-bid"
              className={(navData) =>
                navData.isActive ? classes.navlink_active : classes.navlink
              }
            >
              Accepted Bids
            </NavLink>
          </NavItem>
        </div>
        <div className={classes.naveitem_container}>
          <NavItem className={classes.navlink_container}>
            <NavLink
              to="/marketer/offer/view/rejected-bid"
              className={(navData) =>
                navData.isActive ? classes.navlink_active : classes.navlink
              }
            >
              Rejected Bids
            </NavLink>
          </NavItem>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
