import React from 'react';
import {  Route, Routes } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import BuyerDashboard from 'pages/buyer/BuyerDashboard';
// import Start from "views/app/gogo/start";
import Publisher from 'pages/buyer/publisher/Publisher';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* <Route path='/marketer/publishers' element={<SearchForPublishers/>} /> */}
        <Route path="/marketer" element={<BuyerDashboard />}>
          <Route path="/marketer/publishers" element={<Publisher />} />
        </Route>
      </Routes>
    </>
  );
};
export default Router;
