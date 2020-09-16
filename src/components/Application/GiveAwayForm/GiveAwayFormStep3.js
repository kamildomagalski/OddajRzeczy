import React, {useState, useContext} from 'react';
import { GiveAwayFormContext } from "./GiveAwayFormContext";

function GiveAwayFormStep1({ actualStep }) {
  
  const [formData, setFormData]= useContext(GiveAwayFormContext)
  
  // const [selectedOption3, setSelectedOption3] = useState(null)
  
  
  const handleChange = (e) => {
    setFormData(prevState => {
      return {
        ...prevState,
        localization: e.target.value
      }
    })
    // setSelectedOption3(e.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  if(actualStep !== 3) return null
  
  return (
    <>
      <h1 className={'appPulpit__title'}>Lokalizacja:</h1>
      <form className={'appPulpit__form'}>
        <label>
          <select value={formData.localization} onChange={handleChange}>
            <option>Wybierz</option>
            <option value={'Poznań'}>Poznań</option>
            <option value={'Warszawa'}>Warszawa</option>
            <option value={'Kraków'}>Kraków</option>
            <option value={'Wrocław'}>Wrocław</option>
            <option value={'Katowice'}>Katowice</option>
          </select>
      
        </label>
    
    
      </form>
    </>
  );
}

export default GiveAwayFormStep1;