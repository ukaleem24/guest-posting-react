import React from 'react';
import classes from 'assets/css/cutom_css/buyer/task/task.module.css';
import { Button, Col, Row } from 'reactstrap';

const SearchPublisher = () => {
  return (
    <>
      <Row>
        <Col sm={6}>
          <div className={classes.highlightsContainer}>
            <div className={classes.highlightsText}>
              <h4 className={classes['higlighted-text']}>Want to place more tasks?</h4>
            </div>

            <div className={classes.highlightsButton}>
              <Button className={classes.btnn}>Search for Publishers</Button>
            </div>
          </div>
        </Col>
        <Col sm={6}>
          <div className={classes.highlightsContainer}>
            <div className={classes.highlightsText}>
              <h4 className={classes['higlighted-text']}>Can&apos;t find the relevant website?</h4>
            </div>

            <div className={classes.highlightsButton}>
              <Button className={classes.btnn}>Place customized Order</Button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SearchPublisher;
