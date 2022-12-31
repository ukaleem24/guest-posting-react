import React from 'react';

import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';

import classes from 'assets/css/cutom_css/buyer/dashboard/dashboard.module.css';



const MyRating = () => {



  return (
    <>
        <Row>
          <Colxx xxs="12" >
            <h1 className={classes['page-main-heading']}>
              <b>Kaleem Ullah</b>
            </h1>
            <Separator className='mb-3'/>
          </Colxx>
        </Row>
        

      
      </>
  );
};






export default MyRating