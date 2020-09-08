import React, {useState} from 'react';
import decoration from '../../assets/Decoration.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";

function MainSection() {
  const [menuClick, setMenuClick] = useState(false)
  
  const handleMenuClick = () => setMenuClick(!menuClick);
  const handleMenuClose= () => setMenuClick(false);
  
  return (
    <section className={'main'}>
      <header className={'header'}>
        <div className={'logIn'}>
          <Link to={'/login'} className={'btn btn-small'}>Zaloguj</Link>
          <Link to={'/signup'} className={'btn btn-small'}>Załóż konto</Link>
        </div>
        <div className={'menu-icon'} onClick={handleMenuClick}>
          {menuClick
            ? <FontAwesomeIcon icon="times" className={'icon'}/>
            : <FontAwesomeIcon icon="bars" className={'icon'}/>}
        </div>
        <ul className={menuClick ? 'menu menu__active' : 'menu'}>
          <li className={'menu__element'}><a className={'menu__link'} onClick={handleMenuClose}>Start</a></li>
          <li className={'menu__element'}><a className={'menu__link'} onClick={handleMenuClose}>O co chodzi?</a></li>
          <li className={'menu__element'}><a className={'menu__link'} onClick={handleMenuClose}>O nas</a></li>
          <li className={'menu__element'}><a className={'menu__link'} onClick={handleMenuClose}>Fundacje i organizacje</a></li>
          <li className={'menu__element'}><a className={'menu__link'} onClick={handleMenuClose}>Kontakt</a></li>
        </ul>
      </header>
      <div className={'content'}>
        <h2 className={'content__title'}>Zacznij pomagać!</h2>
        <h2 className={'content__title'}>Oddaj niechciane rzeczy w zaufane ręce</h2>
        <img className={'decoration'} src={decoration} alt={'decoration'}/>
        <div className={'content__buttons'}>
          <Link to={'/login'} className={'btn btn-big'}>Oddaj Rzeczy</Link>
          <Link to={'/login'} className={'btn btn-big'}>Zorganizuj Zbiórkę</Link>
        </div>
      </div>
    </section>
  );
}

export default MainSection;