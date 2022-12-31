import React, { useState } from 'react';

// import PhoneInput from 'react-phone-number-input';
import {
  Card,
  CardBody,
  Col,
  // FormGroup,
  
  Row,
  
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import classes from 'assets/css/cutom_css/account/profile.module.css';

const NotificationSetting = () => {
  const [emailDropdownOpen, setEmailDropdownOpen] = useState(false);
  const toggle = () => setEmailDropdownOpen((prevState) => !prevState);

  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);
  const toggle2 = () => setPhoneDropdownOpen((prevState) => !prevState);

  return (
    <Card className={classes['card-Container']}>
      <CardBody>
        <Row>
          <Col md={6}>
            <div className={classes.container}>
              <h6 className={classes.label}>Receive text messages from GoGo on my email</h6>
              <Dropdown isOpen={emailDropdownOpen} toggle={toggle}>
                <DropdownToggle data-toggle="dropdown" tag="span">
                  <Col className={classes['category-container']}>
                    <div>Choose Category</div>
                    <div className={classes['drop-down-icon']}>
                      <i className="simple-icon-arrow-down" />
                    </div>
                  </Col>
                </DropdownToggle>
                <DropdownMenu className={classes['drop-down-item']}>
                  <DropdownItem>Yes</DropdownItem>
                  <DropdownItem>No</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </Col>
          <Col md={6}>
            <div className={classes.container}>
              <h6 className={classes.label}>Receive text messages from GoGo on my phone</h6>

              <Dropdown isOpen={phoneDropdownOpen} toggle={toggle2}>
                <DropdownToggle data-toggle="dropdown" tag="span">
                  <Col className={classes['category-container']}>
                    <div>Choose Category</div>
                    <div className={classes['drop-down-icon']}>
                      <i className="simple-icon-arrow-down" />
                    </div>
                  </Col>
                </DropdownToggle>
                <DropdownMenu className={classes['drop-down-item']}>
                  <DropdownItem>Yes</DropdownItem>
                  <DropdownItem>No</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default NotificationSetting;
