import React, {useState} from 'react';
import Pagination from "./Pagination";


function Foundations({isFoundationsVisible}) {
  const [foundations] = useState([
    {
      name: 'Dbam o zdrowie',
      target: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
      range: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
    },
    {
      name: 'Dla dzieci',
      target: 'ubrania, meble, zabawki',
      range: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
    },
    {
      name: 'Bez domu',
      target: 'Cel i misja: Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
      range: 'ubrania, jedzenie, ciepłe koce'
    },
    {
      name: 'Dbam o zdrowie',
      target: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
      range: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
    },
    {
      name: 'Bez domu',
      target: 'Cel i misja: Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
      range: 'ubrania, jedzenie, ciepłe koce'
    },
    {
      name: 'Bez domu',
      target: 'Cel i misja: Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
      range: 'ubrania, jedzenie, ciepłe koce'
    },
    {
      name: 'Bez domu',
      target: 'Cel i misja: Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
      range: 'ubrania, jedzenie, ciepłe koce'
    }, {
      name: 'Bez domu',
      target: 'Cel i misja: Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
      range: 'ubrania, jedzenie, ciepłe koce'
    },
  
  ])
  
  
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

//  Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentFoundationsPosts = foundations.slice(indexOfFirstPost, indexOfLastPost);
  const numberOfPages=foundations.length/postsPerPage


  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <div className={isFoundationsVisible ? 'help__receiver' : 'help__receiver hidden'}>
      <h3 className={'help__subtitle'}>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</h3>
      <ul className={'help__list'}>
        {currentFoundationsPosts.map((el, i) => {
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
                   totalPosts={foundations.length}
                   paginate={paginate}
                   currentPage={currentPage}
                  numberOfPages={numberOfPages}/>
    </div>
  );
}

export default Foundations;