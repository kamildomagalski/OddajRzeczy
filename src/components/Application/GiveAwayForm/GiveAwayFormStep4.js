import React, {useState, useContext} from 'react';
import {GiveAwayFormContext} from "./GiveAwayFormContext";

function GiveAwayFormStep1({actualStep}) {
  
  const [formData, setFormData] = useContext(GiveAwayFormContext)
  
  // const [selectedOption4, setSelectedOption4] = useState({
  //   street: '',
  //   city: '',
  //   postcode: '',
  //   phone: ''
  // })
  
  
  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData(prevState => {
      return {
        ...prevState,
        postData: {
          [name]: value
        }
      }
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  if (actualStep !== 4) return null
  
  return (
    <>
      <h1 className={'appPulpit__title'}>Podaj adres:</h1>
      <form className={'appPulpit__form'}>
        <label>
          Ulica:
          <input name={'street'}
                 value={formData.postData.street}
                 onChange={handleChange}
                 type={'text'}/>
        </label>
        <label>
          Miasto:
          <input name={'city'}
                 value={formData.postData.city}
                 onChange={handleChange}
                 type={'text'}/>
        </label>
        <label>
          Kod pocztowy:
          <input name={'postcode'}
                 value={formData.postData.postcode}
                 onChange={handleChange}
                 type={'text'}/>
        </label>
        <label>
          Numer telefonu:
          <input name={'phone'}
                 value={formData.postData.phone}
                 onChange={handleChange}
                 type={'text'}/>
        </label>
      </form>
    
    </>
  );
}

export default GiveAwayFormStep1;