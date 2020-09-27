import React, {useEffect, useState} from 'react';
import {withFirebase} from "../Firebase";
import {Link} from "react-router-dom";
import {Link as LinkScroll, animateScroll as scroll} from 'react-scroll';

import decoration from '../../assets/Decoration.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import LogButtons from "../logic_components/LogButtons";
import LogButtonsMobile from "../logic_components/LogButtonsMobile";
import {AuthUserContext} from "../Session";

function MainSection({firebase}) {
  const [menuClick, setMenuClick] = useState(false)
  const [userEmail, setUserEmail] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  
  const handleMenuClick = () => setMenuClick(!menuClick);
  const handleMenuClose = () => setMenuClick(false);
  
  const userId = firebase.auth.currentUser?.uid
  const rootRef = firebase.db.ref('users/' + userId);
  
  useEffect(() => {
    rootRef.child('email').on('value', snap => {
      setUserEmail(snap.val())
      setLoaded(true)
    })
  }, [userId])
  
  const ContentButtonsOn = () => {
    return (
      <div className={'content__buttons'}>
        <Link to={'/app'} className={'btn btn-big'}>Oddaj Rzeczy</Link>
        <Link to={'/app'} className={'btn btn-big'}>Zorganizuj Zbiórkę</Link>
      </div>
    )
  }
  
  const ContentButtonsOff = () => {
    return (
      <div className={'content__buttons'}>
        <Link to={'/login'} className={'btn btn-big'}>Oddaj Rzeczy</Link>
        <Link to={'/login'} className={'btn btn-big'}>Zorganizuj Zbiórkę</Link>
      </div>
    )
  }
  
  
  return (
    
    <section className={'main'}>
      <div className={'backgroundFilter'}>
        <header className={'header'}>
          <LogButtons userEmail={userEmail} isLoaded={isLoaded}/>
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
                                                        duration={500}>O co chodzi?</LinkScroll></li>
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
            <LogButtonsMobile userEmail={userEmail}/>
          </ul>
        </header>
        <div className={'content'}>
          <h2 className={'content__title'}>Zacznij pomagać!</h2>
          <h2 className={'content__title'}>Oddaj niechciane rzeczy w zaufane ręce</h2>
          <img className={'decoration'} src={decoration} alt={'decoration'}/>
          <AuthUserContext.Consumer>
            {authUser =>
              authUser ? <ContentButtonsOn /> : <ContentButtonsOff/>}
          </AuthUserContext.Consumer>
        </div>
      </div>
    </section>
  );
}

export default withFirebase(MainSection);