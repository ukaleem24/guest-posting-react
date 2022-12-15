import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import classes from '../../assets/css/cutom_css/breadcrumb/breadcrumb.module.css';

const BreadCrumb = ({ activePage, previousPages,mainpage }) => {
  return (
    <>
      <div className={classes.breadcrumb_container}>
        <h1>{activePage}</h1>
        <Breadcrumb listTag="div">
          {!mainpage&&<BreadcrumbItem>
            <Link to="/marketer/publishers"> Home</Link>
          </BreadcrumbItem>}
          {previousPages &&
            previousPages.map((page) => (
              <BreadcrumbItem key={page.pageName}>
                <Link to={page.link}>{page.pageName}</Link>
              </BreadcrumbItem>
            ))}
          {!mainpage&&<BreadcrumbItem active>{activePage}</BreadcrumbItem>}
        </Breadcrumb>
      </div>
    </>
  );
};

export default BreadCrumb;
