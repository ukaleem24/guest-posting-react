import React from 'react';
import { Row } from 'reactstrap';
// import Breadcrumb from 'components/breadcrumb/BreadCrumb';
import { Colxx } from 'components/common/CustomBootstrap';
import classes from '../../../assets/css/cutom_css/buyer/publisher/publisher.module.css';

// import SearchBox from 'react-google-maps/lib/components/places/SearchBox';
// import SearchPublisher from './components/SearchPublisher';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import TaskItem from './components/TaskItem';

// import classes from 'assets/css/cutom_css/buyer/task/task.module.css';

const Tasks = () => {


  
  return (
    <>
      {/* <Row>
        <Colxx xxs="12">
          <Breadcrumb activePage="Tasks"  />
          <Separator className="mb-5" />
        </Colxx>
      </Row> */}
      <Row>
        <Colxx xxs="12" className="mb-4">
          <h1 className={classes.search_label}>
            <b>Tasks</b>
          </h1>
        </Colxx>
      </Row>
      
      <Row>
        <Colxx xxs="12">
          <Navbar />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <Filters />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <TaskItem />
        </Colxx>
      </Row>
    </>
  );
};

export default Tasks;
