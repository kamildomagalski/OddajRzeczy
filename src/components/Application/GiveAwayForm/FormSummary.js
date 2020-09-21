import React, {useContext} from 'react';
import {FormContext} from "./FormContext";
import shirtIcon from '../../../assets/Icon-1.svg'
import arrowsIcon from '../../../assets/Icon-4.svg'


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
    <section className={'formSummary'}>
      <div className={'container'}>
        <h1 className={'formSummary__title'}>Podsumowanie Twojej darowizny</h1>
        <h2 className={'formSummary__subtitle'}> Oddajesz:</h2>
        <div className={'formSummary__giveAway'}>
          <img className={'formSummary__icons'} src={shirtIcon} alt={'Tshirt'}/>
          <p className={'formSummary__info'}>{formData.bags} worki/-ów, {formData.type},{helpGroups}</p>
        </div>
        <div className={'formSummary__giveAway'}>
          <img className={'formSummary__icons'} src={arrowsIcon} alt={'Arrows'}/>
          <p className={'formSummary__info'}>Dla lokalizacji: {formData.localization}, {formData.localizationSpecific}</p>
        </div>
        <div className={'formSummary__wrapper'}>
          <div className={'formSummary__column'}>
            <h2 className={'formSummary__subtitle'}>Adres odbioru:</h2>
            <h3 className={'formSummary__text'}>Ulica {formData.postData.street}</h3>
            <h3 className={'formSummary__text'}>Miasto {formData.postData.city}</h3>
            <h3 className={'formSummary__text'}>Kod pocztowy {formData.postData.postcode}</h3>
            <h3 className={'formSummary__text'}>Numer telefonu {formData.postData.phone}</h3>
          </div>
          <div className={'formSummary__column'}>
            <h2 className={'formSummary__subtitle'}>Termin odbioru:</h2>
            <h3 className={'formSummary__text'}>Data: {formData.courierData.date}</h3>
            <h3 className={'formSummary__text'}>Godzina: {formData.courierData.time}</h3>
            <h3 className={'formSummary__text'}>Uwagi: {formData.courierData.note}</h3>
          </div>
        </div>
        <div className={'formSummary__buttons'}>
          <button onClick={handlePrevPage} type={"button"}
                  className={'btn btn-small btn-border formSummary__btn'}>Wstecz
          </button>
          <button onClick={handleConfirm} type={"button"} className={'btn btn-small btn-border formStep__btn'}>Potwierdzam
          </button>
        </div>
      </div>
    </section>
  );
}

export default FormSummary;