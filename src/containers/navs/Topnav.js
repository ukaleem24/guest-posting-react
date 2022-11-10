/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
import React from 'react';
// import { injectIntl } from 'react-intl';

import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Input,
} from 'reactstrap';

import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';

// import {
//   setContainerClassnames,
//   clickOnMobileMenu,
//   changeLocale,
// } from 'redux/actions';

import {
  // menuHiddenBreakpoint,
  // searchPath,
  // localeOptions,
  // isDarkSwitchActive,
  // adminRoot,
} from 'constants/defaultValues';

import { MobileMenuIcon, MenuIcon } from 'components/svg';
// import { getDirection, setDirection } from 'helpers/Utils';
// import TopnavEasyAccess from './Topnav.EasyAccess';
// import TopnavNotifications from './Topnav.Notifications';
// import TopnavDarkSwitch from './Topnav.DarkSwitch';

const TopNav = () => {
  
  return (
    <nav className="navbar fixed-top">
      <div className="d-flex align-items-center navbar-left">
        <NavLink
          to="#"
          location={{}}
          className="menu-button d-none d-md-block"
         
        >
          <MenuIcon />
        </NavLink>
        <NavLink
          to="#"
          location={{}}
          className="menu-button-mobile d-xs-block d-sm-block d-md-none"
          
        >
          <MobileMenuIcon />
        </NavLink>

        <div className="search">
          <Input
            name="searchKeyword"
            id="searchKeyword"
            placeholder='search'
          
            
          />
          <span
            className="search-icon"
            
          >
            <i className="simple-icon-magnifier" />
          </span>
        </div>

        <div className="d-inline-block">
          <UncontrolledDropdown className="ml-2">
            <DropdownToggle
              caret
              color="light"
              size="sm"
              className="language-button"
            >
              <span className="name">{"locale".toUpperCase()}</span>
            </DropdownToggle>
            <DropdownMenu className="mt-3" right>
              {[1,2,3,4,5].map((l) => {
                return (
                  <DropdownItem
                   
                    key={l}
                  >
                    {l}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
      <NavLink className="navbar-logo" to="#">
        <span className="logo d-none d-xs-block" />
        <span className="logo-mobile d-block d-xs-none" />
      </NavLink>

      <div className="navbar-right">
        {/* {isDarkSwitchActive && <TopnavDarkSwitch />}
        <div className="header-icons d-inline-block align-middle">
          <TopnavEasyAccess />
          <TopnavNotifications />
          <button
            className="header-icon btn btn-empty d-none d-sm-inline-block"
            type="button"
            id="fullScreenButton"
            
          >
            {false ? (
              <i className="simple-icon-size-actual d-block" />
            ) : (
              <i className="simple-icon-size-fullscreen d-block" />
            )}
          </button>
        </div> */}
        <div className="user d-inline-block">
          <UncontrolledDropdown className="dropdown-menu-right">
            <DropdownToggle className="p-0" color="empty">
              <span className="name mr-1">Sarah Kortney</span>
              <span>
                <img alt="Profile" src="/assets/img/profiles/l-1.jpg" />
              </span>
            </DropdownToggle>
            <DropdownMenu className="mt-3" right>
              <DropdownItem>Account</DropdownItem>
              <DropdownItem>Features</DropdownItem>
              <DropdownItem>History</DropdownItem>
              <DropdownItem>Support</DropdownItem>
              <DropdownItem divider />
              <DropdownItem >
                Sign out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    </nav>
  );
};


export default TopNav
