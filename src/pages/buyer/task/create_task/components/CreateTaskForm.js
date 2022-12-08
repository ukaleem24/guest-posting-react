import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "assets/css/cutom_css/buyer/task/create-task-form.module.css"
import { Col, Row } from 'reactstrap';

const CreateTaskForm = () => {
  return (
    <>
      <Row>
        <Col>
          <div className={classes.highlightsContainer}>
            <div className={classes.highlightsText}>
              
              <h4 className={classes['higlighted-text']}>Order a high-quality article from us!</h4>
            </div>

            <div className={classes.highlightsButton}>
              {/* <Button className={classes.btnn}>Order Article</Button> */}
              <NavLink
                className={classes.btnn}
                to="/marketer/content-purchase/order-article"
              >
                Order Article
              </NavLink>
            </div>
          </div>
        </Col>
      </Row>
      {/* /////////////////////////////////////////////////////////////////////////// */}
      
    </>
  );
};

export default CreateTaskForm;
