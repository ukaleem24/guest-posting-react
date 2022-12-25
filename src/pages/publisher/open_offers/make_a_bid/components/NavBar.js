import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem  } from 'reactstrap';
import classes from 'assets/css/cutom_css/buyer/content_purchase/navbar.module.css';

const NavBar = () => {
  return (
    <>
      
      <div >
        <div className={classes.scrollmenu}>
          <div className={classes.naveitem_container}>
            <NavItem className={classes.navlink_container}>
              <NavLink
                to="/publisher/offer/view/1234/all"
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
                to="/publisher/offer/view/1234/new"
                className={(navData) =>
                  navData.isActive ? classes.navlink_active : classes.navlink
                }
              >
                New
              </NavLink>
            </NavItem>
          </div>
          <div className={classes.naveitem_container}>
            <NavItem className={classes.navlink_container}>
              <NavLink
                to="/publisher/offer/view/1234/accepted"
                className={(navData) =>
                  navData.isActive ? classes.navlink_active : classes.navlink
                }
              
              >
                Accepted
              </NavLink>
            </NavItem>
          </div>
          <div className={classes.naveitem_container}>
            <NavItem className={classes.navlink_container}>
              <NavLink
                to="/publisher/offer/view/1234/rejected"
                className={(navData) =>
                  navData.isActive ? classes.navlink_active : classes.navlink
                }
              >
                Rejected
              </NavLink>
            </NavItem>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
