import React, {useState} from 'react';
import {Link, withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";


function SignUpForm({firebase, history}) {
  
  const [signUpState, setSignUpState] = useState({
    email: '',
    password1: '',
    password2: '',
    error: null
  });
  
  
  const handleChange = (event) => {
    const {name, value} = event.target;
    setSignUpState(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  
  const handleSubmit = (event) =>{
    const {email, password1}=signUpState;
    
    event.preventDefault();
    firebase
      .doCreateUserWithEmailAndPassword(email, password1)
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
  
  const isInvalid=
    signUpState.password1 !== signUpState.password2 ||
    signUpState.password1.length < 6 ||
    signUpState.email === '';
  return (
    <>
      <form className={'signup__form'}>
        <div className={'signup__wrapper'}>
          <p className={'signup__subtitle'}>Email</p>
          <input name={'email'}
                 value={signUpState.email}
                 onChange={handleChange}
                 type={'text'}
                 className={'signup__input signup__email'}/>
        </div>
        <div className={'signup__wrapper'}>
          <p className={'signup__subtitle'}>Hasło</p>
          <input name={'password1'}
                 value={signUpState.password1}
                 onChange={handleChange}
                 type={'password'}
                 className={'login__input signup__password'}/>
        </div>
        <div className={'signup__wrapper'}>
          <p className={'signup__subtitle'}>Powtórz hasło</p>
          <input name={'password2'}
                 value={signUpState.password2}
                 onChange={handleChange}
                 type={'password'}
                 className={'signup__input signup__password'}/>
        </div>
        {signUpState.error && <p>{signUpState.error.message}</p>}
      </form>
      <div className={'signup__buttons'}>
        <Link to={'/login'} className={'btn btn-small btn-noBorder'}>Zaloguj się</Link>
        <button type={'submit'} onClick={handleSubmit} disabled={isInvalid} className={'btn btn-small btn-border'}>Załóż konto</button>
      </div>
    </>
  );
}

export default withRouter(withFirebase(SignUpForm));