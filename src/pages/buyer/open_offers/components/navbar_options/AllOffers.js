import React from 'react';
import { Col, Row } from 'reactstrap';
import classes from 'assets/css/cutom_css/buyer/open_offer/offer.module.css'
import Offer from '../Offer';

const AllOffers = () => {
  const allOffers = [1, 2];
  return (
    <>
      <Row>
        <Col>
        <h2 className={classes['main-heading']}>Offers</h2></Col>
      </Row>
      {allOffers.map((offer) => (
        <Offer key={offer} />
      ))}
    </>
  );
};

export default AllOffers;
