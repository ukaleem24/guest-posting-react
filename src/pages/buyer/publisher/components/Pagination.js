import React, { useState, useEffect } from 'react';
import { PaginationItem, Pagination, PaginationLink } from 'reactstrap';

const Pagenation = ({ postPerPage, list, onSaveCurrentPageData }) => {
  const [currentPage, setCurrentPage] = useState(1);
 


  useEffect(() => {
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = list.slice(firstPostIndex, lastPostIndex);
    onSaveCurrentPageData(currentPosts);
  }, [currentPage,postPerPage]);

  const currentPageHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Pagination>
        <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" previous />
        </PaginationItem>
        <Pages
          list={list.length}
          postPerPage={postPerPage}
          onSetCurrentPage={currentPageHandler}
        />
        <PaginationItem>
          <PaginationLink href="#" next />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" last />
        </PaginationItem>
      </Pagination>
    </>
  );
};

const Pages = ({ list, postPerPage, onSetCurrentPage }) => {
  const totalPages = [];

  for (let i = 1; i <= Math.ceil(list / postPerPage); i += 1) {
    totalPages.push(i);
  }

  return (
    <>
      {totalPages.map((page) => {
        return (
          <PaginationItem key={page}>
            <PaginationLink onClick={() => onSetCurrentPage(page)}>
              {page}
            </PaginationLink>
          </PaginationItem>
        );
      })}
    </>
  );
};

export default Pagenation;
