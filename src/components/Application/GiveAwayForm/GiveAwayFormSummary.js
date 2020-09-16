import React, {useState, useContext} from 'react';
import {GiveAwayFormContext} from "./GiveAwayFormContext";

function GiveAwayFormSummary({ actualStep }) {
  
  const [formData, setFormData] = useContext(GiveAwayFormContext)
  
  // const [selectedOption4, setSelectedOption4] = useState({
  //   street: '',
  //   city: '',
  //   postcode: '',
  //   phone: ''
  // })
  
  
const handleInfo= () => {
  console.log(formData.localization);
}
  
 
  if (actualStep !== 5) return null
  
  return (
    <>
      <h1 className={'appPulpit__title'}>Podaj adres:</h1>
      <h1>{formData.localization}</h1>
    <button onClick={handleInfo} className={'btn btn-small'}>Show info in console</button>
    </>
  );
}

export default GiveAwayFormSummary;