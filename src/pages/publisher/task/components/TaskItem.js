import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, Col, Row } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircle } from '@fortawesome/free-solid-svg-icons';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import classes from 'assets/css/cutom_css/buyer/open_offer/openOfferCard.module.css';

const TaskItem = () => {
  return (
    <Card className={classes.card}>
      <CardBody className={classes.card_body}>
        <Row>
          <Col>
            <div className={classes.button_row_container}>
              <Row className={classes.button_row}>
                <Col xs={8} className={[classes.item_header]}>
                  <p className={classes.url}>
                    <b>Task ID :</b> 1234567
                  </p>
                </Col>
                <Col xs={4} className={classes.button_col_container}>
                  {/* <div className={classes['active-icon']}>
                    <FontAwesomeIcon icon={faCircle} />
                  </div>
                  <div>
                    <p className={classes.active}>Active</p>
                  </div>
                  <div>
                    <NavLink className={classes.btnn}>
                      <i className="simple-icon-power" />
                    </NavLink>
                  </div> */}
                  <NavLink
                    to="/publisher/task/view/1234"
                    className={classes.btnn}
                  >
                    <i className="simple-icon-options" />
                  </NavLink>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className={classes['body-container']}>
          <Col md={6}>
            <Row className={classes['row-adjusting']}>
              <Col xs={6}>
                <p className={classes.heading}>
                  <b>Your Sites</b>
                </p>
                <p>https://radiant-stroopwafel-87...</p>
              </Col>
              <Col xs={6}>
                <p className={classes.heading}>
                  <b>Promoted URL:</b>
                </p>
                <p>https://radiant-stroopwafel-87...</p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row className={classes['row-adjusting']}>
              <Col xs={4}>
                <p className={classes.heading}>
                  <b>Anchor text:</b>
                </p>
                <p>Anything</p>
              </Col>
              <Col xs={4}>
                <p className={classes.heading}>
                  <b>Service Type:</b>
                </p>
                <p>1234</p>
              </Col>
              <Col xs={4}>
                <p className={classes.heading}>
                  <b>Price:</b>
                </p>
                <p>10$</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default TaskItem;
