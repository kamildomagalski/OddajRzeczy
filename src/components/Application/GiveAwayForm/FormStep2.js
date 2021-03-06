import React, {useState, useContext, useEffect} from 'react';
import {FormContext} from "./FormContext";
import Select from "../../logic_components/Select";

function FormStep2() {
  const {formData, step, handleSetStep, handleSetData, clear} = useContext(FormContext)
  const [bags, setBags] = useState(formData.bags)
  const [validateError, setValidateError] = useState('')
  
  useEffect(()=>{
    setBags(formData.bags)
  },[clear])
  
  const handleChange = (value) => {
    setBags(value)
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
    if (bags === '' || bags === 'wybierz') {
      setValidateError('Wybierz ilość worków aby przejść dalej')
      isValid = false
    }
    return isValid;
  }
  
  function validateMsgOff() {
    return  (bags !== ''
    && bags !== 'wybierz')
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
          <div className={'formStep2__label'}>
            <p>Liczba 60l worków:</p>
            <Select options={[1,2,3,4,5]} selectValue={bags} changeHandler={handleChange} className={'selectStep2'}/>
          </div>
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