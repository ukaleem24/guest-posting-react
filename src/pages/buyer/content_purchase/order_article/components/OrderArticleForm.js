import React from 'react';
// import { Row } from 'reactstrap'
import classes from 'assets/css/cutom_css/buyer/content_purchase/order-article-form.module.css';
import { Row, Col, Card, CardBody } from 'reactstrap';

const OrderArticleForm = () => {
  return (
    <>
      <Card className={classes['card-Constainer']}>
        <CardBody>
        <h6>Word Count *</h6>
        <p>Set your desired length for the article. Keep in mind that it will directly impact the final price.</p>
        <Row>
          <Col className={classes['word-count-container']}  xs="auto">
            <h6 className={classes['word-count-item']}>500 words</h6>
            <h6 className={classes['word-count-item']}>1000 words</h6>
            <h6 className={classes['word-count-item']}>1500 words</h6>
            <h6 className={classes['word-count-item']}>2000 words</h6>
            {/* <h6 className={classes['word-count-item']}>2500 words</h6> */}
          </Col>
          <Col>
          <p>Set your desired length for the article. Keep in mind that it will directly impact the final price.</p>
          </Col>
          </Row>
          </CardBody>
      </Card>
    </>
  );
};

export default OrderArticleForm;
