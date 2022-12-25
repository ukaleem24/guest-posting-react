import React from 'react';

import { Button, Card, CardBody, Col,  Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import classes from 'assets/css/cutom_css/buyer/open_offer/offerBids.module.css';
// import { Separator } from 'components/common/CustomBootstrap';

const OfferDetail = () => {


  return (
    <>
      {/* <Row>
        <Col>
          <h1 className={classes['main-heading']}>Open offer #2087</h1>
        </Col>
      </Row> */}

      <Card className={classes.card}>
        <CardBody className={classes.card_body}>
          <Row>
            <Col>
              <div className={classes.button_row_container}>
                <Row className={classes.button_row}>
                  <Col xs={8} className={[classes.item_header]}>
                    <p className={classes.url}>
                      <b>Offer Brief Description</b>
                    </p>
                  </Col>
                  <Col xs={4} className={classes.button_col_container}>
                    <div className={classes['active-icon']}>
                      <FontAwesomeIcon icon={faCircle} />
                    </div>
                    <div>
                      <p className={classes.active}>Active</p>
                    </div>

                    <div>
                      <Button
                        
                        className={classes.btnn}
                      >
                        <i className="simple-icon-options" />
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className={classes['body-container']}>
          <Col md={5}>
            <Row className={classes['row-adjusting']}>
              <Col sm={5}>
                <p className={classes.heading}>
                  <b>Offer description:</b>
                </p>
                <p>1234</p>
              </Col>
              <Col sm={7}>
                <p className={classes.heading}>
                  <b>Promoted URL:</b>
                </p>
                <p>https://radiant-stroopwafel-87...</p>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Row className={classes['row-adjusting']}>
              <Col xs={6}>
                <p className={classes.heading}>
                  <b>Service type:</b>
                </p>
                <p>Content placement</p>
              </Col>

              <Col sm={6}>
                <p className={classes.heading}>
                  <b>Price:</b>
                </p>
                <p>Open Price</p>
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <div>
                <Col>
              <p className={classes.heading}>
                <b>Offer available to:</b>
              </p>
              <p>All Publishers</p>
              </Col>
            </div>
            
          </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default OfferDetail;
