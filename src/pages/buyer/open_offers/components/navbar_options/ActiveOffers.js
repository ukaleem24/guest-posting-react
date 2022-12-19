import React from 'react'
import classes from 'assets/css/cutom_css/buyer/open_offer/offer.module.css'
import { Col, Row } from 'reactstrap'


const ActiveOffers = () => {
    // const allOffers=[1,2];
  return (
    <>
      <Row>
        <Col>
        <h2 className={classes['main-heading']}>Active Offers</h2></Col>
      </Row>
      </>
  )
}

export default ActiveOffers