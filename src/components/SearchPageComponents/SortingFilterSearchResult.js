import React from 'react';
import { Row, Col, FormGroup, Input, Label } from 'reactstrap';
import classes from '../../assets/css/cutom_css/SortingFilterSearchResult.module.css'



const SortingFilterSearchResult = () => {
  return (
    <Row className={classes.container}>
      <Col sm={4}>
        <h2>Search Results</h2>
      </Col>
      <Col sm={4} />

      <Col sm={4}>
        <Row>
          <Col sm={6}>
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

          <Col sm={6}>
            <FormGroup row>
              <Label for="Sortby:">Sort by:</Label>
              <Col>
                <Input
                  // className={classes.inputTypeDropDown}
                  id="ServiceType"
                  name="select"
                  type="select"
                >
                  <option>1</option>
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