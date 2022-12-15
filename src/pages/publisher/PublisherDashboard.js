import React from 'react';
// import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import TopNav from 'containers/navs/Topnav';
// import Sidebar from 'containers/navs/Sidebar';
import Footer from 'containers/navs/Footer';
// import Sidebar from 'components/search/testing';
// import Start from 'views/app/gogo/start';
import Sidebar from 'components/sidebar/Sidebar';

import classes from "../../assets/css/cutom_css/buyer/dashboard/dashboard.module.css"






const PublisherDashboard = () => {


  const sidebarButtonPressed = useSelector(
    (state) => state.sidebarButton.sidebarButtonPressed
  ); 
  // const AppLayout = ({  children, history }) => {

//   const history=useNavigate();
  return (
    <div id="app-container" >
      <TopNav  />
      <Sidebar userType="publisher" />
      <div className={sidebarButtonPressed?classes.dashboard_full_content_container:classes.dashboard_half_content_container}>
      {/* <Start/> */}
      <Outlet/>
      </div>
      <Footer />
    </div>
    
  );
};

export default PublisherDashboard;




  
