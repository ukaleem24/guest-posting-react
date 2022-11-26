import React from 'react';
import { Row, Col } from 'reactstrap';

import { Colxx, Separator } from 'components/common/CustomBootstrap';

import Breadcrumb from 'components/breadcrumb/BreadCrumb';

import Filter from './components/Filter';
import NavBarSearchResults from './components/NavSearchResult';
// import SortingFilterSearchResult from './components/SortingFilterSearchResult';
import SearchResultList from './components/SearchResultList';
// import Pagination from './components/Pagination';
// import classNames from 'classnames';
import classes from '../../../assets/css/cutom_css/buyer/publisher/publisher.module.css';


// import { NavLink } from 'react-router-dom';

// import DatePickerExamples from '../../../containers/forms/DatePickerExamples';

const Publisher = () => (
  <>
    <Row>
      <Colxx xxs="12">
        <Breadcrumb activePage="Publisher" />
        <Separator className="mb-5" />
      </Colxx>
    </Row>
    <Row>
      <Colxx xxs="12" className="mb-4">
        <h1 className={classes.search_label}>Search for verified publishers</h1>
      </Colxx>
    </Row>
    <Row>
      <Filter />
    </Row>
    <Row>
      <Col>
        <NavBarSearchResults />
      </Col>
    </Row>
    {/* SearchREsultMini Filter */}
    {/* <Row>
      <Col>
        <SortingFilterSearchResult />
      </Col>
    </Row> */}
    <Row>
      <Col>
        <SearchResultList />
      </Col>
    </Row>
    
  </>
);
export default Publisher;
