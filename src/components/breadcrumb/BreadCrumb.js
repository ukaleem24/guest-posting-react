import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import classes from "../../assets/css/cutom_css/breadcrumb/breadcrumb.module.css"  

const BreadCrumb = ({activePage}) => {
  return (
    <>
    <div className={classes.breadcrumb_container}>
    <h1>{activePage}</h1>
    <Breadcrumb listTag="div">
      <BreadcrumbItem >
      <Link to="/marketer/publishers"> Home</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active >
      {activePage}
      </BreadcrumbItem>
      
    </Breadcrumb>
    </div>
    </>
  );
 
};

export default BreadCrumb;
