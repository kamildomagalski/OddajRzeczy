import React, {useState, useContext} from 'react';
import {FormContext} from "./FormContext";

function FormStep2() {
  const [bags, setBags] = useState('')
  const {formData, step, handleSetStep, handleSetData} = useContext(FormContext)
  const [validateError, setValidateError] = useState('')
  
  const handleChange = (e) => {
    setBags(e.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (!validate()) return;
    clearValidate();
    
    handleSetData({
      bags,
    })
    handleSetStep(3)
  }
  
  const handlePrevPage = () => {
    handleSetStep(1)
  }
  
  function validate() {
    let isValid = true
    if (bags === '') {
      setValidateError('Wybierz ilość worków aby przejść dalej')
      isValid = false
    }
    return isValid;
  }
  
  function validateMsgOff() {
    return  (bags !== '')
  }
  
  function clearValidate(){
    setValidateError('')
  }
  
  if (step !== 2) return null
  
  return (
    <section className={'formStep2'}>
      <div className={'warning'}>
        <div className={'container'}>
          <h2 className={'warning__title'}>Ważne!</h2>
          <p className={'warning__text'}>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak
            poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
        </div>
      </div>
      <div className={'container'}>
        <p className={'formStep2__counter'}>Krok {step}/4</p>
        <h1 className={'formStep2__title'}>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
        <form className={'formStep2__form'} onSubmit={handleSubmit}>
          <label className={'formStep2__label'}>
            Liczba 60l worków:
            <select value={bags} onChange={handleChange} className={'formStep2__select'}>
              {/*<option>--wybierz--</option>*/}
              <option value={1} className={'formStep2__option'}>1</option>
              <option value={2} className={'formStep2__option'}>2</option>
              <option value={3} className={'formStep2__option'}>3</option>
              <option value={4} className={'formStep2__option'}>4</option>
              <option value={5} className={'formStep2__option'}>5</option>
            </select>
          </label>
          <p className={!validateMsgOff() ? 'warning__error' : 'warning__error disabled' }>{validateError}</p>
          <div className={'formStep__buttons'}>
            <button onClick={handlePrevPage} type={"button"}
                    className={'btn btn-small btn-border formStep__btn'}>Wstecz
            </button>
            <button onClick={handleSubmit} type={"submit"} className={'btn btn-small btn-border formStep__btn'}>Dalej
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FormStep2;