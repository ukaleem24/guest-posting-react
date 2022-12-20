import React from 'react';
import { Col, FormGroup, Input, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from 'assets/css/cutom_css/publisher/task/filter.module.css';

const Filters = () => {
  return (
    <>
      <Row>
        <Col sm={4}>
          <Row className={classes['textbox-container']}>
            <Col xs={10} className={classes['col-adjustment']}>
              <FormGroup>
                <Input
                  id="exampleText"
                  name="url"
                  type="text"
                  className={classes['text-input']}
                  placeholder="Offer ID"
                />
              </FormGroup>
            </Col>
            <Col xs={2} className={classes['col-adjustment']}>
              <FontAwesomeIcon icon={faSearch} className={classes.icon} />
            </Col>
          </Row>
        </Col>
        <Col sm={4}>
          <Row className={classes['textbox-container']}>
            <Col xs={10} className={classes['col-adjustment']}>
              <FormGroup>
                <Input
                  id="exampleText"
                  name="url"
                  type="text"
                  className={classes['text-input']}
                  placeholder="Offer name"
                />
              </FormGroup>
            </Col>
            <Col xs={2} className={classes['col-adjustment']}>
              <FontAwesomeIcon icon={faSearch} className={classes.icon} />
            </Col>
          </Row>
        </Col>

        <Col sm={4}>
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
      </Row>
    </>
  );
};

export default Filters;
