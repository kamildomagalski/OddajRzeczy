import React, {useState} from 'react';

function ContactForm({ handleSend }) {
  const API = 'https://fer-api.coderslab.pl/v1/portfolio/contact';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [formErrors, setFormErrors] = useState({
    nameError: '',
    emailError: '',
    messageError: ''
  })
  
  function validate() {
    const re = /\S+@\S+\.\S+/;
    let isValidate = true;
    if (re.test(formData.email) !== true) {
      setFormErrors({
        ...formErrors,
        emailError: 'Podany email jest nieprawidłowy!'
      })
      isValidate = false
    } else if (formData.message.length < 120) {
      setFormErrors({
        ...formErrors,
        messageError: 'Wiadomość musi mieć co najmniej 120 znaków!'
      })
      isValidate = false
    } else if (
      formData.name.split(' ').length > 1 ||
      formData.name.length !== formData.name.trim().length) {
      setFormErrors({
        ...formErrors,
        nameError: 'Podane imię jest nieprawidłowe'
      })
      isValidate = false
    }
    return isValidate
  }
  
  function clearValidate() {
    setFormErrors({
      nameError: '',
      emailError: '',
      messageError: ''
    })
  }
  function clearForm(){
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }
  
  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    
    if (!validate()) return;
    clearValidate();
    
    fetch(`${API}`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
          if (response.ok === false) {
            throw new Error("Błąd sieci!");
          } else {
            handleSend(true);
            return response.json();
          }
        }
      )
      .catch(err => console.log(err))
      .then(clearForm)
  }
  
  
  return (
    <form onSubmit={handleSubmit} className={'contact__form'}>
      <div className={'contact__details'}>
        <div className={'contact__wrapper'}>
          <h3 className={'contact__subtitle'}>Wpisz swoje imię</h3>
          <input name={'name'}
                 onChange={handleChange}
                 value={formData.name}
                 type={'text'}
                 className={formErrors.nameError ? 'contact__input contact__name error': 'contact__input contact__name'}
                 placeholder={'Krzysztof'}/>
          <p className={'formError'}>{formErrors.nameError}</p>
        </div>
        <div className={'contact__wrapper'}>
          <h3 className={'contact__subtitle'}>Wpisz swój email</h3>
          <input name={'email'}
                 onChange={handleChange}
                 value={formData.email}
                 type={'text'}
                 className={formErrors.emailError ? 'contact__input contact__email error': 'contact__input contact__email'}
                 placeholder={'abc@xyz.pl'}/>
          <p className={'formError'}>{formErrors.emailError}</p>
        
        </div>
      </div>
      
      <div className={'contact__wrapper'}>
        <h3 className={'contact__subtitle'}>Wpisz swoją wiadomosć</h3>
        <textarea name={'message'}
                  onChange={handleChange}
                  value={formData.message}
                  className={formErrors.messageError ? 'contact__input contact__message error': 'contact__input contact__message '}
                  placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                  'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
                  'nisi ut aliquip ex ea commodo consequat.'}/>
        <p className={'formError'}>{formErrors.messageError}</p>
      
      </div>
      
      <button type={'submit'} className={'btn btn-small btn-contact'}>Wiślij</button>
    </form>
  );
}

export default ContactForm;