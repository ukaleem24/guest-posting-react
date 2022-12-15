import BreadCrumb from 'components/breadcrumb/BreadCrumb';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import React from 'react';
import { Row } from 'reactstrap';
// import Help from './components/Help';

const task = () => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <BreadCrumb activePage="Tasks" mainpage="mainpage" />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      {/* <Row>
        <Colxx xxs="12">
          <Help/>
        </Colxx>
      </Row> */}
    </>
  );
};

export default task;
