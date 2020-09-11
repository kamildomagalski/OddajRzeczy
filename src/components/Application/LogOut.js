import React from 'react';
import { Link } from "react-router-dom";
import AppHeader from "./AppHeader";
import decoration from '../../assets/Decoration.svg'
function LogOut() {
 return (
  <section className={'logout'}>
    <AppHeader/>
    <div className={'logout__content'}>
      <h1 className={'logout__title'}>Wylogowanie nastąpiło </h1>
      <h1 className={'logout__title'}>pomyślnie!</h1>
      <img src={decoration} className={'decoration decoration-mb'} alt={'decoration'}/>
      <Link to={'/'} className={'btn btn-small btn-border'}>Strona główna</Link>
    </div>
  
  </section>
 );
}
export default LogOut;