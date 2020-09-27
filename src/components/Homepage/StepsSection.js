import React from 'react';
import decoration from '../../assets/Decoration.svg'
import icon1 from '../../assets/Icon-1.svg'
import icon2 from '../../assets/Icon-2.svg'
import icon3 from '../../assets/Icon-3.svg'
import icon4 from '../../assets/Icon-4.svg'
import {Link} from "react-router-dom";
import {AuthUserContext} from "../Session";

function StepsSection() {
  
  const LinkUserOn = () => <Link to={'/app'} className={'btn btn-big'}>Oddaj Rzeczy</Link>
  
  const LinkUserOff = () => <Link to={'/login'} className={'btn btn-big'}>Oddaj Rzeczy</Link>
  
  return (
    <section className={'steps'} id={'steps'}>
      
      <div className={'steps__header'}>
        <h2 className={'steps__title'}>Wystarczą 4 proste kroki</h2>
        <img className={'decoration'} src={decoration} alt={'decoration'}/>
      </div>
      <div className={'steps__icons'}>
        <div className={'container'}>
          
            <div className={'steps__box'}>
              <img className={'steps__icon'} src={icon1} alt={'icon T-shirt'}/>
              <p className={'steps__text'}>Wybierz rzeczy</p>
              <div className={'underline'}/>
              <p className={'steps__text'}>ubrania, zabawki, sprzęt i inne</p>
            </div>
            <div className={'steps__box'}>
              <img className={'steps__icon'} src={icon2} alt={'icon shop bag'}/>
              <p className={'steps__text'}>Spakuj je</p>
              <div className={'underline'}/>
              <p className={'steps__text'}>skorzystaj z worków na śmieci</p>
            </div>
         
          
            <div className={'steps__box'}>
              <img className={'steps__icon'} src={icon3} alt={'icon magnify glass'}/>
              <p className={'steps__text'}>Zdecyduj komu chcesz pomóc</p>
              <div className={'underline'}/>
              <p className={'steps__text'}>wybierz zaufane miejsce</p>
            </div>
            <div className={'steps__box'}>
              <img className={'steps__icon'} src={icon4} alt={'icon arrows loop'}/>
              <p className={'steps__text'}>Zamów kuriera</p>
              <div className={'underline'}/>
              <p className={'steps__text'}>kurier przyjdzie w dogodnym terminie</p>
            </div>
          
        </div>
      </div>
      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? <LinkUserOn /> : <LinkUserOff/>}
      </AuthUserContext.Consumer>
      
    
    
    </section>
  );
}

export default StepsSection;