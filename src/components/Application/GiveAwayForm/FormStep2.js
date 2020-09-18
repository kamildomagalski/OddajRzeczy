import React, {useState, useContext} from 'react';
import {FormContext} from "./FormContext";

function FormStep2() {
  const [bags, setBags] = useState('')
  const {formData, setFormData, setStep} = useContext(FormContext)
  
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
  
  const handlePrevPage = () => {
    setStep(1)
  }
  
  if (formData.step !== 2) return null
  return (
    <section className={'formStep'}>
      <div className={'warning'}>
        <div className={'container'}>
          <h2 className={'warning__title'}>Ważne!</h2>
          <p className={'warning__text'}>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak
            poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
        </div>
      </div>
      <div className={'container'}>
        <p className={'formStep__counter'}>Krok {formData.step}/4</p>
        <h1 className={'formStep__title'}>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
        <form className={'formStep__form'} onSubmit={handleSubmit}>
          <label className={'formStep__label'}>
            Liczba 60l worków:
            <select value={bags} onChange={handleChange} className={'formStep__select'}>
              <option>Wybierz</option>
              <option value={1} className={'formStep__option'}>1</option>
              <option value={2} className={'formStep__option'}>2</option>
              <option value={3} className={'formStep__option'}>3</option>
              <option value={4} className={'formStep__option'}>4</option>
              <option value={5} className={'formStep__option'}>5</option>
            </select>
          </label>
          <div className={'formStep__buttons'}>
            <button onClick={handlePrevPage} type={"button"} className={'btn btn-small btn-border formStep__btn'}>Wstecz</button>
            <button onClick={handleSubmit} type={"submit"} className={'btn btn-small btn-border formStep__btn'}>Dalej</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FormStep2;