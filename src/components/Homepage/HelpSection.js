import React, {useState} from 'react';
import decoration from '../../assets/Decoration.svg'


function HelpSection() {
  const [isFoundationsVisible, setFoundationsVisible] = useState(true)
  const [foundations] = useState([{
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
  
  const [isOrganizationsVisible, setOrganizationsVisible] = useState(false)
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
    }
  
  ])
  
  const [isLocalsVisible, setLocalsVisible] = useState(false)
  const [locals] = useState([{
    name: 'Zbiórka 1',
    target: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
    range: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
  },
    {
      name: 'Zbiórka 2',
      target: 'ubrania, meble, zabawki',
      range: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
    },
    {
      name: 'Zbiórka 3',
      target: 'Cel i misja: Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
      range: 'ubrania, jedzenie, ciepłe koce'
    }
  
  ])
  
  const handleFoundationVisible = () => {
    return (
      setFoundationsVisible(true),
      setOrganizationsVisible(false),
      setLocalsVisible(false)
      )
  }
  const handleOrganizationVisible = () => {
    return (
      setFoundationsVisible(false),
        setOrganizationsVisible(true),
        setLocalsVisible(false)
    )
  }
  const handleLocalsVisible = () => {
    return (
      setFoundationsVisible(false),
        setOrganizationsVisible(false),
        setLocalsVisible(true)
    )
  }
  
  return (
    <section className={'help'} id={'help'}>
      <div className={'container'}>
        <h2 className={'help__title'}>Komu pomagamy?</h2>
        <img className={'decoration'} src={decoration} alt={'decoration'}/>
        <div className={'help__receiversGroups'}>
          <button className={'btn btn-big btn-receivers'} onClick={handleFoundationVisible}>Fundacjom</button>
          <button className={'btn btn-big btn-receivers'} onClick={handleOrganizationVisible}>Organizacjom pozarządowym</button>
          <button className={'btn btn-big btn-receivers'} onClick={handleLocalsVisible}>Lokalnym zbiórkom</button>
        </div>
        
        <div className={isFoundationsVisible ? 'help__receiver' : 'help__receiver hidden'}>
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
        <div className={isOrganizationsVisible ? 'help__receiver' : 'help__receiver hidden'}>
          <h3 className={'help__subtitle'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</h3>
          <ul className={'help__list'}>
            {organizations.map((el, i) => {
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
        </div>
        <div className={isLocalsVisible ? 'help__receiver' : 'help__receiver hidden'}>
          <h3 className={'help__subtitle'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</h3>
          <ul className={'help__list'}>
            {locals.map((el, i) => {
              return (
                <div className={'help__box'} key={i}>
                  <div className={'help__info'}>
                    <p className={'help__name'}>Zbiórka: "{el.name}"</p>
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