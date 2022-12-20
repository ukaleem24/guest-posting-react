import React from 'react';
import { Col, FormGroup, Input, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from 'assets/css/cutom_css/publisher/task/filter.module.css';

const Filters = () => {
  return (
    <>
      <Row>
        <Col md={6}>
          <Row>
            <Col>
              <Row className={classes['textbox-container']}>
                <Col xs={10} className={classes['col-adjustment']}>
                  <FormGroup>
                    <Input
                      id="exampleText"
                      name="url"
                      type="text"
                      className={classes['text-input']}
                      placeholder="Task ID"
                    />
                  </FormGroup>
                </Col>
                <Col xs={2} className={classes['col-adjustment']}>
                  <FontAwesomeIcon icon={faSearch} className={classes.icon} />
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className={classes['textbox-container']}>
                <Col xs={10} className={classes['col-adjustment']}>
                  <FormGroup>
                    <Input
                      id="exampleText"
                      name="url"
                      type="text"
                      className={classes['text-input']}
                      placeholder="Your site's "
                    />
                  </FormGroup>
                </Col>
                <Col xs={2} className={classes['col-adjustment']}>
                  <FontAwesomeIcon icon={faSearch} className={classes.icon} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row>
            <Col>
              <Row className={classes['textbox-container']}>
                <Col xs={10} className={classes['col-adjustment']}>
                  <FormGroup>
                    <Input
                      id="exampleText"
                      name="url"
                      type="text"
                      className={classes['text-input']}
                      placeholder="Promoted Url"
                    />
                  </FormGroup>
                </Col>
                <Col xs={2} className={classes['col-adjustment']}>
                  <FontAwesomeIcon icon={faSearch} className={classes.icon} />
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className={classes['textbox-container']}>
                <Col xs={10} className={classes['col-adjustment']}>
                  <FormGroup>
                    <Input
                      id="exampleText"
                      name="url"
                      type="text"
                      className={classes['text-input']}
                      placeholder="Anchor Text"
                    />
                  </FormGroup>
                </Col>
                <Col xs={2} className={classes['col-adjustment']}>
                  <FontAwesomeIcon icon={faSearch} className={classes.icon} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Filters;
