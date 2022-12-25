import React from 'react';

import { Card, CardBody, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faXmark } from '@fortawesome/free-solid-svg-icons';
import classes from 'assets/css/cutom_css/notifications/message.module.css';
// import { Separator } from 'components/common/CustomBootstrap';

const Message = () => {
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
                  <div  className={classes['message-data-container']}>
                    <div className={classes['calender-container']}>
                      <FontAwesomeIcon icon={faCalendar} />
                      <p>12/25/2022</p>
                    </div>
                    <div className={classes['message-box']}>
                      <h5 className={classes.url}>
                        <b>Message</b>
                      </h5>
                      <p className={classes.url}>You have a new message</p>
                      {/* <p className={classes.url}>
                      12/25/2022
                    </p> */}
                    </div>
                  </div>
                  <Col  className={classes['button-col-container']}>
                    <FontAwesomeIcon
                      icon={faXmark}
                      className={classes['cross-icon']}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default Message;
