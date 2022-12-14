import React, { useState } from 'react';
import { Card, CardBody, Row, Col, Button, Collapse } from 'reactstrap';
import classes from 'assets/css/cutom_css/publisher/my_platform/website-detail.module.css';
import { NavLink } from 'react-router-dom';
import { Separator } from 'components/common/CustomBootstrap';
// import { useMediaQuery } from 'react-responsive';

const WebsiteDetailItem = () => {
  // const isSmallerThan54 = useMediaQuery({
  //   query: '(max-width: 54rem)',
  // });

  const [showDetail, setShowDetail] = useState(false);

  const webDetailHandler = () => {
    setShowDetail(!showDetail);
  };

  return (
    // <Container className={classes.container}>
    <Card className={classes.card}>
      <CardBody className={classes.card_body}>
        <Row>
          <Col>
            <div className={classes.button_row_container}>
              <Row className={classes.button_row}>
                <Col className={[classes.item_header]}>
                  <p className={classes.url}>URL is Hidden</p>
                </Col>
                <Col className={classes.button_col_container}>
                  <div>
                    <NavLink className={classes.btnn}>
                      <i className="simple-icon-pencil" />
                    </NavLink>
                  </div>
                  <Button className={classes.btnn} onClick={webDetailHandler}>
                    <i className="simple-icon-options" />
                  </Button>
                </Col>
              </Row>
            </div>
            <Row>
              <Col>
                <div className={classes['post-container']}>
                  <Col>
                    <p className={classes.labels}>Status:</p>
                    <p>Rejected</p>
                  </Col>
                  <Col>
                    <p className={classes.labels}>Confirmation Status:</p>
                    <p>Contributor</p>
                  </Col>
                  <Col>
                    <p className={classes.labels}>Content Placement:</p>
                    <p>$100</p>
                  </Col>
                </div>
              </Col>
              <Col>
                <div className={classes['post-container']}>
                  <Col>
                    <p className={classes.labels}>Mini Post:</p>
                    <p>$20</p>
                  </Col>
                  <Col>
                    <p className={classes.labels}>Article:</p>
                    <p>$30</p>
                  </Col>
                  <Col>
                    <p className={classes.labels}>Long Article:</p>
                    <p>$50</p>
                  </Col>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* Further Detail */}

        <Collapse isOpen={showDetail}>
          <Separator className=" mb-4 mt-1 " />
          <Row>
            <Col lg={4} className={classes['col-adjusting']}>
              <div className={classes['post-container']}>
                <Col className={classes['col-adjusting']}>
                  <p className={classes.labels}>Categories:</p>
                  <p>Agriculture</p>
                </Col>
                <Col className={classes['col-adjusting']}>
                  <p className={classes.labels}>Country:</p>
                  <p>United States</p>
                </Col>
              </div>
            </Col>
            <Col lg={4} className={classes['col-adjusting']}>
              <div className={classes['post-container']}>
                <Col lg={8} className={classes['col-adjusting']}>
                  <p className={classes.labels}>
                    Content has to be marked as sponsored:
                  </p>
                  <p>Yes</p>
                </Col>
                <Col lg={4} className={classes['col-adjusting']}>
                  <p className={classes.labels}>Language:</p>
                  <p>English</p>
                </Col>
              </div>
            </Col>
            <Col lg="4" className={classes['col-adjusting']}>
              <div className={classes['post-container']}>
                <Col className={classes['col-adjusting']}>
                  <p className={classes.labels}>Acceptance of free articles:</p>
                  <p>No</p>
                </Col>
                <Col className={classes['col-adjusting']}>
                  <p className={classes.labels}>Links:</p>
                  <p>Dofollow</p>
                </Col>
              </div>
            </Col>
          </Row>
          <Row className={classes['content-placement']}>
            <Col sm="auto">
              <p className={classes.labels}>Price for content placement:</p>
              <p>$100</p>
            </Col>

            <Col sm="auto" className="mb-3">
              <p className={classes.labels}>
                Price for content creation and placement:
              </p>
              <p className={classes['post-prices']}>
                Mini-post{' '}
                <span className={classes.labels}>300 words, 1 hyperlink</span>{' '}
                $110/lifetime post{' '}
              </p>
              <p className={classes['post-prices']}>
                Article{' '}
                <span className={classes.labels}>
                  300-1000 words, 2 hyperlink
                </span>{' '}
                $130/lifetime post{' '}
              </p>
              <p className={classes['post-prices']}>
                Long article &gt;{' '}
                <span className={classes.labels}>1000 words, 3 hyperlink</span>{' '}
                $110/lifetime post{' '}
              </p>
            </Col>
          </Row>
          <div className={classes['button-container']}>
            <Button> Activate </Button>
            <Button className={classes['icon-button']}>
              <i className="simple-icon-trash" />
            </Button>
            </div>  
          
        </Collapse>
      </CardBody>
    </Card>
    // </Container>
  );
};

export default WebsiteDetailItem;
