import React, { useContext } from 'react';
import { FormContext } from "./FormContext";
import shirtIcon from '../../../assets/Icon-1.svg'
import arrowsIcon from '../../../assets/Icon-4.svg'
import format from 'date-fns/format'
import { withFirebase } from "../../Firebase";
// import firebase from "firebase";

function FormSummary( {firebase}) {
  
  const {formData, setStep, clearFormData} = useContext(FormContext)
  
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
  const userId= firebase.auth.currentUser.uid;


  const handleConfirm = () => {
    firebase.user(userId).child('userDonations').push().update(formData)
      .then(clearFormData)
      .then(setStep(6))
    
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
          <p className={'formSummary__info'}>Dla
            lokalizacji: {formData.localization}, {formData.localizationSpecific}</p>
        </div>
        <div className={'formSummary__wrapper'}>
          <div className={'formSummary__column'}>
            <h2 className={'formSummary__subtitle'}>Adres odbioru:</h2>
            <table>
              <tbody>
              <tr className={'formSummary__tableRow'}>
                <td className={'formSummary__tableData formSummary__tableData-title'}>Ulica</td>
                <td className={'formSummary__tableData'}>{formData.postData.street}</td>
              </tr>
              <tr className={'formSummary__tableRow'}>
                <td className={'formSummary__tableData formSummary__tableData-title'}>Miasto</td>
                <td className={'formSummary__tableData'}>{formData.postData.city}</td>
              </tr>
              <tr className={'formSummary__tableRow'}>
                <td className={'formSummary__tableData formSummary__tableData-title'}>Kod pocztowy</td>
                <td className={'formSummary__tableData'}>{formData.postData.postcode}</td>
              </tr>
              <tr className={'formSummary__tableRow'}>
                <td className={'formSummary__tableData formSummary__tableData-title'}>Numer telefonu</td>
                <td className={'formSummary__tableData'}>{formData.postData.phone}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className={'formSummary__column'}>
            <h2 className={'formSummary__subtitle'}>Termin odbioru:</h2>
            <table>
              <tbody>
              <tr className={'formSummary__tableRow'}>
                <td className={'formSummary__tableData formSummary__tableData-title'}>Data</td>
                {/*<td className={'formSummary__tableData'}>{format(formData.courierData.date, "dd/MM/yyyy")}</td>*/}
              </tr>
              <tr className={'formSummary__tableRow'}>
                <td className={'formSummary__tableData formSummary__tableData-title'}>Godzina</td>
                {/*<td className={'formSummary__tableData'}>{format(formData.courierData.time, "HH:mm")}</td>*/}
              </tr>
              <tr className={'formSummary__tableRow'}>
                <td className={'formSummary__tableData formSummary__tableData-title'}>Uwagi dla kuriera</td>
                <td className={'formSummary__tableData'}>{formData.courierData.note}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={'formSummary__buttons'}>
          <button onClick={handlePrevPage} type={"button"}
                  className={'btn btn-small btn-border formSummary__btn'}>Wstecz
          </button>
          <button onClick={handleConfirm} type={"button"}
                  className={'btn btn-small btn-border formStep__btn'}>Potwierdzam
          </button>
        </div>
      </div>
    </section>
  );
}

export default withFirebase(FormSummary);