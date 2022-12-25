// import BreadCrumb from 'components/breadcrumb/BreadCrumb';
import { Colxx } from 'components/common/CustomBootstrap';
import React from 'react';
import { Col, Row } from 'reactstrap';
import classes from '../../../assets/css/cutom_css/buyer/publisher/publisher.module.css';

import AddWebsiteHeaadline from './components/AddWebsiteHeaadline';
import NavBar from './components/NavBar';
// import WebsiteDetailItem from './components/WebsiteDetailItem';
import WebsiteDetailList from './components/WebsiteDetailList';

const Websites = () => {
  return (
    <>
      {/* <Row>
        <Colxx xxs="12">
          <BreadCrumb activePage="My platforms"  />
          <Separator  className="mb-5" />
        </Colxx>
      </Row> */}
      <Row>
        <Colxx xxs="12" className="mb-4">
          <h1 className={classes.search_label}>
            <b>My platforms</b>
          </h1>
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <AddWebsiteHeaadline/>
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <NavBar/>
        </Colxx>
      </Row>
      <Row>
        <Col>
          <WebsiteDetailList/>
        </Col>
      </Row>

    </>
  );
};

export default Websites;
