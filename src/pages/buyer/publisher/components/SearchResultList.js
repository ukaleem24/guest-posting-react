import React, { useState } from 'react';
import { Row } from 'reactstrap';
import Pagenation from './Pagination';
import SearchResultItem from './SearchResultItem';
import SortingFilterSearchResult from './SortingFilterSearchResult';
// import classes from '../../../../assets/css/cutom_css/buyer/publisher/pagination.module.css';
import classes from '../../../../assets/css/cutom_css/buyer/publisher/pagination.module.css';
// import classes from './pagination.module.css';

const SearchResultList = () => {
  const list = [
    {
      placement: 1,
      article: 10,
      da: 54,
      completionRate: 'Up to 70.00%',
      spamScore: 'N/A',
      monthlyTraffic: 1299,
      links: 'Dofollow',
      Minipost: 15,
      Longarticle: 15.0,
      DR: 51,
      TAT: 'up to 1 day',
      Avglifetimeoflinks: 'Up to 100.00%',
      Language: 'English',
      Country: 'Pakistan',
    },
    {
      placement: 2,
      article: 10,
      da: 54,
      completionRate: 'Up to 70.00%',
      spamScore: 'N/A',
      monthlyTraffic: 1299,
      links: 'Dofollow',
      Minipost: 15,
      Longarticle: 15.0,
      DR: 51,
      TAT: 'up to 1 day',
      Avglifetimeoflinks: 'Up to 100.00%',
      Language: 'English',
      Country: 'Pakistan',
    },
    {
      placement: 3,
      article: 10,
      da: 54,
      completionRate: 'Up to 70.00%',
      spamScore: 'N/A',
      monthlyTraffic: 1299,
      links: 'Dofollow',
      Minipost: 15,
      Longarticle: 15.0,
      DR: 51,
      TAT: 'up to 1 day',
      Avglifetimeoflinks: 'Up to 100.00%',
      Language: 'English',
      Country: 'Pakistan',
    },
    {
      placement: 4,
      article: 10,
      da: 54,
      completionRate: 'Up to 70.00%',
      spamScore: 'N/A',
      monthlyTraffic: 1299,
      links: 'Dofollow',
      Minipost: 15,
      Longarticle: 15.0,
      DR: 51,
      TAT: 'up to 1 day',
      Avglifetimeoflinks: 'Up to 100.00%',
      Language: 'English',
      Country: 'Pakistan',
    },
    {
      placement: 5,
      article: 10,
      da: 54,
      completionRate: 'Up to 70.00%',
      spamScore: 'N/A',
      monthlyTraffic: 1299,
      links: 'Dofollow',
      Minipost: 15,
      Longarticle: 15.0,
      DR: 51,
      TAT: 'up to 1 day',
      Avglifetimeoflinks: 'Up to 100.00%',
      Language: 'English',
      Country: 'Pakistan',
    },
    {
        placement: 6,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
        placement: 7,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
        placement: 8,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
        placement: 9,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
        placement: 10,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
        placement: 11,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
        placement: 12,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
        placement: 13,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
        placement: 14,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
        placement: 15,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
        placement: 16,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
        placement: 17,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
        placement: 18,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
        placement: 19,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
        placement: 20,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
        placement: 21,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
        placement: 22,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
        placement: 23,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
        placement: 24,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
        placement: 25,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
        placement: 26,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
        placement: 27,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
        placement: 28,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
        placement: 29,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
        placement: 30,
        article: 10,
        da: 54,
        completionRate: 'Up to 70.00%',
        spamScore: 'N/A',
        monthlyTraffic: 1299,
        links: 'Dofollow',
        Minipost: 15,
        Longarticle: 15.0,
        DR: 51,
        TAT: 'up to 1 day',
        Avglifetimeoflinks: 'Up to 100.00%',
        Language: 'English',
        Country: 'Pakistan',
      },
      {
      placement: 31,
      article: 10,
      da: 54,
      completionRate: 'Up to 70.00%',
      spamScore: 'N/A',
      monthlyTraffic: 1299,
      links: 'Dofollow',
      Minipost: 15,
      Longarticle: 15.0,
      DR: 51,
      TAT: 'up to 1 day',
      Avglifetimeoflinks: 'Up to 100.00%',
      Language: 'English',
      Country: 'Pakistan',
    },
    {
      placement: 32,
      article: 10,
      da: 54,
      completionRate: 'Up to 70.00%',
      spamScore: 'N/A',
      monthlyTraffic: 1299,
      links: 'Dofollow',
      Minipost: 15,
      Longarticle: 15.0,
      DR: 51,
      TAT: 'up to 1 day',
      Avglifetimeoflinks: 'Up to 100.00%',
      Language: 'English',
      Country: 'Pakistan',
    },
    {
      placement: 33,
      article: 10,
      da: 54,
      completionRate: 'Up to 70.00%',
      spamScore: 'N/A',
      monthlyTraffic: 1299,
      links: 'Dofollow',
      Minipost: 15,
      Longarticle: 15.0,
      DR: 51,
      TAT: 'up to 1 day',
      Avglifetimeoflinks: 'Up to 100.00%',
      Language: 'English',
      Country: 'Pakistan',
    },
    {
      placement: 34,
      article: 10,
      da: 54,
      completionRate: 'Up to 70.00%',
      spamScore: 'N/A',
      monthlyTraffic: 1299,
      links: 'Dofollow',
      Minipost: 15,
      Longarticle: 15.0,
      DR: 51,
      TAT: 'up to 1 day',
      Avglifetimeoflinks: 'Up to 100.00%',
      Language: 'English',
      Country: 'Pakistan',
    },
    {
      placement: 35,
      article: 10,
      da: 54,
      completionRate: 'Up to 70.00%',
      spamScore: 'N/A',
      monthlyTraffic: 1299,
      links: 'Dofollow',
      Minipost: 15,
      Longarticle: 15.0,
      DR: 51,
      TAT: 'up to 1 day',
      Avglifetimeoflinks: 'Up to 100.00%',
      Language: 'English',
      Country: 'Pakistan',
    },
  ];
  const [postPerPage, setPostPerPage] = useState();
  const [perPageList, setperPageList] = useState();

  const postPerPageHandler = (data) => {
    setPostPerPage(data);
    console.log(postPerPage)
};
  console.log("checking-searchresultlist");

  const currentPageDataHandler = (data) => {
    setperPageList([...data]);
    // console.log(perPageList);
  };

  return (
    <>
      <SortingFilterSearchResult OnSavePostPerPage={postPerPageHandler} />
      {perPageList && perPageList.map((item) => (
          <SearchResultItem item={item} key={item.da} />
        ))}

      <Row className={classes.pagination}>
        {postPerPage && <Pagenation
          postPerPage={postPerPage}
          list={list}
          onSaveCurrentPageData={currentPageDataHandler}
        />}
      </Row>
    </>
    
  );
};

export default SearchResultList;
