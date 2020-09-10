import React, { useState } from 'react';
import Pagination from "./Pagination";


function Organization({isOrganizationsVisible}) {
  const [organizations] = useState([{
    name: 'Organizacja 1',
    target: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
    range: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
  },
    {
      name: 'Organizacja 2',
      target: 'ubrania, meble, zabawki',
      range: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
    },
    {
      name: 'Organizacja 3',
      target: 'Cel i misja: Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
      range: 'ubrania, jedzenie, ciepłe koce'
    },
    {
      name: 'Organizacja 4',
      target: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
      range: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
    },
    {
      name: 'Organizacja 3',
      target: 'Cel i misja: Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
      range: 'ubrania, jedzenie, ciepłe koce'
    },
    {
      name: 'Organizacja 3',
      target: 'Cel i misja: Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
      range: 'ubrania, jedzenie, ciepłe koce'
    },
  
  ])
  
  const [currentPage, setCurrentPage]= useState(1);
  const [postsPerPage]= useState(3);
  
//  Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  
  const currentOrganizationPosts = organizations.slice(indexOfFirstPost, indexOfLastPost);
  const paginate= (pageNumber)=> setCurrentPage(pageNumber);
  const numberOfPages=organizations.length/postsPerPage

  
  
  return (
    <div className={isOrganizationsVisible ? 'help__receiver' : 'help__receiver hidden'}>
    <h3 className={'help__subtitle'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</h3>
    <ul className={'help__list'}>
      {currentOrganizationPosts.map((el, i) => {
        return (
          <div className={'help__box'} key={i}>
            <div className={'help__info'}>
              <p className={'help__name'}>Organizacja: "{el.name}"</p>
              <p className={'help__target'}>Cel i misja: {el.target}</p>
            </div>
            <p className={'help__range'}>{el.range}</p>
          </div>
        )
      })
      }
    </ul>
    <Pagination postPerPage={postsPerPage}
                totalPosts={organizations.length}
                paginate={paginate}
                currentPage={currentPage}
                numberOfPages={numberOfPages}/>
  </div>
 );
}
export default Organization;