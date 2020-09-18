import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {withFirebase} from "../Firebase";
import LogButtons from "../logic_components/LogButtons";
import {Link as LinkScroll} from "react-scroll";



function AppHeader({ firebase }) {
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
  return (
  
    <header className={'header'}>
      <LogButtons userEmail={userEmail} isLoaded={isLoaded}/>
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
        <li className={'menu__element'}><LinkScroll className={'menu__link'} onClick={handleMenuClose}
                                                    to={'contact'}
                                                    spy={true}
                                                    smooth={true}
                                                    duration={500}>Kontakt</LinkScroll></li>
      </ul>
    </header>
  );
}

export default withFirebase(AppHeader);