import React from 'react';

import { Button, Card, CardBody, Col, Row } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCancel } from '@fortawesome/free-solid-svg-icons';
import classes from 'assets/css/cutom_css/publisher/open_offer/bidCard.module.css';
import { useMediaQuery } from 'react-responsive';
// import { Separator } from 'components/common/CustomBootstrap';

const BidCard = () => {
        const isSmallerThan48 = useMediaQuery({
          query: '(max-width: 48rem)',
        });
  return (
    <>
      {/* <Row>
        <Col>
          <h1 className={classes['main-heading']}>Open offer #2087</h1>
        </Col>
      </Row> */}

      <Card className={classes.card}>
        <CardBody className={classes.card_body}>
          <Row className={classes['body-container']}>
            <Col md={5}>
              
                  <p className={classes.heading}>
                    <b>My Website :</b>
                  </p>
                  <p>https://radiant-stroopwafel-87...</p>
             
             
            </Col>
            <Col md={5}>
              
                  <p className={classes.heading}>
                    <b>Price:</b>
                  </p>
                  <p>Open Price</p>
              </Col>
            <Col md={2}>
              <Button className={isSmallerThan48?classes['mobile-btn']:classes['bid-btn']}>Delete</Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default BidCard;
