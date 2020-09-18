import React, {useState, useContext} from 'react';
import {FormContext} from "./FormContext";

function FormStep3() {
  const {formData, setData, setFormData, setStep} = useContext(FormContext)
  
  const [localization, setLocalization] = useState(formData.localization)
  const [localizationSpecific, setLocalizationSpecific] = useState(formData.localizationSpecific)
  const [helpGroups, setHelpGroups] = useState(formData.helpGroups)
  
  const handleChange = (e) => {
    setLocalization(e.target.value)
    setLocalizationSpecific(e.target.value)
  }
  const handleCheckboxChange = (e) => {
   const name = e.target.name
    const value = e.target.checked
    
    setHelpGroups({
      [name] : value
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // setFormData(prevState => ({
    //   ...prevState,
    //   localization: localization,
    //   step: 4
    // }))
    setData(localization);
    setData(localizationSpecific);
    setData(helpGroups)
    setStep(4);
  }
  
  const handlePrevPage = () => {
    setStep(2);
  }
  
  if (formData.step !== 3) return null
  
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
        <h1 className={'formStep__title'}>Lokalizacja:</h1>
        <form className={'formStep__form'} onSubmit={handleSubmit}>
          <label className={'formStep__label'}>Lokalizacja:
            <select value={localization} onChange={handleChange} className={'formStep__select'}>
              {/*<option value={null}>Wybierz</option>*/}
              <option value={'Poznań'} className={'formStep__option'}>Poznań</option>
              <option value={'Warszawa'} className={'formStep__option'}>Warszawa</option>
              <option value={'Kraków'} className={'formStep__option'}>Kraków</option>
              <option value={'Wrocław'} className={'formStep__option'}>Wrocław</option>
              <option value={'Katowice'} className={'formStep__option'}>Katowice</option>
            </select>
          </label>
          <h2 className={'formStep__subtitle'}>Komu chcesz pomóc?</h2>
          <label className={'formStep__label'}> dzieciom
            <input name={'dzieciom'}
                   type={'checkbox'}
            />
          </label>
          <label className={'formStep__label'}> samotnym matkom
            <input name={'bezdomnym'}
                   type={'checkbox'}
            />
          </label>
          <label className={'formStep__label'}> bezdomnym
            <input name={'niepełnosprawnym'}
                   type={'checkbox'}
            />
          </label>
          <label className={'formStep__label'}> niepełnosprawnym
            <input name={'niepełnosprawnym'}
                   type={'checkbox'}
            />
          </label>
          <label className={'formStep__label'}> osobom starszym
            <input name={'niepełnosprawnym'}
                   type={'checkbox'}
            />
          </label>
          <h2 className={'formStep__subtitle'}>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h2>
          <label className={'formStep__label'}>
            <input name={'localizationSpecific'}
                   value={localizationSpecific}
                   type={'text'}
                   onChange={handleChange}
                   className={'formStep__input'}
            />
          </label>
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

export default FormStep3;