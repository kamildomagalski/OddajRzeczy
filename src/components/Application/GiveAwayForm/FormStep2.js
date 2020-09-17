import React, {useState, useContext} from 'react';
import { FormContext } from "./FormContext";

function FormStep2() {
  const [bags, setBags] = useState('')
  const {formData, setFormData, setStep}= useContext(FormContext)
  
  const handleChange = (e) => {
    setBags(e.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData(prevState => ({
      ...prevState,
      bags: bags,
      step: 3
    }));
  }
  
  const handlePrevPage=() => {
    setStep(1)
  }
  
  if (formData.step !== 2) return null
  return (
    <>
      <h1 className={'appPulpit__title'}>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
      <form className={'appPulpit__form'} onSubmit={handleSubmit}>
        <label>
          Liczba 60l worków:
          <select value={bags} onChange={handleChange}>
            <option>Wybierz</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        <button onClick={handlePrevPage} type={"button"} className={'btn btn-small'}>Wstecz</button>
        <button onClick={handleSubmit} type={"submit"} className={'btn btn-small'}>Dalej</button>
      </form>
    </>
  );
}

export default FormStep2;