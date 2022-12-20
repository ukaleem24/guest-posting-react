// import BreadCrumb from 'components/breadcrumb/BreadCrumb';
// import { Colxx, Separator } from 'components/common/CustomBootstrap';
import React from 'react';
// import { Outlet } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
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
        <Col>
          <OfferDetail />
        </Col>
      </Row>
      <Row>
        <Col>
          <MakeBid />
        </Col>
      </Row>
      <Row>
        <Col>
          <NavBar />
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





export default BidOffer