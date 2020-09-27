import React, {useState, useContext, useEffect} from 'react';
import {FormContext} from "./FormContext";

function FormStep1({value}) {
  
  const {formData, step, handleSetData, handleSetStep, clear} = useContext(FormContext)
  const [type, setType] = useState(formData.type)
  const [validateError, setValidateError] = useState('')


  useEffect(()=>{
    setType(formData.type)
  },[clear])
  
  const handleChange = (e) => {
    setType(e.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!validate()) return;
    clearValidate();
    
    handleSetData({
      type,
    })
    handleSetStep(2)
  }
  
  function validate() {
    let isValid = true
    if (type === '') {
      setValidateError('Musisz zaznaczyć jedno pole aby przejść dalej!')
      isValid = false
    }
    return isValid;
  }
  
  function validateMsgOff() {
   return  (type !== '')
  }
  
  function clearValidate(){
    setValidateError('')
  }
  
  if (step !== 1) return null
  
  return (
    <section className={'formStep1'}>
      <div className={'warning'}>
        <div className={'container'}>
          <h2 className={'warning__title'}>Ważne!</h2>
          <p className={'warning__text'}>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu
            najlepiej je przekazać.</p>
        </div>
      </div>
      <div className={'container'}>
        <p className={'formStep1__counter'}>Krok {step}/4</p>
        <h1 className={'formStep1__title'}>Zaznacz co chcesz oddać</h1>
        <form className={'formStep1__form'} onSubmit={handleSubmit}>
          <label className={'formStep1__label'}>
            <input type={'radio'} value={'ubrania do ponownego użycia'}
                   checked={type === 'ubrania do ponownego użycia'}
                   onChange={handleChange}
                   className={'formStep1__radio'}/>
            <span className={'customRadio'}/>
            ubrania do ponownego użycia
          </label>
          <label className={'formStep1__label'}>
            <input type={'radio'} value={'ubrania do wyrzucenia'}
                   checked={type === 'ubrania do wyrzucenia'}
                   onChange={handleChange}
                   className={'formStep1__radio'}/>
            <span className={'customRadio'}/>
            ubrania do wyrzucenia
          </label>
          <label className={'formStep1__label'}>
            <input type={'radio'} value={'zabawki'}
                   checked={type === 'zabawki'}
                   onChange={handleChange}
                   className={'formStep1__radio'}/>
            <span className={'customRadio'}/>
            zabawki
          </label>
          <label className={'formStep1__label'}>
            <input type={'radio'} value={'książki'}
                   checked={type === 'książki'}
                   onChange={handleChange}
                   className={'formStep1__radio'}/>
            <span className={'customRadio'}/>
            książki
          </label>
          <label className={'formStep1__label'}>
            <input type={'radio'} value={'inne'}
                   checked={type === 'inne'}
                   onChange={handleChange}
                   className={'formStep1__radio'}/>
            <span className={'customRadio'}/>
            inne
          </label>
          <p className={!validateMsgOff() ? 'warning__error' : 'warning__error disabled' }>{validateError}</p>
          <div className={'formStep__buttons'}>
            <button onClick={handleSubmit} type={"submit"} className={'btn btn-small btn-border formStep__btn'}>Dalej
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FormStep1;