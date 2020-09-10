import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function AppHeader() {
  const [menuClick, setMenuClick] = useState(false)
  
  const handleMenuClick = () => setMenuClick(!menuClick);
  const handleMenuClose = () => setMenuClick(false);
  return (
    
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
        <li className={'menu__element'}><Link to={'/'} className={'menu__link'}
                                              onClick={handleMenuClose}>co chodzi?</Link></li>
        <li className={'menu__element'}><Link to={'/'} className={'menu__link'}
                                              onClick={handleMenuClose}>O nas</Link></li>
        <li className={'menu__element'}><Link to={'/'} className={'menu__link'}
                                              onClick={handleMenuClose}>Fundacje i organizacje</Link></li>
        <li className={'menu__element'}><Link to={'/'} className={'menu__link'}
                                              onClick={handleMenuClose}>Kontakt</Link></li>
      </ul>
    </header>
  
  );
}

export default AppHeader;