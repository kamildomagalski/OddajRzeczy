import React from 'react';
import AppHeader from "./AppHeader";
import decoration from '../../assets/Decoration.svg'
import LogInForm from "./LogInForm";

function LogIn() {
 return (
   <section className={'login'}>
     <AppHeader/>
   <div className={'login__content'}>
     <h1 className={'login__title'}>Zaloguj się</h1>
     <img className={'decoration'} src={decoration} alt={'decoration'}/>
     <LogInForm/>
   </div>
   </section>
 );
}
export default LogIn;