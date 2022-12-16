// import BreadCrumb from 'components/breadcrumb/BreadCrumb'
import { Colxx } from 'components/common/CustomBootstrap';
import React from 'react';
import {
  
  Col,
  FormGroup,
  Input,
  Row,
} from 'reactstrap';
import classes from 'assets/css/cutom_css/publisher/my_platform/add-website.module.css';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';

const AddWebsite = () => {
  const isSmallerThan48 = useMediaQuery({
    query: '(max-width: 48rem)',
  });

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <h1 >Add website </h1>
        </Colxx>
      </Row>
      <Row className={classes['complition-bar-container']}>
        <Col xs={3} className={classes['first-colums-fill']} />
        
        
      </Row>

      <Row className={classes['website-container']}>
        <Col md={10}>
          <h6 className={classes.label}>URL</h6>
          <FormGroup>
            <Input
              id="exampleText"
              name="url"
              type="text"
              className={classes['text-box-container-white']}
              placeholder="URL"
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <NavLink
            className={
              isSmallerThan48
                ? classes['url-btn-mobile-view']
                : classes['url-btn']
            }
            to="/publisher/platform/add-website-detail"
          >
            Next
          </NavLink>
        </Col>
      </Row>
    </>
  );
};

export default AddWebsite;
