import React from 'react';
import AppHeader from "./AppHeader";
import decoration from "../../assets/Decoration.svg";
import SignUpForm from "./SignUpForm";
import {FirebaseContext} from "../Firebase";



function SignUp() {
 
 
 return (
   <section className={'signup'}>
     <AppHeader/>
     <div className={'signup__content'}>
       <h1 className={'signup__title'}>Załóż konto</h1>
       <img className={'decoration'} src={decoration} alt={'decoration'}/>
       <FirebaseContext.Consumer>
         {firebase => <SignUpForm firebase={firebase}/>}
       </FirebaseContext.Consumer>
     </div>
   </section>
 );
}
export default SignUp;