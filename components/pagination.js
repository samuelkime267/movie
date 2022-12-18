import React from 'react';
import { useRouter } from 'next/router';

const Pagination = ({ curPage, totalPages }) => {
  const pages = [];
  const route = useRouter();
  if (curPage >= 1 && curPage <= 5) {
    for (let i = 1; i <= 10 && i <= totalPages; i++) {
      pages.push(i);
    }
  }
  if (curPage > 5 && curPage < totalPages - 5) {
    const minPage = curPage - 5;
    const maxPage = curPage + 5;
    for (let i = minPage; i <= maxPage && i <= totalPages; i++) {
      pages.push(i);
    }
  }
  if (curPage > totalPages - 5 && curPage !== totalPages) {
    console.log(totalPages - curPage);
    const minPage = curPage - (10 - (totalPages - curPage));
    for (let i = minPage; i <= totalPages && i > 0; i++) {
      pages.push(i);
    }
  }
  if (curPage === totalPages) {
    for (let i = totalPages; i >= totalPages - 10 && i > 0; i--) {
      pages.push(i);
    }
  }

  const changePage = function (page) {
    const newPage = route.asPath.split('/').splice(1, 3).join('/');
    route.push(`/${newPage}/${page}`);
  };
  return (
    <>
      {pages.map(page => (
        <button
          key={page}
          className={`pagination-btn ${page === curPage ? 'active-page' : ''}`}
          onClick={() => changePage(page)}
        >
          {page}
        </button>
      ))}
    </>
  );
};

export default Pagination;
