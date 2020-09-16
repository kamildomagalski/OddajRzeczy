import React, {useState, useContext} from 'react';
import { GiveAwayFormContext } from "./GiveAwayFormContext";

function GiveAwayFormStep2({actualStep}) {
  // const [selectedOption2, setSelectedOption2] = useState('')
  const [formData, setFormData]= useContext(GiveAwayFormContext)
  
  const handleChange = (e) => {
    setFormData(prevState => {
      return {
        ...prevState,
        bags: e.target.value
      }
    })
    // setSelectedOption2(e.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  
  if (actualStep !== 2) return null
  return (
    <>
      <h1 className={'appPulpit__title'}>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
      <form className={'appPulpit__form'}>
        <label>
          Liczba 60l worków:
          <select value={formData.bags} onChange={handleChange}>
            <option>Wybierz</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        
        </label>
      
      
      </form>
    </>
  );
}

export default GiveAwayFormStep2;