import React from 'react';

function Pagination({postPerPage, totalPosts, paginate, currentPage, numberOfPages}) {
  const pageNumbers = [];
  
  
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className={(numberOfPages >1) ? 'pagination' : 'pagination hidden'}>
      <ul className={'pagination__list'}>
        {pageNumbers.map(number => (
          <li key={number} className={'pagination__item'}>
            <a onClick={() => paginate(number)}
               className={(currentPage === number)
                 ? 'pagination__link active'
                 : 'pagination__link'}>{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;