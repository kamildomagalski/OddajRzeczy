import React from 'react';
import AppHeader from "./AppHeader";
import decoration from '../../assets/Decoration.svg'
import {Link} from "react-router-dom";

function LogIn() {
 return (
   <section className={'login'}>
     <AppHeader/>
   <div className={'login__content'}>
     <h1 className={'login__title'}>Zaloguj się</h1>
     <img className={'decoration'} src={decoration} alt={'decoration'}/>
     <div className={'login__form'}>
       <div className={'login__wrapper'}>
         <p className={'login__subtitle'}>Email</p>
         <input className={'login__input login__email'}/>
       </div>
       <div className={'login__wrapper'}>
         <p className={'login__subtitle'}>Hasło</p>
         <input type={'password'} className={'login__input login__password'}/>
       </div>
     </div>
     <div className={'login__buttons'}>
       <Link to={'/signup'} className={'btn btn-small btn-noBorder'}>Załóż konto</Link>
       <button className={'btn btn-small btn-border'}>Zaloguj się</button>
     </div>
   </div>
   </section>
 );
}
export default LogIn;