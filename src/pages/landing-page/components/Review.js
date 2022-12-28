import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from 'assets/css/cutom_css/LandingPage/review.module.css';

const Review = () => {
  return (
    <div className="card-body text-center">
      {/* //////////////////////////////////////////// */}
      <div>
        <div>
          <FontAwesomeIcon className={classes.icon} icon={faUser} />
        </div>
        <h5 className="mb-2 font-weight-bold">Harry</h5>
      </div>
      <div>
        <p className="detail-text">
          Being a startup company, we were very pleased with the performance and
          ranking results delivered through iCopify platform. We were able to
          achieve quality backlinks & branded guest blogs on our website in a
          relatively short period of time.
        </p>
      </div>
      {/* /////////////////////////////////////////////// */}
    </div>
  );
};

export default Review;
