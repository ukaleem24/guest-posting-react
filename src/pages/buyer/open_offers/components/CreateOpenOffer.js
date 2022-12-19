import React from 'react';
import classes from 'assets/css/cutom_css/buyer/content_purchase/content-purchase.module.css';
import {  Col, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const CreateOpenOffer = () => {
  return (
    <>
      <Row>
        <Col >
          <div className={classes.highlightsContainer}>
            <div className={classes.highlightsText}>
              <h4 className={classes['higlighted-text']}>Want to create a new offer?</h4>
            </div>

            <div className={classes.highlightsButton}>
           
              {/* <Button className={classes.btnn}>Order Article</Button> */}
              <NavLink className={classes.btnn} to="/marketer/offer/create">Create Open Offer</NavLink>
            </div>
          </div>
        </Col>
        
      </Row>
    </>
  );
};

export default CreateOpenOffer;
