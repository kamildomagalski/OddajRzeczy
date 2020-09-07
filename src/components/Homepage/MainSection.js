import React from 'react';
import decoration from '../../assets/Decoration.svg'

function MainSection() {
  return (
    <section className={'main'}>
      <header className={'header'}>
        <div className={'logIn'}>
          <button className={'btn btn-small'}>Zaloguj</button>
          <button className={'btn btn-small'}>Załóż konto</button>
        </div>
        <ul className={'menu'}>
          <li className={'menu__element'}><a className={'menu__link'}>Start</a></li>
          <li className={'menu__element'}><a className={'menu__link'}>O co chodzi?</a></li>
          <li className={'menu__element'}><a className={'menu__link'}>O nas</a></li>
          <li className={'menu__element'}><a className={'menu__link'}>Fundacje i organizacje</a></li>
          <li className={'menu__element'}><a className={'menu__link'}>Kontakt</a></li>
        </ul>
      </header>
      <div className={'content'}>
        <h2 className={'content__title'}>Zacznij pomagać!</h2>
        <h2 className={'content__title'}>Oddaj niechciane rzeczy w zaufane ręce</h2>
        <img className={'decoration'} src={decoration} alt={'decoration'}/>
        <div className={'content__buttons'}>
          <button className={'btn btn-big'}>Oddaj Rzeczy</button>
          <button className={'btn btn-big'}>Zorganizuj Zbiórkę</button>
        </div>
      </div>
    </section>
  );
}

export default MainSection;