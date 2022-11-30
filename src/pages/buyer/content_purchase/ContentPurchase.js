import React from 'react';
import { Row } from 'reactstrap';
import Breadcrumb from 'components/breadcrumb/BreadCrumb';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import NewArticle from './Components/NewArticle';
import NavBar from './Components/NavBar';
// import SearchBox from 'react-google-maps/lib/components/places/SearchBox';
// import SearchPublisher from './components/SearchPublisher';


// import classes from 'assets/css/cutom_css/buyer/task/task.module.css';

const ContentPurchase = () => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb activePage="Content purchase" />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <NewArticle />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <NavBar />
        </Colxx>
      </Row>
    </>
  );
};

export default ContentPurchase;
