import React from 'react';

function Pagination({postPerPage, totalPosts, paginate}) {
  const pageNumbers=[];
  
  
  for (let i=1; i<= Math.ceil(totalPosts/postPerPage); i++){
    pageNumbers.push(i);
  }
 return (
  <nav className={'pagination'}>
    <ul className={'pagination__list'}>
      {pageNumbers.map(number => (
        <li key={number} className={'pagination__item'}>
          <a onClick={() => paginate(number)}   className={'pagination__link'}> {number}</a>
        </li>
      ))}
    </ul>
  </nav>
 );
}
export default Pagination;