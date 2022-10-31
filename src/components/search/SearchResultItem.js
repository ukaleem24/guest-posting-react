import React from 'react';
import { Card, CardBody, Row, Col, Button, FormGroup } from 'reactstrap';
import classes from '../../assets/css/cutom_css/searchResultItem.module.css';

const SearchResultItem = ({item}) => {
  return (
    <Card className={classes.card}>
      <CardBody className={classes.card_body}>
        <Row className={classes.container}>
          <Col >
            <Row >
              <Col sm={10}>
                <p className=''>URL is Hidden</p>
              </Col>
              <Col sm={2} >
                <Button className={classes.buttonColAdjustment}>Buy Post</Button>
              </Col>
            </Row>
            <Row>
              <Col sm={5}>
                <Row>
                  <Col>
                    <FormGroup row>
                      <Col>
                        <Row>
                          <Col>
                            <p className={classes.labels}>Placement:</p>
                            <p>${item.placement}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p className={classes.labels}>Mini-post:</p>
                            <p className={classes.labelsValueAdjustingMargin}>
                              ${item.Minipost}
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <Row>
                          <Col>
                            <p className={classes.labels}>Article:</p>
                            <p>${item.article}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p className={classes.labels}>Long article:</p>
                            <p className={classes.labelsValueAdjustingMargin}>
                            ${item.Longarticle}
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <Row>
                          <Col>
                            <p className={classes.labels}>DA:</p>
                            <p >
                            {item.da}
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p className={classes.labels}>DR:</p>
                            <p className={classes.labelsValueAdjustingMargin}>
                            {item.DR}
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
                            <p>{item.completionRate}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p className={classes.labels}>TAT:</p>
                            <p className={classes.labelsValueAdjustingMargin}>
                            {item.TAT}
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <Row>
                          <Col>
                            <p className={classes.labels}>Spam Score:</p>
                            <p>{item.spamScore}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p className={classes.labels}>Avg lifetime of links:</p>
                            <p className={classes.labelsValueAdjustingMargin}>
                            {item.Avglifetimeoflinks}
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <Row>
                          <Col>
                            <p className={classes.labels}>Monthly traffic:</p>
                            <p>{item.monthlyTraffic}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p className={classes.labels}>Language:</p>
                            <p className={classes.labelsValueAdjustingMargin}>
                             {item.Language}
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
                            <p> {item.links}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p className={classes.labels}>Country:</p>
                            <p className={classes.labelsValueAdjustingMargin}>
                            {item.Country}
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
  );
};
export default SearchResultItem;
