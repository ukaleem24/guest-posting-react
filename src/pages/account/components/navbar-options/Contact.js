import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {
  Card,
  CardBody,
  Col,
  // FormGroup,
  Input,
  ModalBody,
  Row,
  Modal,
} from 'reactstrap';
import classes from 'assets/css/cutom_css/account/profile.module.css';

const Contact = () => {
  const [nameModal, setNameModal] = useState(false);
  const [phoneModal, setPhoneModal] = useState(false);
  const [phoneNumber, setPhoneNumber]=useState();

  const phoneNumberHandler=(event)=>{
    setPhoneNumber(event)
    console.log(phoneNumber)
  }

  const nameModalHandler = () => setNameModal(!nameModal);
  const phoneModalHandler = () => setPhoneModal(!phoneModal);

  return (
    <Card className={classes['card-Container']}>
      <CardBody>
        <Row>
          <Col md={6}>
            <div className={classes.container}>
              <h6 className={classes.label}>Name</h6>

              <Input
                id="exampleText"
                name="text"
                type="submit"
                className={classes['title-container']}
                onClick={nameModalHandler}
                value="Kaleem Ullah"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className={classes.container}>
              <h6 className={classes.label}>Phone Number</h6>

              <Input
                id="exampleText"
                name="text"
                type="submit"
                className={classes['title-container']}
                onClick={phoneModalHandler}

                // placeholder="Provide a title suggestion here if you have one"
              />
            </div>
          </Col>
        </Row>

        <Modal isOpen={nameModal} toggle={nameModalHandler}>
          <ModalBody className={classes.modal}>
            <div className={classes['update-email-container']}>
              <div className={classes['update-email-heading']}>
                <h1>
                  <b>Change Name</b>
                </h1>
              </div>

              <h6 className={classes.label}>Name *</h6>

              <Input
                id="exampleText"
                name="text"
                type="text"
                className={classes['title-container']}
              />
              <Input
                id="exampleText"
                name="text"
                type="button"
                className={classes['update-email-btn']}
                value="Save"
              />
            </div>
          </ModalBody>
        </Modal>

        <Modal
          isOpen={phoneModal}
          toggle={phoneModalHandler}
          className={classes.modal}
        >
          <ModalBody>
            <div className={classes['update-email-container']}>
              <div className={classes['update-email-heading']}>
                <h1>
                  <b>Add Your Phone Number to Secure Your Account</b>
                </h1>
                <h6>
                  Protect your personal information and secure your account from
                  fraud by adding and confirming your phone number:
                </h6>
              </div>

              <h6 className={classes.label}>Phone number</h6>

              <PhoneInput
                id="exampleText"
                name="text"
                placeholder="Enter phone number"
                onChange={phoneNumberHandler}
               
              />
             

              
              <Input
                id="exampleText"
                name="text"
                type="button"
                className={classes['update-email-btn']}
                value="Save"
              />
            </div>
          </ModalBody>
        </Modal>
      </CardBody>
    </Card>
  );
};

export default Contact;
