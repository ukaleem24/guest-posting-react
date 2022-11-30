import React from 'react';
import classes from 'assets/css/cutom_css/buyer/task/task.module.css';
import { Button, Col, Row } from 'reactstrap';

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
              <Button className={classes.btnn}>Order Article</Button>
            </div>
          </div>
        </Col>
        
      </Row>
    </>
  );
};

export default NewArticle;
