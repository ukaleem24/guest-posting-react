/* eslint-disable react/no-array-index-key */
import React  from 'react';


// import ReactDOM from 'react-dom';
import {  Nav, NavItem,NavLink } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
// import classnames from 'classnames';
import PerfectScrollbar from 'react-perfect-scrollbar';

// import IntlMessages from 'helpers/IntlMessages';
import { useSelector } from 'react-redux';
import classes from "./testing.module.css"





const Sidebar =()=>{

  const sidebarButtonPressed=useSelector((state)=>state.sidebarButtonPressed);



 

    return (
      <div className="sidebar">
        <div className={sidebarButtonPressed ?classes.hide_slide:classes.slide}>
          {/* <div className="scroll"> */}
            <PerfectScrollbar
              options={{ suppressScrollX: true, wheelPropagation: false }}
            >
              <Nav vertical className="list-unstyled">
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#">
                    Disabled Link
                  </NavLink>
                </NavItem>
                
              </Nav>
            </PerfectScrollbar>
          {/* </div> */}
        </div>

        </div>
    );
}


export default Sidebar 