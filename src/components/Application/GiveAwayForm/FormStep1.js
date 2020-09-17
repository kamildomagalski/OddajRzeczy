import React, {useState, useContext} from 'react';
import { FormContext } from "./FormContext";

function FormStep1() {
  
  const {formData, setFormData}= useContext(FormContext)
  
  const [type, setType] = useState(formData.type)
  
  
  const handleChange = (e) => {
    setType(e.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData(prevState => ({
      ...prevState,
      type: type,
      step: 2
    }));
  }
  

  if(formData.step !== 1) return null
  
  return (
    <>
      <h1 className={'appPulpit__title'}>Zaznacz co chcesz oddać</h1>
      <form className={'appPulpit__form'} onSubmit={handleSubmit}>
        <label>
          <input type={'radio'} value={'ubrania do ponownego użycia'}
                 checked={type === 'ubrania do ponownego użycia'}
                 onChange={handleChange}/>
          Ubrania do ponownego użycia
        </label>
        <label>
          <input type={'radio'} value={'ubrania do wyrzucenia'}
                 checked={type === 'ubrania do wyrzucenia'}
                 onChange={handleChange}/>
          Ubrania do wyrzucenia
        </label>
        <label>
          <input type={'radio'} value={'zabawki'}
                 checked={type === 'zabawki'}
                 onChange={handleChange}/>
          Zabawki
        </label>
        <label>
          <input type={'radio'} value={'książki'}
                 checked={type === 'książki'}
                 onChange={handleChange}/>
          Książki
        </label>
        <label>
          <input type={'radio'} value={'inne'}
                 checked={type === 'inne'}
                 onChange={handleChange}/>
          Inne
        </label>
      </form>
      <button onClick={handleSubmit} type={"submit"} className={'btn btn-small'}>Dalej</button>
    </>
  );
}

export default FormStep1;