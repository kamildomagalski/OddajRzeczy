import React, {useState} from 'react';
import decoration from '../../assets/Decoration.svg'


function HelpSection() {
  const [foundations, setFoundations] = useState([{
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
    }
  
  ])
  
  return (
    <section className={'help'} id={'help'}>
      <div className={'container'}>
        <h2 className={'help__title'}>Komu pomagamy?</h2>
        <img className={'decoration'} src={decoration} alt={'decoration'}/>
        <div className={'help__receiversGroups'}>
          <button className={'btn btn-big btn-receivers'}>Fundacjom</button>
          <button className={'btn btn-big btn-receivers'}>Organizacjom pozarządowym</button>
          <button className={'btn btn-big btn-receivers'}>Lokalnym zbiórkom</button>
        </div>
        
        <div className={'help__receiver'}>
          <h3 className={'help__subtitle'}>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
            współpracujemy. Możesz sprawdzić czym
            się zajmują, komu pomagają i czego potrzebują.</h3>
          <ul className={'help__list'}>
            {foundations.map((el, i) => {
              return (
                <div className={'help__box'} key={i}>
                  <div className={'help__info'}>
                    <p className={'help__name'}>Fundacja: "{el.name}"</p>
                    <p className={'help__target'}>Cel i misja: {el.target}</p>
                  </div>
                  <p className={'help__range'}>{el.range}</p>
                </div>
              )
            })
            }
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HelpSection;