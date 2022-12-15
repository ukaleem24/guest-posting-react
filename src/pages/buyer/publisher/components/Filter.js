import React from 'react';

import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  Label,
  Form,
  FormGroup,
  Button,
} from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';
// import classNames from 'classnames';
import classes from "../../../../assets/css/cutom_css/buyer/publisher/searchpageFilter.module.css"


const Filter = () => {
  return (
    <Colxx xxs="12" className="mb-4">
      <Card className={classes.card_Constainer}>
        <CardBody>
          <Form>
            <Row>
              <Colxx>
                {/* //First Row */}
                <Row>
                  <Col sm={3}>
                    <Label className={classes.label} for="PriceRange">
                      Price Range
                    </Label>
                    <FormGroup row>
                      <Col>
                        <Input
                          className={classes.inputTypeText}
                          id="PriceRange"
                          type="text"
                        />
                      </Col>

                      <Col>
                        <Input className={classes.inputTypeText} type="text" />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col sm={3}>
                    <Label className={classes.label} for="DARange">
                      DA Range
                    </Label>
                    <FormGroup row>
                      <Col>
                        <Input
                          className={classes.inputTypeText}
                          id="DARange"
                          type="text"
                        />
                      </Col>

                      <Col>
                        <Input className={classes.inputTypeText} type="text" />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col sm={3}>
                    <Label className={classes.label} for="DRRange">
                      DR Range
                    </Label>
                    <FormGroup row>
                      <Col>
                        <Input
                         className={classes.inputTypeText}
                          id="DRRange"
                          type="text"
                        />
                      </Col>

                      <Col>
                        <Input className={classes.inputTypeText} type="text" />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col sm={3}>
                    <Label className={classes.label} for="SpamScore ">
                      Spam Score{' '}
                    </Label>
                    <FormGroup row>
                      <Col>
                        <Input
                          className={classes.inputTypeText}
                          id="SpamScore"
                          type="text"
                        />
                      </Col>

                      <Col>
                        <Input className={classes.inputTypeText} type="text" />
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                {/* 2nd Row */}
                <Row>
                  <Col sm={3}>
                    <Label className={classes.label} for="ServiceType">
                      Service type
                    </Label>
                    <Input
                      className={classes.inputTypeDropDown}
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
                  <Col sm={3}>
                    <Label className={classes.label} for="MonthlyTraffic">
                      Monthly traffic
                    </Label>
                    <Input
                      className={classes.inputTypeDropDown}
                      id="MonthlyTraffic"
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
                  <Col sm={3}>
                    <Label className={classes.label} for="Links ">
                      Links{' '}
                    </Label>
                    <Input
                      className={classes.inputTypeDropDown}
                      id="Links "
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
                  <Col sm={3}>
                    <Label className={classes.label} for="Country ">
                      Country{' '}
                    </Label>
                    <Input
                      className={classes.inputTypeDropDown}
                      id="Country "
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
                </Row>
                {/* 3rd Row */}
                <Row>
                  <Col sm={3}>
                    <Label className={classes.label} for="Language ">
                      Language{' '}
                    </Label>
                    <Input
                      className={classes.inputTypeDropDown}
                      id="Language "
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
                  <Col sm={3}>
                    <Label className={classes.label} for="Categories ">
                      Categories{' '}
                    </Label>
                    <Input
                      className={classes.inputTypeDropDown}
                      id="Categories "
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
                  <Col sm={3}>
                    <Label className={classes.label} for="MarkedSponsoredby">
                      Marked “Sponsored by”{' '}
                    </Label>
                    <Input
                      className={classes.inputTypeDropDown}
                      id="MarkedSponsoredby"
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
                  <Col sm={3}>
                    <Label className={classes.label} for="SurfacingInGoogleNews ">
                      Surfacing in Google News{' '}
                    </Label>
                    <Input
                      className={classes.inputTypeDropDown}
                      id="SurfacingInGoogleNews"
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
                </Row>
                {/* 4th Row */}
                <Row>
                  <Col sm={3}>
                    <Label className={classes.label} for="addedDate">
                      Added to Guest Posting Website
                    </Label>
                    <Input
                      className={classes.inputTypeDropDown}
                      id="addedDate"
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
                  <Col sm={3}>
                    <Label className={classes.label} for="PublisherCompletionRate">
                      Publisher’s completion rate
                    </Label>
                    <Input
                      className={classes.inputTypeDropDown}
                      id="PublisherCompletionRate"
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
                  <Col sm={3}>
                    <Label className={classes.label} for="PublisherTAT">
                      Publisher’s TAT
                    </Label>
                    <Input
                      className={classes.inputTypeDropDown}
                      id="PublisherTAT"
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
                  <Col sm={3}>
                    <Label className={classes.label} for="PublisherRating ">
                      Publisher’s rating{' '}
                    </Label>
                    <Input
                      className={classes.inputTypeDropDown}
                      id="PublisherRating"
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
                </Row>
                {/* 5th Row */}
                <Row>
                  <Col sm={3}>
                    <Label className={classes.label} for="Avglifetimeoflinks">
                      Avg lifetime of links
                    </Label>
                    <Input
                      className={classes.inputTypeDropDown}
                      id="Avglifetimeoflinks"
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
                  <Col sm={3}>
                    <Label className={classes.label} for="SecurityDeposit">
                      Security deposit
                    </Label>
                    <Input
                      className={classes.inputTypeDropDown}
                      id="SecurityDeposit"
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
                </Row>
                {/* Filter Button Row */}
                <Row>
                  <Col>
                    <Button>Apply filter</Button>
                  </Col>
                </Row>
              </Colxx>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Colxx>
  );
};
export default Filter;
