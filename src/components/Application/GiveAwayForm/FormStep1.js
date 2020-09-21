import React, {useState, useContext} from 'react';
import {FormContext} from "./FormContext";

function FormStep1() {
  
  const {formData, handleSetData} = useContext(FormContext)
  
  const [type, setType] = useState(formData.type)
  
  
  const handleChange = (e) => {
    setType(e.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSetData({
      type,
      step: 2
    })
  }
  
  
  if (formData.step !== 1) return null
  
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
        <p className={'formStep1__counter'}>Krok {formData.step}/4</p>
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