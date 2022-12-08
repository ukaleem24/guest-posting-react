import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import BuyerDashboard from 'pages/buyer/BuyerDashboard';
// import Start from "views/app/gogo/start";
import Publisher from 'pages/buyer/publisher/Publisher';
import Tasks from 'pages/buyer/task/tasks';
import ContentPurchase from 'pages/buyer/content_purchase/ContentPurchase';
import OrderArticle from 'pages/buyer/content_purchase/order_article/OrderArticle';
import CreateTask from 'pages/buyer/task/create_task/CreateTask';
// import BuyPost from 'pages/buyer/publisher/components/buy_post/BuyPost';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* <Route path='/marketer/publishers' element={<SearchForPublishers/>} /> */}
        <Route path="/marketer" element={<BuyerDashboard />}>
          <Route path="/marketer/publishers" element={<Publisher />} />

          <Route path="/marketer/tasks" element={<Tasks />} />
          <Route path="/marketer/tasks/create-task" element={<CreateTask />} />

          <Route
            path="/marketer/content-purchase"
            element={<ContentPurchase />}
          />
          <Route
            path="/marketer/content-purchase/order-article"
            element={<OrderArticle />}
          />
        </Route>
      </Routes>
    </>
  );
};
export default Router;
