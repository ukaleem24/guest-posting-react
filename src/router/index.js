import React from 'react';
import {  Route, Routes } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import BuyerDashboard from 'pages/buyer/BuyerDashboard';
// import Start from "views/app/gogo/start";
import Publisher from 'pages/buyer/publisher/Publisher';
import Tasks from 'pages/buyer/task/tasks';
import ContentPurchase from 'pages/buyer/content_purchase/ContentPurchase';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* <Route path='/marketer/publishers' element={<SearchForPublishers/>} /> */}
        <Route path="/marketer" element={<BuyerDashboard />}>
          <Route path="/marketer/publishers" element={<Publisher />} />
          <Route path="/marketer/tasks" element={<Tasks/>}/>
          <Route path="/marketer/content-purchase" element={<ContentPurchase/>}/>
        </Route>
      </Routes>
    </>
  );
};
export default Router;
