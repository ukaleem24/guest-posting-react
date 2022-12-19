import React from 'react';
import { Card, CardBody, Row, Col, FormGroup } from 'reactstrap';
import classes from 'assets/css/cutom_css/buyer/open_offer/offerBidItem.module.css';
import { NavLink } from 'react-router-dom';

const OfferBidItem = () => {
  return (
    <Card className={classes.card}>
      <CardBody className={classes.card_body}>
        <Row className={classes.container}>
          <Col>
            <div className={classes.button_row_container}>
              <Row className={classes.button_row}>
                <Col className={[classes.item_header]} sm={4}>
                  <p className={classes.url}>URL is Hidden</p>
                </Col>
                <Col sm={8} className={classes.button_col_container}>
                  <div className={classes.button_container}>
                    <NavLink
                      className={classes.btnn}
                    
                    >
                      Accept
                    </NavLink>
                    <NavLink
                      className={classes.btnn}
                      
                    >
                      Reject
                    </NavLink>
                  </div>
                </Col>
              </Row>
            </div>
            <Row className={classes['card-body-conatainer']}>
              <Col sm={5}>
                <Row>
                  <Col>
                    <FormGroup row>
                      <Col>
                        <Row>
                          <Col>
                            <p className={classes.labels}>Placement:</p>
                            <p>$34</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p className={classes.labels}>Mini-post:</p>
                            <p className={classes.labelsValueAdjustingMargin}>
                              $67
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <Row>
                          <Col>
                            <p className={classes.labels}>Article:</p>
                            <p>$67</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p className={classes.labels}>Long article:</p>
                            <p className={classes.labelsValueAdjustingMargin}>
                              $56
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <Row>
                          <Col>
                            <p className={classes.labels}>DA:</p>
                            <p>40</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p className={classes.labels}>DR:</p>
                            <p className={classes.labelsValueAdjustingMargin}>
                             50
                            </p>
                          </Col>
                        </Row>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
              <Col sm={5}>
                <Row>
                  <Col>
                    <FormGroup row>
                      <Col>
                        <Row>
                          <Col>
                            <p className={classes.labels}>Completion rate:</p>
                            <p>upto 70</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p className={classes.labels}>TAT:</p>
                            <p className={classes.labelsValueAdjustingMargin}>
                              upto 1 day
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <Row>
                          <Col>
                            <p className={classes.labels}>Spam Score:</p>
                            <p>N/A</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p className={classes.labels}>
                              Avg lifetime of links:
                            </p>
                            <p className={classes.labelsValueAdjustingMargin}>
                              Up to 100.00%
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <Row>
                          <Col>
                            <p className={classes.labels}>Monthly traffic:</p>
                            <p>3345</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p className={classes.labels}>Language:</p>
                            <p className={classes.labelsValueAdjustingMargin}>
                              English
                            </p>
                          </Col>
                        </Row>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
              <Col sm={2}>
                <Row>
                  <Col>
                    <FormGroup row>
                      <Col>
                        <Row>
                          <Col>
                            <p className={classes.labels}>Links:</p>
                            <p>Dofollow</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p className={classes.labels}>Country:</p>
                            <p className={classes.labelsValueAdjustingMargin}>
                              USA
                            </p>
                          </Col>
                        </Row>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default OfferBidItem