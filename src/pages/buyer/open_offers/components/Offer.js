import React from 'react';
import { NavLink } from 'react-router-dom';
import {  Card, CardBody, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle} from '@fortawesome/free-solid-svg-icons'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import classes from 'assets/css/cutom_css/buyer/open_offer/openOfferCard.module.css';

const Offer = () => {
  return (
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
                  <div className={classes['active-icon']} >
                    <FontAwesomeIcon icon= {faCircle}/>
                  </div>                  
                  <div>
                    <p className={classes.active}>Active</p>
                  </div>
                  <div>
                    <NavLink className={classes.btnn}>
                      <i className="simple-icon-power" />
                    </NavLink>
                  </div>
                  <NavLink to="/marketer/offer/view/new-bid" className={classes.btnn}>
                    <i className="simple-icon-options" />
                  </NavLink>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className={classes['body-container']}>
          <Col md={7} >
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
      </CardBody>
    </Card>
  );
};

export default Offer;
