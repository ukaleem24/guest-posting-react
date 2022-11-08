import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TopNav from 'containers/navs/Topnav';
import Sidebar from 'containers/navs/Sidebar';
import Footer from 'containers/navs/Footer';
// import Sidebar from 'components/search/testing';
// import classes from './cheking.module.css';


const AppLayout = ({ containerClassnames, children, history }) => {
  // const AppLayout = ({  children, history }) => {
  return (
    <div id="app-container" className={containerClassnames}>
      <TopNav history={history} />
      <Sidebar />
      <main>
        <div className="container-fluid">{children}</div>
      </main>
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
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};
const mapActionToProps = {};

export default withRouter(
  connect(mapStateToProps, mapActionToProps)(AppLayout)
);
