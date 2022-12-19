import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Card, CardBody, Col, Collapse, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import classes from 'assets/css/cutom_css/buyer/open_offer/offerBids.module.css';
// import { Separator } from 'components/common/CustomBootstrap';

const OfferDetail = () => {
  const [showDetail, setShowDetail] = useState(false);

  const offerDetailHandler = () => {
    setShowDetail((previousState) => !previousState);
  };
  return (
    <>
      <Row>
        <Col>
          <h1 className={classes['main-heading']}>Open offer #2087</h1>
        </Col>
      </Row>

      <Card className={classes.card}>
        <CardBody className={classes.card_body}>
          <Row>
            <Col>
              <div className={classes.button_row_container}>
                <Row className={classes.button_row}>
                  <Col xs={8} className={[classes.item_header]}>
                    <p className={classes.url}>
                      <b>Offer name :</b> Checking
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
                      <NavLink className={classes.btnn}>
                        <i className="simple-icon-power" />
                      </NavLink>
                    </div>
                    <div>
                      <NavLink className={classes.btnn}>
                        <i className="simple-icon-pencil" />
                      </NavLink>
                    </div>
                    <div>
                      <Button
                        onClick={offerDetailHandler}
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
          <Collapse isOpen={showDetail}>
            <Row className={classes['body-container']}>
              <Col md={7}>
                <Row className={classes['row-adjusting']}>
                  <Col xs={3}>
                    <p className={classes.heading}>
                      <b>Offer Id:</b>
                    </p>
                    <p>1234</p>
                  </Col>
                  <Col xs={5}>
                    <p className={classes.heading}>
                      <b>Promoted URL:</b>
                    </p>
                    <p>https://radiant-stroopwafel-87...</p>
                  </Col>
                  <Col xs={4}>
                    <p className={classes.heading}>
                      <b>Service type:</b>
                    </p>
                    <p>Content placement</p>
                  </Col>
                </Row>
              </Col>
              <Col md={5}>
                <Row className={classes['row-adjusting']}>
                  <Col xs={3}>
                    <p className={classes.heading}>
                      <b>Bids:</b>
                    </p>
                    <p>1234</p>
                  </Col>
                  <Col xs={5}>
                    <p className={classes.heading}>
                      <b>Creation date:</b>
                    </p>
                    <p>Dec/17/2022</p>
                  </Col>
                  <Col xs={4}>
                    <p className={classes.heading}>
                      <b>Total spent:</b>
                    </p>
                    <p>0</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Collapse>
        </CardBody>
      </Card>
    </>
  );
};

export default OfferDetail;
