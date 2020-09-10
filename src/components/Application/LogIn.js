import React from 'react';
import AppHeader from "./AppHeader";
import decoration from '../../assets/Decoration.svg'

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
         <input className={'login__input login__password'}/>
       </div>
     </div>
     <div className={'login__buttons'}>
       <button className={'btn btn-small btn-signUp'}>Załóż konto</button>
       <button className={'btn btn-small btn-logIn'}>Zaloguj się</button>
     </div>
   </div>
   </section>
 );
}
export default LogIn;