import React from 'react';
import {AuthUserContext} from "../Session";
import {Link} from "react-router-dom";
import LogOutButton from "./LogOutButton";

function LogButtonsMobile({userEmail}) {
  
  const UserLoggedIn = ({userEmail}) => {
    return (
      <div className={'logInMobile'}>
        <p className={'main__userEmail'}>Hello {userEmail}!</p>
        <div className={'buttonsMobile__wrapper'}>
          <Link to={'/app'} className={'btn btn-small btn-mobile'}>Oddaj rzeczy</Link>
          <LogOutButton className={'btn btn-small btn-mobile'}/>
        </div>
      </div>
    )
  }
  const UserLoggedOut = () => {
    return (
      <div className={'logInMobile'}>
        <div className={'buttonsMobile__wrapper'}>
          <Link to={'/login'} className={'btn btn-small btn-mobile'}>Zaloguj</Link>
          <Link to={'/signup'} className={'btn btn-small btn-mobile'}>Załóż konto</Link>
        </div>
      </div>
    )
  }
  
  return (
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <UserLoggedIn userEmail={userEmail}/> : <UserLoggedOut/>}
    </AuthUserContext.Consumer>
  );
}

export default LogButtonsMobile;