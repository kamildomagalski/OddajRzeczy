import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";


function SignUpForm({ firebase, history }) {
  
  const [signUpState, setSignUpState] = useState({
    email: '',
    password1: '',
    password2: '',
    error: null
  });
  const [signUpErrors, setSignUpErrors] = useState({
    emailError: '',
    passError: ''
  })
  
  
  const handleChange = (event) => {
    const {name, value} = event.target;
    setSignUpState(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const {email, password1} = signUpState;
    
    if (!validate()) return;
    clearValidate();
    firebase
      .doCreateUserWithEmailAndPassword(email, password1)
      .then(authUser => {
        //create a user in Firebase realtime database
        return firebase
          .user(authUser.user.uid)
          .set({
            email: email
          })
      })
      .then(authUser => {
        setSignUpState({
          email: '',
          password1: '',
          password2: '',
          error: null
        });
        history.push('/login')
      })
      .catch(error => {
        setSignUpState({
          email: '',
          password1: '',
          password2: '',
          error
        });
      })
  }
  
  function validate() {
    const re = /\S+@\S+\.\S+/;
    let isValidate = true;
    if (re.test(signUpState.email) !== true) {
      setSignUpErrors({
        ...signUpErrors,
        emailError: 'Email nieprawidłowy!'
      })
      isValidate = false
    } else if (signUpState.password1.length < 6 ||
      signUpErrors.password1 === '' ||
      signUpErrors.password2 === '' ||
      signUpState.password1 !== signUpState.password2) {
      setSignUpErrors({
        ...signUpErrors,
        passError: 'Hasło za krótkie lub hasła nie pasują do siebie'
      })
      isValidate = false
    }
    
    return isValidate
  }
  function clearValidate() {
    setSignUpErrors({
      emailError: '',
      passError: ''
    })
  }
  
  
  return (
    <>
      <form className={'signup__form'} onSubmit={handleSubmit}>
        
        <div className={'signup__wrapper'}>
          <p className={'signup__subtitle'}>Email</p>
          <input name={'email'}
                 value={signUpState.email}
                 onChange={handleChange}
                 type={'text'}
                 className={signUpErrors.emailError ? 'signup__input error': 'signup__input'}/>
          <p className={'logError'}>{signUpErrors.emailError}</p>
        </div>
        
        <div className={'signup__wrapper'}>
          <p className={'signup__subtitle'}>Hasło</p>
          <input name={'password1'}
                 value={signUpState.password1}
                 onChange={handleChange}
                 type={'password'}
                 className={signUpErrors.passError ? 'signup__input error': 'signup__input'}/>
        </div>
        
        <div className={'signup__wrapper'}>
          <p className={'signup__subtitle'}>Powtórz hasło</p>
          <input name={'password2'}
                 value={signUpState.password2}
                 onChange={handleChange}
                 type={'password'}
                 className={signUpErrors.passError ? 'signup__input error': 'signup__input'}/>
          <p className={'logError'}>{signUpErrors.passError}</p>
        </div>
        
        {signUpState.error && <p className={'firebaseError'}>{signUpState.error.message}</p>}
        <div className={'signup__buttons'}>
          <Link to={'/login'} className={'btn btn-small btn-noBorder'}>Zaloguj się</Link>
          <button type="submit"
                  disabled={false}
                  className={'btn btn-small btn-border'}>Załóż konto
          </button>
        </div>
      </form>
    </>
  );
}

export default withRouter(withFirebase(SignUpForm));