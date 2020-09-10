import React from 'react';
import AppHeader from "./AppHeader";
import decoration from "../../assets/Decoration.svg";
import {Link} from "react-router-dom";

function SignUp() {
 return (
   <section className={'signup'}>
     <AppHeader/>
     <div className={'signup__content'}>
       <h1 className={'signup__title'}>Załóż konto</h1>
       <img className={'decoration'} src={decoration} alt={'decoration'}/>
       <div className={'signup__form'}>
         <div className={'signup__wrapper'}>
           <p className={'signup__subtitle'}>Email</p>
           <input className={'signup__input signup__email'}/>
         </div>
         <div className={'signup__wrapper'}>
           <p className={'signup__subtitle'}>Hasło</p>
           <input type={'password'} className={'login__input signup__password'}/>
         </div>
         <div className={'signup__wrapper'}>
           <p className={'signup__subtitle'}>Powtórz hasło</p>
           <input type={'password'} className={'signup__input signup__password'}/>
         </div>
       </div>
       <div className={'signup__buttons'}>
         <Link to={'/login'} className={'btn btn-small btn-logIn'}>Zaloguj się</Link>
         <button className={'btn btn-small btn-signUp'}>Załóż konto</button>
       </div>
     </div>
   </section>
 );
}
export default SignUp;