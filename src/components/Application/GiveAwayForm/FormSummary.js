import React, { useContext } from 'react';
import { FormContext } from "./FormContext";

function FormSummary() {
  
  const {formData} = useContext(FormContext)
  
  if (formData.step !== 5) return null
  
  return (
    <>
      <h1 className={'appPulpit__title'}>Podsumowanie</h1>
      <h2> Oddajesz:</h2>
      <h3>{formData.bags} worków, {formData.type},
        {formData.helpGroups.map((el)=> {
          return el
        })}</h3>
      <h3>Dla lokalizacji: {formData.localization}</h3>
      <div>
        <h2>Adres odbioru:</h2>
        <h3>Ulica: {formData.postData.street}</h3>
        <h3>Miasto: {formData.postData.city}</h3>
        <h3>Kod pocztowy: {formData.postData.postalCode}</h3>
        <h3>Numer telefonu: {formData.postData.phone}</h3>
      </div>
      <div>
        <h2>Termin odbioru:</h2>
        <h3>Data: {formData.courierData.date}</h3>
        <h3>Godzina: {formData.courierData.time}</h3>
        <h3>Uwagi: {formData.courierData.note}</h3>
      </div>

    </>
  );
}

export default FormSummary;