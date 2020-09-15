import React, { useState } from 'react';
import {AuthUserContext} from "../Session";
import {Link} from "react-router-dom";
import LogOutButton from "./LogOutButton";


function LogButtons({userEmail}) {
  
  
  const UserLogIn = ({userEmail}) => {
    return (
      <div className={'logIn'}>
        <p className={'main__userEmail'}>Hello {userEmail}!</p>
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
  
  if (!userEmail) {
    return <div className={'main__loading'}>Loading...</div>
  }
 return (
   <AuthUserContext.Consumer>
     {authUser =>
       authUser  ? <UserLogIn userEmail={userEmail}/> : <UserLogOut/>}
   </AuthUserContext.Consumer>
 );
}
export default LogButtons;