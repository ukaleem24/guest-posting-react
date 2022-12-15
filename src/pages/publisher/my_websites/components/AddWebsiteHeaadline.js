import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import classes from 'assets/css/cutom_css/publisher/my_platform/add-websites-headline.module.css';
import { useMediaQuery } from 'react-responsive';

const AddWebsiteHeaadline = () => {
  const isSmallerThan40 = useMediaQuery({
    query: '(max-width: 64rem)',
  });
  return (
    <>
      <Row>
        <Col>
          <div className={classes.highlightsContainer}>
            <div className={classes.highlightsText}>
              <h4 className={classes['higlighted-text']}>
                Want to monetize your site while placing or creating unique and
                relevant content?
              </h4>
              {isSmallerThan40 && <div className={classes['highlightsButton-mobile-view']}>
                {/* <Button className={classes.btnn}>Order Article</Button> */}
                <NavLink
                  className={classes['mobile-view-button']}
                  to="/publisher/platform/add-website"
                >
                  Add website
                </NavLink>
              </div>}
            </div>

            {!isSmallerThan40&&<div className={classes.highlightsButton}>
              {/* <Button className={classes.btnn}>Order Article</Button> */}
              <NavLink
                className={classes.btnn}
                to="/publisher/platform/add-website"
              >
                Add website
              </NavLink>
            </div>}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AddWebsiteHeaadline;
