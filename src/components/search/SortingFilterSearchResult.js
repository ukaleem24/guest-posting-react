import React from 'react';
import { Row, Col, FormGroup, Input, Label } from 'reactstrap';
import classes from '../../assets/css/cutom_css/SortingFilterSearchResult.module.css'



const SortingFilterSearchResult = () => {
  return (
    <Row className={classes.container}>
      <Col sm={4}>
        <h2>Search Results</h2>
      </Col>
      <Col sm={3} />

      <Col sm={5}>
        <Row className={classes.adjusting}> 
          <Col sm={5} className={classes.colAdjustment}>
            <FormGroup row>
              <Label className={classes.label} for="show">Show:</Label>
              <Col>
                <Input
                  className={classes.dropDown}
                  id="ServiceType"
                  name="select"
                  type="select"
                >
                  
                  <option>30 Per Page</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                
                </Input>
              </Col>
            </FormGroup>
          </Col>

          <Col sm={7}>
            <FormGroup row>
              <Label  className={classes.label} for="Sortby:">Sort by:</Label>
              <Col>
                <Input
                  className={classes.dropDown2}
                  id="ServiceType"
                  name="select"
                  type="select"
                >
                  <option>Best price and Completion rate</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </Col>
            </FormGroup>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SortingFilterSearchResult;