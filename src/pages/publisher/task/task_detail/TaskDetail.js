import { Colxx } from 'components/common/CustomBootstrap';
import React from 'react';
import { Col, Row } from 'reactstrap';
import classes from 'assets/css/cutom_css/buyer/publisher/publisher.module.css';

import TaskStatus from './components/TaskStatus';

const TaskDetail = () => {
  return (
    <>
    <Row>
        <Colxx xxs="12" className="mb-4">
          <h1 className={classes.search_label}>
            <b>Task #2087</b>
          </h1>
        </Colxx>
      </Row>
      <Row>
        <Col>
          <TaskStatus/>
        </Col>
      </Row>

      
    </>
  );
};

export default TaskDetail;
