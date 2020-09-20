import React, {useContext} from 'react';
import {FormContext} from "./FormContext";

function FormSummary() {
  
  const {formData, setStep} = useContext(FormContext)
  
  const translateHelpGroup = {
    singleMother: 'samotnym matkom',
    children: 'dzieciom',
    homeless: 'bezdomnym',
    disabledPeople: 'niepełnosprawnym',
    elderly: 'osobom starszym'
  }
  
  const helpGroups = Object.keys(formData.helpGroups)
    .filter(el => formData.helpGroups[el])
    .map(el => translateHelpGroup[el])
    .join(", ")
  
  const handlePrevPage = () => {
    setStep(4);
  }
  
  const handleConfirm = () =>{
    setStep(6)
  }
  if (formData.step !== 5) return null

  return (
    <section className={'formStep'}>
      <div className={'container'}>
        <h1 className={'formStep__title'}>Podsumowanie Twojej darowizny</h1>
        <h2 className={'formStep__subtitle'}> Oddajesz:</h2>
        <p className={'formStep__text'}>{formData.bags} worki/-ów, {formData.type},{helpGroups}</p>
        <p className={'formStep__text'}>Dla lokalizacji: {formData.localization}, {formData.localizationSpecific}</p>
        <div className={'formStep__wrapper'}>
          
          <div className={'formStep__column'}>
            <h2 className={'formStep__subtitle'}>Adres odbioru:</h2>
            <h3 className={'formStep__text'}>Ulica {formData.postData.street}</h3>
            <h3 className={'formStep__text'}>Miasto {formData.postData.city}</h3>
            <h3 className={'formStep__text'}>Kod pocztowy {formData.postData.postcode}</h3>
            <h3 className={'formStep__text'}>Numer telefonu {formData.postData.phone}</h3>
          </div>
          <div className={'formStep__column'}>
            <h2 className={'formStep__subtitle'}>Termin odbioru:</h2>
            <h3 className={'formStep__text'}>Data: {formData.courierData.date}</h3>
            <h3 className={'formStep__text'}>Godzina: {formData.courierData.time}</h3>
            <h3 className={'formStep__text'}>Uwagi: {formData.courierData.note}</h3>
          </div>
        </div>
        <div className={'formStep__buttons'}>
          <button onClick={handlePrevPage} type={"button"}
                  className={'btn btn-small btn-border formStep__btn'}>Wstecz
          </button>
          <button onClick={handleConfirm} type={"button"} className={'btn btn-small btn-border formStep__btn'}>Potwierdzam
          </button>
        </div>
      </div>
    </section>
  );
}

export default FormSummary;