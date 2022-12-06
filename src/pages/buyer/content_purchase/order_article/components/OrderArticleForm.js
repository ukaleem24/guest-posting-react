import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
// import { Row } from 'reactstrap'
import classes from 'assets/css/cutom_css/buyer/content_purchase/order-article-form.module.css';
import {
  Row,
  Col,
  Card,
  CardBody,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
// import { useState } from 'react';
// import { Form } from 'react-router-dom';

const OrderArticleForm = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const isSmallerThan40 = useMediaQuery({
    query: '(max-width: 40rem)',
  });

  return (
    <>
      <Card className={classes['card-Container']}>
        <CardBody>
          <div>
            <h6 className={classes.label}>Word Count *</h6>
            {isSmallerThan40 && (
              <p className={classes['word-count-text-container2']}>
                Set your desired length for the article. Keep in mind that it
                will directly impact the final price.
              </p>
            )}
            <Row>
              <Col sm={6}>
                <div className={classes['word-count-container']}>
                  <Col sm={3} className={classes['word-count-item-container']}>
                    <h6 className={classes['word-count-item']}>500 words</h6>
                  </Col>
                  <Col sm={3} className={classes['word-count-item-container']}>
                    <h6 className={classes['word-count-item']}>1000 words</h6>
                  </Col>
                  <Col sm={3} className={classes['word-count-item-container']}>
                    <h6 className={classes['word-count-item']}>1500 words</h6>
                  </Col>
                  <Col sm={3} className={classes['word-count-item-container']}>
                    <h6 className={classes['word-count-item']}>2000 words</h6>
                  </Col>
                </div>
              </Col>
              <Col className={classes['word-count-text-container']}>
                {!isSmallerThan40 && (
                  <p className={classes['word-count-text']}>
                    Set your desired length for the article. Keep in mind that
                    it will directly impact the final price.
                  </p>
                )}
              </Col>
            </Row>
          </div>
          {/* ///////word Count Ends/////////////////// */}
          <div>
            <h6 className={classes.label}>Category *</h6>
            <Row>
              <Col sm={6} >
                <div >
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle data-toggle="dropdown" tag="span" className={classes['category-container']}>
                    Large Button
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Header</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                </div>
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default OrderArticleForm;
