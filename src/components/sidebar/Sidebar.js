/* eslint-disable react/no-array-index-key */
import React,{ useEffect,useState } from 'react';

// import ReactDOM from 'react-dom';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import classnames from 'classnames';
import PerfectScrollbar from 'react-perfect-scrollbar';

// import IntlMessages from 'helpers/IntlMessages';
import { useSelector } from 'react-redux';
import classes from '../../assets/css/cutom_css/sidebar/sidebar.module.css';
// import { useEffect } from 'react';

const Sidebar = () => {

  const [sidebarMenu,setSidebarMenu]=useState();

  const sidebarButtonPressed = useSelector(
    (state) => state.sidebarButton.sidebarButtonPressed
  );

  const userType=useSelector(
    (state)=>state.usertype.userType
  )
  const buyerSidebarMenu=useSelector((state) => state.sidebar.buyerSidebar);
  const publisherSidebarmenu=useSelector((state) => state.sidebar.publisherSidebar);



  useEffect(()=>{
    if(userType==="buyer"){
      setSidebarMenu(buyerSidebarMenu);

      console.log("buyer");
      
    }
    else if(userType==="publisher"){
      setSidebarMenu(publisherSidebarmenu);
      console.log("publisher");
    }
    else{
      console.log("error")
    }
  },[userType])
  
  
 

  return (
    // <div className="sidebar">
    //   <div
    //     // className="main-menu"
    //     className={sidebarButtonPressed ? classes.hide_slide : classes.slide}
    //   >
    //     <div className="scroll">
    //       <PerfectScrollbar
    //         options={{ suppressScrollX: true, wheelPropagation: false }}
    //       >
    //         <Nav vertical className="list-unstyled">
    //           <NavItem className={classes.navitem}>
    //             <NavLink
    //               href="#"
    //               className={(navData) =>
    //                 navData.isActive ? classes.navlink_active : classes.navlink
    //               }
    //               to="/marketer/publishers"
    //             >
    //               <i className="simple-icon-people" />
    //               Publishers
    //             </NavLink>
    //           </NavItem>
    //           <NavItem className={classes.navitem}>
    //             <NavLink href="#" className={classes.navlink}>
    //               <i className="iconsminds-data-center" />
    //               Open Offers
    //             </NavLink>
    //           </NavItem>
    //           <NavItem className={classes.navitem}>
    //             <NavLink
    //               href="#"
    //               className={(navData) =>
    //                 navData.isActive ? classes.navlink_active : classes.navlink
    //               }
    //               to="/marketer/tasks"
    //             >
    //               Task
    //             </NavLink>
    //           </NavItem>
    //           <NavItem className={classes.navitem}>
    //             <NavLink
    //               href="#"
    //               className={(navData) =>
    //                 navData.isActive ? classes.navlink_active : classes.navlink
    //               }
    //               to="/marketer/content-purchase"
    //             >
    //               <i className="iconsminds-pen" />
    //               Content Purchase
    //             </NavLink>
    //           </NavItem>
    //         </Nav>
    //       </PerfectScrollbar>
    //     </div>
    //   </div>
    // </div>
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
              {sidebarMenu && sidebarMenu.map((individualMenu) => (
                <NavItem className={classes.navitem} key={individualMenu.key}>
                  <NavLink
                    href="#"
                    className={(navData) =>
                      navData.isActive
                        ? classes.navlink_active
                        : classes.navlink
                    }
                    to={individualMenu.link}
                  >
                    <i className={individualMenu.icon} />
                    {individualMenu.name}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
