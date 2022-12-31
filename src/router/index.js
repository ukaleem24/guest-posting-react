import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import LandingPage from 'pages/LandingPage';
import BuyerDashboard from 'pages/buyer/BuyerDashboard';
// import Start from "views/app/gogo/start";
import Publisher from 'pages/buyer/publisher/Publisher';
import Tasks from 'pages/buyer/task/tasks';
import ContentPurchase from 'pages/buyer/content_purchase/ContentPurchase';
import OrderArticle from 'pages/buyer/content_purchase/order_article/OrderArticle';
import CreateTask from 'pages/buyer/task/create_task/CreateTask';
import PublisherDashboard from 'pages/publisher/PublisherDashboard';
import Websites from 'pages/publisher/my_websites/Websites';
import OpenOffers from 'pages/publisher/open_offers/OpenOffers';
import PublisherTask from 'pages/publisher/task/task';
import AddWebsite from 'pages/publisher/my_websites/components/AddWebsite';
import AddWebsiteForm from 'pages/publisher/my_websites/components/AddWebsiteForm';
import OpenOffer from 'pages/buyer/open_offers/OpenOffer';
import OpenOfferForm from 'pages/buyer/open_offers/components/OpenOfferForm';
import OfferBids from 'pages/buyer/open_offers/offer_bids/OfferBids';
import AccepteBid from 'pages/buyer/open_offers/offer_bids/components/Navbar_Options/AccepteBid';
import RejectedBid from 'pages/buyer/open_offers/offer_bids/components/Navbar_Options/RejectedBid';
import NewBid from 'pages/buyer/open_offers/offer_bids/components/Navbar_Options/NewBid';
import AllOffers from 'pages/buyer/open_offers/components/navbar_options/AllOffers';
import ActiveOffers from 'pages/buyer/open_offers/components/navbar_options/ActiveOffers';
import PausedOffers from 'pages/buyer/open_offers/components/navbar_options/PausedOffers';
import TaskDetail from 'pages/publisher/task/task_detail/TaskDetail';
import BidOffer from 'pages/publisher/open_offers/make_a_bid/BidOffer';
import AllBids from 'pages/publisher/open_offers/make_a_bid/components/Navbar_Options/AllBids';
import NewBids from 'pages/publisher/open_offers/make_a_bid/components/Navbar_Options/NewBids';
import AcceptedBids from 'pages/publisher/open_offers/make_a_bid/components/Navbar_Options/AcceptedBids';
import RejectedBids from 'pages/publisher/open_offers/make_a_bid/components/Navbar_Options/RejectedBids';
import Notification from 'pages/notification/Notification';
import UnreadNotification from 'pages/notification/components/navbar_options/UnreadNotification';
import ReadNotification from 'pages/notification/components/navbar_options/ReadNotification';
import Login from 'pages/Auth/Login';
import SignUp from 'pages/Auth/SignUp';
import Home from 'pages/landing-page/home';
import AccountSetting from 'pages/account/AccountSetting';
import Setting from 'pages/account/components/navbar-options/Setting';
import Contact from 'pages/account/components/navbar-options/Contact';
import NotificationSetting from 'pages/account/components/navbar-options/NotificationSetting';
import MyRating from 'pages/rating_review/MyRating';
// import BuyPost from 'pages/buyer/publisher/components/buy_post/BuyPost';

const Router = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account-detail" element={<AccountSetting />}>
          <Route path="/account-detail/profile" element={<Setting />} />
          <Route path="/account-detail/contact" element={<Contact />} />
          <Route path="/account-detail/notification" element={<NotificationSetting />} />
        </Route>

        {/* <Route path='/marketer/publishers' element={<SearchForPublishers/>} /> */}
        <Route path="/marketer" element={<BuyerDashboard />}>
          <Route path="/marketer/publishers" element={<Publisher />} />

          <Route path="/marketer/tasks" element={<Tasks />} />
          <Route path="/marketer/tasks/create-task" element={<CreateTask />} />
          <Route path="/marketer/offer" element={<OpenOffer />}>
            <Route index element={<AllOffers />} />
            <Route path="/marketer/offer/all" element={<AllOffers />} />
            <Route path="/marketer/offer/active" element={<ActiveOffers />} />
            <Route path="/marketer/offer/paused" element={<PausedOffers />} />
          </Route>
          <Route path="/marketer/offer/view" element={<OfferBids />}>
            <Route path="/marketer/offer/view/new-bid" element={<NewBid />} />
            <Route
              path="/marketer/offer/view/accepted-bid"
              element={<AccepteBid />}
            />
            <Route
              path="/marketer/offer/view/rejected-bid"
              element={<RejectedBid />}
            />
          </Route>

          <Route path="/marketer/offer/create" element={<OpenOfferForm />} />
          <Route
            path="/marketer/content-purchase"
            element={<ContentPurchase />}
          />
          <Route
            path="/marketer/content-purchase/order-article"
            element={<OrderArticle />}
          />
        </Route>
        <Route path="/publisher" element={<PublisherDashboard />}>
          <Route path="/publisher/platform" element={<Websites />} />
          <Route path="/publisher/rating" element={<MyRating />} />
          <Route
            path="/publisher/platform/add-website"
            element={<AddWebsite />}
          />
          <Route
            path="/publisher/platform/add-website-detail"
            element={<AddWebsiteForm />}
          />
          <Route path="/publisher/offer" element={<OpenOffers />} />
          <Route path="/publisher/offer/view/1234" element={<BidOffer />}>
            <Route
              path="/publisher/offer/view/1234/all"
              element={<AllBids />}
            />
            <Route
              path="/publisher/offer/view/1234/new"
              element={<NewBids />}
            />
            <Route
              path="/publisher/offer/view/1234/accepted"
              element={<AcceptedBids />}
            />
            <Route
              path="/publisher/offer/view/1234/rejected"
              element={<RejectedBids />}
            />
          </Route>
          <Route path="/publisher/task" element={<PublisherTask />} />
          <Route path="/publisher/task/view/1234" element={<TaskDetail />} />
        </Route>

        {/* </Route> */}
        <Route path="/event" element={<Notification />}>
          <Route path="/event/unread" element={<UnreadNotification />} />
          <Route path="/event/read" element={<ReadNotification />} />
        </Route>
      </Routes>
    </>
  );
};
export default Router;
