import { Colxx, Separator } from 'components/common/CustomBootstrap'
import React from 'react'
import { Col, Row } from 'reactstrap'
import Breadcrumb from 'components/breadcrumb/BreadCrumb';
import CreateTaskForm from './components/CreateTaskForm';

const CreateTask = () => {

    const breadCrumbDetail=[
        {
            pageName:"Content Purchase",
            link:"/marketer/content-purchase"
        }
    ]


    return (
        <>
          <Row>
            <Colxx xxs="12">
              <Breadcrumb activePage="Content purchase" previousPages={breadCrumbDetail} />
              <Separator className="mb-5" />
            </Colxx>
          </Row>
          <Row>
            <Col>
            <CreateTaskForm/>
            </Col>
          </Row>
          
        </>
      )
}

export default CreateTask