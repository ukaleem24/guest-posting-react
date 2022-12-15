import React from 'react';
import classes from "assets/css/cutom_css/publisher/my_platform/add-websites-headline.module.css"
import WebsiteDetailItem from './WebsiteDetailItem';

const WebsiteDetailList = () => {
  const website = [1, 2, 3, 4, 5];

  return (
    <>
      <div className={classes.container}>
        {website.map((item) => (
          <WebsiteDetailItem key={item} />
        ))}
      </div>
    </>
  );
};

export default WebsiteDetailList;
