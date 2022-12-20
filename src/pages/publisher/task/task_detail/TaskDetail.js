import React from 'react';
import { Col, Row } from 'reactstrap';
import TaskStatus from './components/TaskStatus';

const TaskDetail = () => {
  return (
    <>
      <Row>
        <Col>
          <TaskStatus/>
        </Col>
      </Row>

      
    </>
  );
};

export default TaskDetail;
