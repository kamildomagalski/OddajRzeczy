import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";


function LogInForm({firebase, history}) {
  const [logInState, setLogInState]= useState({
    email: '',
    password: '',
    error: null
  })
  
  const handleChange= (event)=> {
    console.log(logInState.password);
  
    const {name, value}= event.target;
    setLogInState(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  
  const handleSubmit=(event)=>{
    const {email, password} = logInState;
    event.preventDefault();
    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then( () => {
        setLogInState({
          email: '',
          password: '',
          error: null
        });
        history.push('/app');
      })
      .catch(error => {
       setLogInState({
         ...logInState,
         error
       })
      })
  }
  
  const isInvalid=
    logInState.password=== '' ||
    logInState.email === '';
 return (
  <>
    <form className={'login__form'}>
      <div className={'login__wrapper'}>
        <p className={'login__subtitle'}>Email</p>
        <input name={'email'}
               value={logInState.email}
               onChange={handleChange}
               type={'text'}
               className={'login__input login__email'}/>
      </div>
      <div className={'login__wrapper'}>
        <p className={'login__subtitle'}>Hasło</p>
        <input name={'password'}
               value={logInState.password}
               onChange={handleChange}
               type={'password'}
               className={'login__input login__password'}/>
      </div>
      {logInState.error && <p>{logInState.error.message}</p>}
    </form>
    <div className={'login__buttons'}>
      <Link to={'/signup'} className={'btn btn-small btn-noBorder'}>Załóż konto</Link>
      <button type={'submit'} onClick={handleSubmit} disabled={isInvalid} className={'btn btn-small btn-border'}>Zaloguj się</button>
    </div>
  </>
 );
}
export default withRouter(withFirebase(LogInForm));