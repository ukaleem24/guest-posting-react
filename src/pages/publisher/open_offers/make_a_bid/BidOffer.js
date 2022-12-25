// import BreadCrumb from 'components/breadcrumb/BreadCrumb';
// import { Colxx, Separator } from 'components/common/CustomBootstrap';
import { Colxx } from 'components/common/CustomBootstrap';
import React from 'react';
import { Outlet } from 'react-router-dom';

// import { Outlet } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import classes from 'assets/css/cutom_css/buyer/publisher/publisher.module.css';

import MakeBid from './components/MakeBid';
import NavBar from './components/NavBar';
// import OfferBidItem from './components/OfferBidItem';
import OfferDetail from './components/OfferDetail';
// import SearchResult from './components/SearchResult';

const BidOffer = () => {
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
            <b>Open offer #2087</b>
          </h1>
        </Colxx>
      </Row>
      <Row>
        <Col>
          <OfferDetail />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <MakeBid />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className={classes.heading}>Your bids</h2>
        </Col>
      </Row>
      <Row className='mb-4'>
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>

      {/* <Row>
        <Col>
          <SearchResult />
        </Col>
      </Row> */}
      {/* <Row>
        <Col>
          <Outlet />
        </Col>
      </Row> */}
    </>
  );
};

export default BidOffer;
