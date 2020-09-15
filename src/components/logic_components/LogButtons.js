import React, {useEffect, useState} from 'react';
import {AuthUserContext} from "../Session";
import {Link} from "react-router-dom";
import LogOutButton from "./LogOutButton";
import ContentLoader from "react-content-loader";

function LogButtons({userEmail, isLoaded, userId}) {
  
  const [isLoaderVisible, setLoaderVisible]= useState(true)
  
 useEffect(()=>{
   if(userEmail === null){
     setLoaderVisible(false)
   }
 },[userEmail])
  console.log(isLoaderVisible);
  console.log(userEmail, 'buttons');
  
  const UserLoggedIn = ({userEmail}) => {
    return (
      <div className={'logIn'}>
        <p className={'main__userEmail'}>Hello {userEmail}!</p>
        <Link to={'/app'} className={'btn btn-small'}>Oddaj rzeczy</Link>
        <LogOutButton className={'btn btn-small'}/>
      </div>
    )
  }
  const UserLoggedOut = () => {
    return (
      <div className={'logIn'}>
        <Link to={'/login'} className={'btn btn-small'}>Zaloguj</Link>
        <Link to={'/signup'} className={'btn btn-small'}>Załóż konto</Link>
      </div>
    )
  }
  
  if (!userEmail && isLoaderVisible) {
    return (
      <div className={'main__loading'}>
        <ContentLoader speed={1} >
          <rect x="0" y="0" rx="3" ry="3" width="100%" height="35"/>
        </ContentLoader>
      </div>
    )
  }
  return (
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <UserLoggedIn userEmail={userEmail} /> : <UserLoggedOut/>}
    </AuthUserContext.Consumer>
  );
}

export default LogButtons;