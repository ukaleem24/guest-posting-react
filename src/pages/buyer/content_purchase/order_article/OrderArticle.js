import React from 'react';
import { Col, Row } from 'reactstrap';
// import Breadcrumb from 'components/breadcrumb/BreadCrumb';
import { Colxx } from 'components/common/CustomBootstrap';
import classes from 'assets/css/cutom_css/buyer/publisher/publisher.module.css';

import OrderArticleForm from './components/OrderArticleForm';



const OrderArticle = () => {

    // const breadCrumbDetail=[
    //     {
    //         pageName:"Content Purchase",
    //         link:"/marketer/content-purchase"
    //     }
    // ]


  return (
    <>
      {/* <Row>
        <Colxx xxs="12">
          <Breadcrumb activePage="Content purchase" previousPages={breadCrumbDetail} />
          <Separator className="mb-5" />
        </Colxx>
      </Row> */}
      <Row>
        <Colxx xxs="12" className="mb-4">
          <h1 className={classes.search_label}>
            <b>Content Purchase</b>
          </h1>
        </Colxx>
      </Row>
      <Row>
        <Col>
        <OrderArticleForm/>
        </Col>
      </Row>
      
    </>
  )
}

export default OrderArticle