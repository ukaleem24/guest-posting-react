import React from 'react';
import classes from 'assets/css/cutom_css/buyer/content_purchase/content-purchase.module.css';
import {  Col, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const NewArticle = () => {
  return (
    <>
      <Row>
        <Col >
          <div className={classes.highlightsContainer}>
            <div className={classes.highlightsText}>
              <h4>Want to order a new article?</h4>
            </div>

            <div className={classes.highlightsButton}>
           
              {/* <Button className={classes.btnn}>Order Article</Button> */}
              <NavLink className={classes.btnn} to="/marketer/content-purchase/order-article">Order Article</NavLink>
            </div>
          </div>
        </Col>
        
      </Row>
    </>
  );
};

export default NewArticle;
