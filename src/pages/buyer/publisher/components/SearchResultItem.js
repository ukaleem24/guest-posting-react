import React from 'react';
import { Card, CardBody, Row, Col, Button, FormGroup } from 'reactstrap';
import classes from "assets/css/cutom_css/buyer/publisher/searchResultItem.module.css";

const SearchResultItem = ({item}) => {
  return (
    <Card className={classes.card}>
      <CardBody className={classes.card_body}>
        <Row className={classes.container}>
          <Col >
          <div className={classes.button_row_container}>
            <Row  className={classes.button_row}>
              
              <Col className={[classes.item_header]} sm={10}>
                <p className={classes.url}>URL is Hidden</p>
              </Col>
              <Col sm={2}   className={classes.button_col_container}>
                <div  className={classes.button_container}>
                <Button className={classes.button}>Buy Post</Button>
                </div>
              </Col>
            </Row> 
            </div> 
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
