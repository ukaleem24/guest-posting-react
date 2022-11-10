import React from 'react';
// import { useNavigate } from "react-router-dom";

import TopNav from 'containers/navs/Topnav';
// import Sidebar from 'containers/navs/Sidebar';
import Footer from 'containers/navs/Footer';
import Sidebar from 'components/search/testing';
// import classes from './cheking.module.css';




const SearchForPublishers = () => {
  // const AppLayout = ({  children, history }) => {

//   const history=useNavigate();
  return (
    <div id="app-container" >
      <TopNav  />
      <Sidebar />
      
      <Footer />
    </div>
    // <div id="app-container" >
    //   <TopNav history={history} />
    //   <Sidebar />
    //   <div>
    //     <div className={classes.container}>{children}</div>
    //   </div>
    //   <Footer />
    // </div>
  );
};

export default SearchForPublishers;




  
