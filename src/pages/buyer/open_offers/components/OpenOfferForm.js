import { Colxx } from 'components/common/CustomBootstrap';
import React from 'react';
import { Card, CardBody, Col, FormGroup, Input, Label, Row, Button } from 'reactstrap';
import classes from 'assets/css/cutom_css/buyer/open_offer/openOfferForm.module.css';

const OpenOfferForm = () => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <h1 className={classes.heading}>Create an open offer</h1>
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <p className={classes.label}>
            Open offer allows you to continuously order sponsored posts for your
            site with no extra troubles. Open offers work on a bidding scheme -
            publishers bid with their price suggestion and a relevant website,
            and you choose the one you consider the best value for your money.
            This is the page where you can create your open offer from scratch.
            Provide main information for the offer, and send it for bidding.
          </p>
        </Colxx>
      </Row>
      <Card className={classes.card}>
        <CardBody className={classes['card-body']}>
          <Row>
            <Col md={6}>
              <div>
                <h6 className={classes.heading}>Make offer available to</h6>
                <p className={classes['label-description']}>
                  Make offer available to Create an open offer for all
                  publishers or specify the important criteria using the
                  advanced settings.
                </p>
                <div className={classes['radio-button-container']}>
                  <FormGroup check>
                    <Input
                      name="radio2"
                      type="radio"
                      className={classes['radio-button']}
                    />{' '}
                    <Label check className={classes['radio-button-label']}>
                      All publishers
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      name="radio2"
                      type="radio"
                      className={classes['radio-button']}
                    />{' '}
                    <Label check className={classes['radio-button-label']}>
                      Specified publishers
                    </Label>
                  </FormGroup>
                </div>
              </div>
              <div>
                <h6 className={classes.heading}>Price type</h6>
                <p className={classes['label-description']}>
                  Set an approximate price you are ready to pay (allowing some
                  fluctuation), or choose to consider publishers&lsquo; prices.
                </p>
                <div>
                  <FormGroup check>
                    <Input
                      name="radio2"
                      type="radio"
                      className={classes['radio-button']}
                    />{' '}
                    <div className={classes['amount-text-box-container']}>
                      <Label check className={classes['radio-button-label']}>
                        Approximate price
                      </Label>
                      <div className={classes['amount-text-box-container']}>
                        <Input
                          id="exampleText"
                          name="url"
                          type="text"
                          className={classes['amount-text-box']}
                          placeholder="0"
                        />
                        <span className={classes['dollor-sign']}>$</span>
                      </div>
                    </div>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      name="radio2"
                      type="radio"
                      className={classes['radio-button']}
                    />{' '}
                    <Label check className={classes['radio-button-label']}>
                      Totally open for publishers&lsquo; offers
                    </Label>
                  </FormGroup>
                </div>
              </div>
              <div className={classes['service-type-container']}>
                <h6 className={classes.heading}>Type of service</h6>
                <p className={classes['label-description']}>
                  Choose the service type (you can choose between Content
                  placement or Content creation and placement)
                </p>

                <FormGroup check>
                  <Input
                    name="radio2"
                    type="radio"
                    className={classes['radio-button']}
                  />{' '}
                  <Label check className={classes['radio-button-label']}>
                    Content placement
                  </Label>
                  <p className={classes.description}>
                    Publishers place the content you provide
                  </p>
                </FormGroup>
                <FormGroup check>
                  <Input
                    name="radio2"
                    type="radio"
                    className={classes['radio-button']}
                  />{' '}
                  <Label check className={classes['radio-button-label']}>
                    Content creation and placement
                  </Label>
                  <p className={classes.description}>
                    Publishers create content considering your requirements, and
                    then place it on their sites
                  </p>
                </FormGroup>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <h6 className={classes.heading}>Offer name</h6>
                <p className={classes.label}>
                  Provide an offer name to make it easy for you to find it later
                </p>
                <FormGroup>
                  <Input
                    id="exampleText"
                    name="url"
                    type="text"
                    className={classes['text-box-container']}
                    placeholder="Offer name"
                  />
                </FormGroup>
              </div>
              <div>
                <h6 className={classes.heading}>Promoted URL</h6>
                <p className={classes.label}>
                  Provide URL of the site you want yo promote.
                </p>
                <FormGroup>
                  <Input
                    id="exampleText"
                    name="url"
                    type="text"
                    className={classes['text-box-container']}
                    placeholder="https://"
                  />
                </FormGroup>
              </div>
              <div>
                <h6 className={classes.heading}>Brief requirements</h6>
                <p className={classes.label}>
                  Explain shortly what you want from publishers.
                </p>
                <p className={classes.label}>
                  <b>IMPORTANT:</b> Don’t provide any content for publishers at this
                  stage to avoid theft or plagiarism. You’ll be able to do it
                  after you choose the publisher
                </p>
                <FormGroup>
                  <Input
                    id="exampleText"
                    name="url"
                    type="textarea"
                    className={classes['text-box-container']}
                    placeholder="https://"
                  />
                </FormGroup>
              </div>
              
            </Col>
          </Row>
          <Button>Back</Button>
          <Button>Save</Button>
        </CardBody>
      </Card>
    </>
  );
};

export default OpenOfferForm;
