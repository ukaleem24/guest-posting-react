import React, { useState } from 'react';
import {
  Button,
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

const Setting = () => {
  const [emailModal, setEmailModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  const [usdtModal, setUsdtModal] = useState(false);


  const emailModalHandler = () => setEmailModal(!emailModal);
  const passwordModalHandler = () => setPasswordModal(!passwordModal);
  const usdtModalHandler = () => setUsdtModal(!usdtModal);


  return (
    <Card className={classes['card-Container']}>
      <CardBody>
        <Row>
          <Col md={6}>
            <div className={classes.container}>
              <h6 className={classes.label}>Account email *</h6>

              <Input
                id="exampleText"
                name="text"
                type="submit"
                className={classes['title-container']}
                onClick={emailModalHandler}
                value="kaleem@gmail.com"
              />
            </div>
            <div className={classes.container}>
              <h6 className={classes.label}>Password *</h6>

              <Input
                id="exampleText"
                name="text"
                type="submit"
                className={classes['title-container']}
                onClick={passwordModalHandler}
                value="*************"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className={classes.container}>
              <h6 className={classes.label}>USDT (TRC20) address</h6>

              <Input
                id="exampleText"
                name="text"
                type="submit"
                className={classes['title-container']}
                onClick={usdtModalHandler}
                
                // placeholder="Provide a title suggestion here if you have one"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className={classes['data-delete-container']}>
            <h4 className={classes['delete-account-label']}>
              My account and all personal data
            </h4>
            <Button>Delete</Button>
          </Col>
        </Row>
        <Modal
          isOpen={emailModal}
          toggle={emailModalHandler}
          
        >
          <ModalBody className={classes.modal}>
            <div className={classes['update-email-container']}>
              <div className={classes['update-email-heading']}>
                <h1>
                  <b>New Email</b>
                </h1>
              </div>

              <h6 className={classes.label}>Account email *</h6>

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
          isOpen={passwordModal}
          toggle={passwordModalHandler}
          className={classes.modal}
        >
          <ModalBody>
            <div className={classes['update-email-container']}>
              <div className={classes['update-email-heading']}>
                <h1>
                  <b>Password Change</b>
                </h1>
              </div>

              <h6 className={classes.label}>Current Password</h6>

              <Input
                id="exampleText"
                name="text"
                type="text"
                className={classes['title-container']}
              />
              <h6 className={classes.label}>New Password</h6>

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
          isOpen={usdtModal}
          toggle={usdtModalHandler}
          className={classes.modal}
        >
          <ModalBody>
            <div className={classes['update-email-container']}>
              <div className={classes['update-email-heading']}>
                <h1>
                  <b>USDT Address</b>
                </h1>
              </div>

              <h6 className={classes.label}>USDT Address *</h6>

              <Input
                id="exampleText"
                name="text"
                type="text"
                className={classes['title-container']}
              />
              <h6 className={classes.label}>GOGO Account Password *</h6>

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
      </CardBody>
    </Card>
  );
};

export default Setting;
