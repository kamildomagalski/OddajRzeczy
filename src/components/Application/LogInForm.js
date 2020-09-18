import React, {useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import {withFirebase} from "../Firebase";


function LogInForm({firebase, history}) {
  const [logInState, setLogInState] = useState({
    email: '',
    password: '',
    error: null
  })
  const [logInErrors, setLogInErrors] = useState({
    emailError: '',
    passError: ''
  })
  
  const handleChange = (event) => {
    const {name, value} = event.target;
    setLogInState(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const {email, password} = logInState;
    
    if (!validate()) return;
    clearValidate();
    
    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setLogInState({
          email: '',
          password: '',
          error: null
        });
        history.push('/');
      })
      .catch(error => {
        setLogInState({
          email: '',
          password: '',
          error
        })
      })
  }
  
  
  function validate() {
    const re = /\S+@\S+\.\S+/;
    let isValidate = true;
    if (re.test(logInState.email) !== true) {
      setLogInErrors({
        ...logInErrors,
        emailError: 'Email nieprawidłowy!'
      })
      isValidate = false
    } else if (logInState.password.length < 6 ||
      logInErrors.password === ''){
      setLogInErrors({
        ...logInErrors,
        passError: 'Hasło jest za krótkie!'
      })
      isValidate = false
    }
    
    return isValidate
  }
  function clearValidate() {
    setLogInErrors({
      emailError: '',
      passError: ''
    })
  }
  
  return (
    <>
      <form className={'login__form'} onSubmit={handleSubmit}>
        <div className={'login__wrapper'}>
          <p className={'login__subtitle'}>Email</p>
          <input name={'email'}
                 value={logInState.email}
                 onChange={handleChange}
                 type={'text'}
                 className={logInErrors.emailError ? 'login__input error': 'login__input'}/>
          <p className={'logError'}>{logInErrors.emailError}</p>
        </div>
        <div className={'login__wrapper'}>
          <p className={'login__subtitle'}>Hasło</p>
          <input name={'password'}
                 value={logInState.password}
                 onChange={handleChange}
                 type={'password'}
                 className={logInErrors.passError ? 'login__input error': 'login__input'}/>
          <p className={'logError'}>{logInErrors.passError}</p>
        </div>
        {logInState.error && <p className={'firebaseError'}>{logInState.error.message}</p>}
        <div className={'login__buttons'}>
          <Link to={'/signup'} className={'btn btn-small btn-noBorder'}>Załóż konto</Link>
          <button type={'submit'} onClick={handleSubmit}
                  className={'btn btn-small btn-border'}>Zaloguj się
          </button>
        </div>
      </form>
    </>
  );
}

export default withRouter(withFirebase(LogInForm));