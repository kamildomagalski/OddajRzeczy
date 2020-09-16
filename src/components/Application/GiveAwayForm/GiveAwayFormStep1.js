import React, {useState, useContext} from 'react';
import { GiveAwayFormContext } from "./GiveAwayFormContext";

function GiveAwayFormStep1({ actualStep }) {
  
  const [formData, setFormData]= useContext(GiveAwayFormContext)
  
  // const [selectedOption, setSelectedOption] = useState(null)
  
  
  const handleChange = (e) => {
    setFormData(prevState => {
      return {
        ...prevState,
        type: e.target.value
      }
    })
    // setSelectedOption(e.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  if(actualStep !== 1) return null
  
  return (
    <>
      <h1 className={'appPulpit__title'}>Zaznacz co chcesz oddać</h1>
      <form className={'appPulpit__form'}>
        <label>
          <input type={'radio'} value={'ubrania do ponownego użycia'}
                 checked={formData.type === 'ubrania do ponownego użycia'}
                 onChange={handleChange}/>
          Ubrania do ponownego użycia
        </label>
        <label>
          <input type={'radio'} value={'ubrania do wyrzucenia'}
                 checked={formData.type === 'ubrania do wyrzucenia'}
                 onChange={handleChange}/>
          Ubrania do wyrzucenia
        </label>
        <label>
          <input type={'radio'} value={'zabawki'}
                 checked={formData.type === 'zabawki'}
                 onChange={handleChange}/>
          Zabawki
        </label>
        <label>
          <input type={'radio'} value={'książki'}
                 checked={formData.type === 'książki'}
                 onChange={handleChange}/>
          Książki
        </label>
        <label>
          <input type={'radio'} value={'inne'}
                 checked={formData.type === 'inne'}
                 onChange={handleChange}/>
          Inne
        </label>
      </form>
      
    </>
  );
}

export default GiveAwayFormStep1;