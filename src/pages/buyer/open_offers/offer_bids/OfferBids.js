// import BreadCrumb from 'components/breadcrumb/BreadCrumb';
// import { Colxx, Separator } from 'components/common/CustomBootstrap';
import { Colxx } from 'components/common/CustomBootstrap';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import classes from 'assets/css/cutom_css/buyer/publisher/publisher.module.css';

import NavBar from './components/NavBar';
// import OfferBidItem from './components/OfferBidItem';
import OfferDetail from './components/OfferDetail';
import SearchResult from './components/SearchResult';


const OfferBids = () => {
  return (
    <>
      {/* <Row>
        <Colxx xxs="12">
          <BreadCrumb activePage="Open Offers" />
          <Separator className="mb-5" />
        </Colxx>
      </Row> */}
      <Row>
        <Colxx xxs="12" className="mb-4">
          <h1 className={classes.search_label}>
            <b>Open Offer #2087</b>
          </h1>
        </Colxx>
      </Row>
      <Row>
        <Col>
          <OfferDetail />
        </Col>
      </Row>
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Row>
        <Col>
          <SearchResult />
        </Col>
      </Row>
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </>
  );
};

export default OfferBids;
