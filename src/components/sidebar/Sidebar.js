/* eslint-disable react/no-array-index-key */
import React from 'react';

// import ReactDOM from 'react-dom';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import classnames from 'classnames';
import PerfectScrollbar from 'react-perfect-scrollbar';

// import IntlMessages from 'helpers/IntlMessages';
import { useSelector } from 'react-redux';
import classes from '../../assets/css/cutom_css/sidebar/sidebar.module.css';

const Sidebar = () => {
  const sidebarButtonPressed = useSelector(
    (state) => state.sidebarButtonPressed
  );

  return (
    <div className="sidebar">
      <div
        // className="main-menu"
        className={sidebarButtonPressed ? classes.hide_slide : classes.slide}
      >
        <div className="scroll">
          <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }}
          >
            <Nav vertical className="list-unstyled">
              <NavItem className={classes.navitem}>
                <NavLink
                  href="#"
                  className={(navData)=> navData.isActive?classes.navlink_active:classes.navlink }
                  to="/marketer/publishers"
                >
                  <i className="simple-icon-people" />
                  Publishers
                </NavLink>
              </NavItem>
              <NavItem className={classes.navitem}>
                <NavLink href="#" className={classes.navlink}>
                  <i className="iconsminds-data-center" />
                  Open Offers
                </NavLink>
              </NavItem>
              <NavItem className={classes.navitem}>
                <NavLink href="#" className={classes.navlink}>
                  Task
                </NavLink>
              </NavItem>
              <NavItem className={classes.navitem}>
                <NavLink href="#" className={classes.navlink}>
                  <i className="iconsminds-pen" />
                  Content Purchase
                </NavLink>
              </NavItem>
            </Nav>
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
