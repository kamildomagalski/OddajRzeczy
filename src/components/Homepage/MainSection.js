import React, {useState} from 'react';
import decoration from '../../assets/Decoration.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";
import {Link as LinkScroll, animateScroll as scroll} from 'react-scroll';
import LogOutButton from "../logic_components/LogOutButton";
import {AuthUserContext} from "../Session";

function MainSection() {
  const [menuClick, setMenuClick] = useState(false)
  
  const handleMenuClick = () => setMenuClick(!menuClick);
  const handleMenuClose = () => setMenuClick(false);
  
  
  const UserLogIn = () => {
    
    return (
      <div className={'logIn'}>
        <Link to={'/app'} className={'btn btn-small'}>Oddaj rzeczy</Link>
        <LogOutButton className={'btn btn-small'}/>
      </div>
    )
  }
  
  const UserLogOut = () => {
    return (
      <div className={'logIn'}>
        <Link to={'/login'} className={'btn btn-small'}>Zaloguj</Link>
        <Link to={'/signup'} className={'btn btn-small'}>Załóż konto</Link>
      </div>
    )
  }
  
  return (
    <section className={'main'}>
      <div className={'backgroundFilter'}>
        <header className={'header'}>
          <AuthUserContext.Consumer>
            {authUser =>
              authUser ? <UserLogIn/> : <UserLogOut/>}
          </AuthUserContext.Consumer>
          <div className={'menu-icon'} onClick={handleMenuClick}>
            {menuClick
              ? <FontAwesomeIcon icon="times" className={'icon'}/>
              : <FontAwesomeIcon icon="bars" className={'icon'}/>}
          </div>
          <ul className={menuClick ? 'menu menu__active' : 'menu'}>
            <li className={'menu__element'}><a className={'menu__link'} onClick={handleMenuClose}>Start</a></li>
            <li className={'menu__element'}><LinkScroll className={'menu__link'} onClick={handleMenuClose}
                                                        to={'steps'}
                                                        spy={true}
                                                        smooth={true}
                                                        duration={500}>co chodzi?</LinkScroll></li>
            <li className={'menu__element'}><LinkScroll className={'menu__link'} onClick={handleMenuClose}
                                                        to={'about'}
                                                        spy={true}
                                                        smooth={true}
                                                        duration={500}>O nas</LinkScroll></li>
            <li className={'menu__element'}><LinkScroll className={'menu__link'} onClick={handleMenuClose}
                                                        to={'help'}
                                                        spy={true}
                                                        smooth={true}
                                                        duration={500}>Fundacje i organizacje</LinkScroll></li>
            <li className={'menu__element'}><LinkScroll className={'menu__link'} onClick={handleMenuClose}
                                                        to={'contact'}
                                                        spy={true}
                                                        smooth={true}
                                                        duration={500}>Kontakt</LinkScroll></li>
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
      </div>
    </section>
  );
}

export default MainSection;