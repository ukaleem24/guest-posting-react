import BreadCrumb from 'components/breadcrumb/BreadCrumb';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import React from 'react';
import { Col, Row } from 'reactstrap';
import AddWebsiteHeaadline from './components/AddWebsiteHeaadline';
import NavBar from './components/NavBar';
// import WebsiteDetailItem from './components/WebsiteDetailItem';
import WebsiteDetailList from './components/WebsiteDetailList';

const Websites = () => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <BreadCrumb activePage="My platforms"  />
          <Separator  className="mb-5" />
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
