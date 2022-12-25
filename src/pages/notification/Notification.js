import React from 'react';
// import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
// import { Outlet } from 'react-router-dom';

import TopNav from 'containers/navs/Topnav';
// import Sidebar from 'containers/navs/Sidebar';
import Footer from 'containers/navs/Footer';
// import Sidebar from 'components/search/testing';
// import Start from 'views/app/gogo/start';
import Sidebar from 'components/sidebar/Sidebar';
import { Row } from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';
import { Outlet } from 'react-router-dom';
import classes from 'assets/css/cutom_css/buyer/dashboard/dashboard.module.css';
import NavBar from './components/NavBar';


const Notification = () => {
  const sidebarButtonPressed = useSelector(
    (state) => state.sidebarButton.sidebarButtonPressed
  );

  const userType = useSelector((state) => state.usertype.userType);
  // const AppLayout = ({  children, history }) => {

  //   const history=useNavigate();
  return (
    <div id="app-container">
      <TopNav />
      <Sidebar userType={userType} />
      <div
        className={
          sidebarButtonPressed
            ? classes.dashboard_full_content_container
            : classes.dashboard_half_content_container
        }
      >
        {/* <Start/> */}
        <Row>
          <Colxx xxs="12" >
            <h1 className={classes['page-main-heading']}>
              <b>Notifications</b>
            </h1>
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12" className="mb-4">
            <NavBar/>
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12" className="mb-4">
            <Outlet/>
          </Colxx>
        </Row>
        
      </div>
      <Footer />
    </div>
  );
};

export default Notification;
