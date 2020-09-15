import React, {useState} from 'react';
import {AuthUserContext} from "../Session";
import {Link} from "react-router-dom";
import LogOutButton from "./LogOutButton";
import ContentLoader from "react-content-loader";

function LogButtons({userEmail, isLoaded, userId}) {
  
  
  const UserLoggedIn = ({userEmail}) => {
    return (
      <div className={'logIn'}>
        <p className={'main__userEmail'}>Hello {userEmail}!</p>
        <Link to={'/app'} className={'btn btn-small'}>Oddaj rzeczy</Link>
        <LogOutButton className={'btn btn-small'}/>
      </div>
    )
  }
  
  
  
  if (!userEmail) {
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
        authUser ? <UserLoggedIn userEmail={userEmail} /> : null}
    </AuthUserContext.Consumer>
  );
}

export default LogButtons;