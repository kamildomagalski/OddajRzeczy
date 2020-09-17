import React, {useState, useContext} from 'react';
import { FormContext } from "./FormContext";

function FormStep3() {
  const {formData, setData, setFormData, setStep}= useContext(FormContext)
  
  const [localization, setLocalization] = useState(formData.localization)
  
  
  const handleChange = (e) => {
    setLocalization( e.target.value)
  }

  
  const handleSubmit = (event) => {
    event.preventDefault();
    // setFormData(prevState => ({
    //   ...prevState,
    //   localization: localization,
    //   step: 4
    // }))
    setData(localization);
    setStep(4);
  }
  
  const handlePrevPage=() => {
    setStep(2);
  }
  
  if (formData.step !== 3) return null
  
  return (
    <>
      <h1 className={'appPulpit__title'}>Lokalizacja:</h1>
      <form className={'appPulpit__form'} onSubmit={handleSubmit}>
        <label>Lokalizacja:
          <select value={localization} onChange={handleChange}>
            {/*<option value={null}>Wybierz</option>*/}
            <option value={'Poznań'}>Poznań</option>
            <option value={'Warszawa'}>Warszawa</option>
            <option value={'Kraków'}>Kraków</option>
            <option value={'Wrocław'}>Wrocław</option>
            <option value={'Katowice'}>Katowice</option>
          </select>
        </label>
        <h2>Komu chcesz pomóc:</h2>
        <label> Dzieciom
          <input name={'dzieciom'}
                 type={'checkbox'}
                 
          />
        </label>
        <label> bezdomnym
          <input name={'bezdomnym'}
                 type={'checkbox'}
                 
          />
        </label>
        <label> Niepełnosprawnym
          <input name={'niepełnosprawnym'}
                 type={'checkbox'}
                 
          />
        </label>
        <button onClick={handlePrevPage} type={"button"} className={'btn btn-small'}>Wstecz</button>
        <button onClick={handleSubmit} type={"submit"} className={'btn btn-small'}>Dalej</button>
      </form>
    </>
  );
}

export default FormStep3;