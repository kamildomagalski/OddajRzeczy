import React, {useState, useContext} from 'react';
import {FormContext} from "./FormContext";

function FormStep3() {
  const {formData, step, handleSetData, handleSetStep} = useContext(FormContext)
  
  const [localization, setLocalization] = useState(formData.localization)
  const [localizationSpecific, setLocalizationSpecific] = useState(formData.localizationSpecific)
  const [helpGroups, setHelpGroups] = useState(formData.helpGroups)
  const [validateErrors, setValidateErrors] = useState({
    localError: '',
    helpGroupError: ''
  })
  
  const handleLocalChange = (e) => {
    setLocalization(e.target.value)
  }
  const handleLocalSpecChange = (e) => {
    setLocalizationSpecific(e.target.value)
  }
  const handleCheckboxChange = (e) => {
    const name = e.target.name
    const value = e.target.checked
    
    setHelpGroups(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    clearValidate();
    
    handleSetData({
      helpGroups,
      localization,
      localizationSpecific
    })
    handleSetStep(4)
  }
  
  const handlePrevPage = () => {
    handleSetStep(2);
  }
  
  function validate() {
    let isValid = true;
    if (localizationSpecific === ''
      && (localization === '' || localization === 'wybierz')) {
      setValidateErrors(prevState => ({
        ...prevState,
        localError: 'Wybierz miasto albo wpisz konkretną organizację aby przejść dalej'
      }))
      isValid = false;
    }
    if (helpGroups.children === false &&
      helpGroups.disabledPeople === false &&
      helpGroups.elderly === false &&
      helpGroups.homeless === false &&
      helpGroups.singleMother === false) {
      setValidateErrors(prevState => ({
        ...prevState,
        helpGroupError: 'Zaznacz przynajmniej jedną grupę aby przejść dalej'
      }))
      isValid = false;
    }
    return isValid;
  }
  
  function clearValidate() {
    setValidateErrors({
      localError: '',
      helpGroupError: '',
      localSpecError: ''
    })
  }
  
  function validateLocalMsgOff() {
    return (localization !== ''
      && localization !== 'wybierz')
  }
  
  function validateHelpGroupsMsgOff() {
    return (helpGroups.children === false &&
      helpGroups.disabledPeople === false &&
      helpGroups.elderly === false &&
      helpGroups.homeless === false &&
      helpGroups.singleMother === false)
  }
  
  if (step !== 3) return null
  
  return (
    <section className={'formStep3'}>
      <div className={'warning'}>
        <div className={'container'}>
          <h2 className={'warning__title'}>Ważne!</h2>
          <p className={'warning__text'}>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
            wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
        </div>
      </div>
      <div className={'container'}>
        <p className={'formStep3__counter'}>Krok {step}/4</p>
        <h1 className={'formStep3__title'}>Lokalizacja:</h1>
        <form className={'formStep3__form'} onSubmit={handleSubmit}>
          <label className={'formStep3__label'}>Lokalizacja:
            <select value={localization} onChange={handleLocalChange} className={'formStep3__select'}>
              <option value={'wybierz'}>wybierz</option>
              <option value={'Poznań'} className={'formStep3__option'}>Poznań</option>
              <option value={'Warszawa'} className={'formStep3__option'}>Warszawa</option>
              <option value={'Kraków'} className={'formStep3__option'}>Kraków</option>
              <option value={'Wrocław'} className={'formStep3__option'}>Wrocław</option>
              <option value={'Katowice'} className={'formStep3__option'}>Katowice</option>
            </select>
          </label>
          <p
            className={!validateLocalMsgOff() ? 'warning__error' : 'warning__error disabled'}>{validateErrors.localError}</p>
          <h2 className={'formStep3__subtitle'}>Komu chcesz pomóc?</h2>
          <div className={'formStep3__checkboxWrapper'}>
            <label className={'formStep3__label'}>
              <input name={'children'}
                     checked={helpGroups.children}
                     type={'checkbox'}
                     onChange={handleCheckboxChange}
                     className={'formStep3__checkbox'}
              />
              <span className={'customCheckbox'}>dzieciom</span>
            </label>
            <label className={'formStep3__label'}>
              <input name={'singleMother'}
                     checked={helpGroups.singleMother}
                     type={'checkbox'}
                     onChange={handleCheckboxChange}
                     className={'formStep3__checkbox'}
              />
              <span className={'customCheckbox'}>samotnym matkom</span>
            </label>
            <label className={'formStep3__label'}>
              <input name={'homeless'}
                     checked={helpGroups.homeless}
                     type={'checkbox'}
                     onChange={handleCheckboxChange}
                     className={'formStep3__checkbox'}/>
              <span className={'customCheckbox'}>bezdomnym</span>
            </label>
            <label className={'formStep3__label'}>
              <input name={'disabledPeople'}
                     checked={helpGroups.disabledPeople}
                     type={'checkbox'}
                     onChange={handleCheckboxChange}
                     className={'formStep3__checkbox'}/>
              <span className={'customCheckbox'}>niepełnosprawnym</span>
            </label>
            <label className={'formStep3__label'}>
              <input name={'elderly'}
                     checked={helpGroups.elderly}
                     type={'checkbox'}
                     onChange={handleCheckboxChange}
                     className={'formStep3__checkbox'}/>
              <span className={'customCheckbox'}>osobom starszym</span>
            </label>
          </div>
          <p
            className={validateHelpGroupsMsgOff() ? 'warning__error' : 'warning__error disabled'}>{validateErrors.helpGroupError}</p>
          <h2 className={'formStep3__subtitle'}>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h2>
          <label className={'formStep3__label formStep__label-localSpec'}>
            <input name={'localizationSpecific'}
                   value={localizationSpecific}
                   type={'text'}
                   onChange={handleLocalSpecChange}
                   className={'formStep3__input'}/>
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