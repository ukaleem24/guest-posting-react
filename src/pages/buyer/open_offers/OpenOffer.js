import React from 'react';
import { Col, Row } from 'reactstrap';
// import Breadcrumb from 'components/breadcrumb/BreadCrumb';
import { Colxx } from 'components/common/CustomBootstrap';
import { Outlet } from 'react-router-dom';
// import NewArticle from './Components/NewArticle';
import NavBar from './components/NavBar';
import CreateOpenOffer from './components/CreateOpenOffer';
// import Offer from './components/Offer';
import classes from '../../../assets/css/cutom_css/buyer/publisher/publisher.module.css';

// import SearchBox from 'react-google-maps/lib/components/places/SearchBox';
// import SearchPublisher from './components/SearchPublisher';

// import classes from 'assets/css/cutom_css/buyer/task/task.module.css';

const OpenOffer = () => {
  return (
    <>
      {/* <Row>
        <Colxx xxs="12">
          <Breadcrumb activePage="Open Offers" />
          <Separator className="mb-5" />
        </Colxx>
      </Row> */}
      
      <Row>
        <Colxx xxs="12" className="mb-4">
          <h1 className={classes.search_label}>
            <b>Open Offers</b>
          </h1>
        </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12">
          <CreateOpenOffer />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <NavBar />
        </Colxx>
      </Row>
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </>
  );
};

export default OpenOffer;
