import React from 'react';
import { Button, Card, CardBody, Col, Row } from 'reactstrap';
import classes from 'assets/css/cutom_css/publisher/task/taskDetail.module.css';
import { Separator } from 'components/common/CustomBootstrap';

const TaskStatus = () => {
  return (
    <>
      <Row>
        <Col>
          <h1 className={classes['main-heading']}>Task #2087</h1>
        </Col>
      </Row>

      <Card className={classes.card}>
        <CardBody className={classes.card_body}>
          <Row className={classes['row-adjutment']}>
            <Col md={3}>
              <p className={classes['label-heading']}>Your Sites URL</p>
              <p>https://google.com</p>
            </Col>
            <Col md={2}>
              <p className={classes['label-heading']}>Based On the Offer</p>
              <p>Id:1605</p>
            </Col>
            <Col md={4}>
              <p className={classes['label-heading']}>Task Palcement URL</p>
              <p>
                Click the &quot;For approval&quot; button below and insert the
                URL of a page with the task you have performed
              </p>
            </Col>
            <Col md={3}>
              <p className={classes['label-heading']}>Task price</p>
              <p>10$</p>
            </Col>
          </Row>
          <Row className={classes['row-adjutment']}>
            <Col md={3}>
              <p className={classes['label-heading']}>Service Type</p>
              <p>Content creation and placement</p>
            </Col>
            <Col md={2}>
              <p className={classes['label-heading']}>Content type</p>
              <p>Mini Post</p>
            </Col>
            <Col md={4}>
              <p className={classes['label-heading']}>Promoted URL</p>
              <p>https://google.com</p>
            </Col>
            <Col md={3}>
              <p className={classes['label-heading']}>Achor Text</p>
              <p>Check for vulnerabilities</p>
            </Col>
          </Row>
          <Row className={classes['row-adjutment']}>
            <Col md={5}>
              <p className={classes['label-heading']}>Sepecial Requirements</p>
              <p>Content creation and placement</p>
            </Col>

            <Col md={7}>
              <p className={classes['label-heading']}>Task Status</p>
              <p>In Progress</p>
            </Col>
          </Row>
          <Separator className="mb-4" />
          <Row>
            <Col>
              {' '}
              <h1>Buyer Content</h1>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <Button className="mr-3">Reject</Button>
              <Button className="mr-3">For Approval</Button>     
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default TaskStatus;
