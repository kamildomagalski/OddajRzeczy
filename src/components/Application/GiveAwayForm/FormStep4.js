import React, {useState, useContext} from 'react';
import {FormContext} from "./FormContext";

function FormStep4() {
  const {formData, setStep, handleSetData} = useContext(FormContext)
  const [postData, setPostData] = useState(formData.postData)
  const [courierData, setCourierData] = useState(formData.courierData)
  
  
  const handlePostChange = (event) => {
    const {name, value} = event.target;
    setPostData(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  const handleCourierChange = (event) => {
    const {name, value} = event.target;
    setCourierData(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSetData({
      postData: {
        ...postData
      },
      courierData: {
        ...courierData
      },
      step: 5
    })
  }
  const handlePrevPage = () => {
    setStep(3);
  }
  if (formData.step !== 4) return null
  
  return (
    <section className={'formStep4'}>
      <div className={'warning'}>
        <div className={'container'}>
          <h2 className={'warning__title'}>Ważne!</h2>
          <p className={'warning__text'}>Podaj adres oraz termin odbioru rzeczy.</p>
        </div>
      </div>
      <div className={'container'}>
        <p className={'formStep4__counter'}>Krok {formData.step}/4</p>
        <h1 className={'formStep4__title'}>Podaj adres oraz termin odbioru rzecz przez kuriera</h1>
        <form className={'formStep4__form'}>
          <div className={'formStep4__wrapper'}>
            <div className={'formStep4__column'}>
              <h2 className={'formStep4__subtitle'}>Adres odbioru:</h2>
              <label className={'formStep4__label'}>
                Ulica
                <input name={'street'}
                       value={postData.street}
                       onChange={handlePostChange}
                       type={'text'}
                       className={'formStep4__input'}/>
              </label>
              <label className={'formStep4__label'}>
                Miasto
                <input name={'city'}
                       value={postData.city}
                       onChange={handlePostChange}
                       type={'text'}
                       className={'formStep4__input'}/>
              </label>
              <label className={'formStep4__label'}>
                Kod pocztowy
                <input name={'postcode'}
                       value={postData.postcode}
                       onChange={handlePostChange}
                       type={'number'}
                       className={'formStep4__input'}/>
              </label>
              <label className={'formStep4__label'}>
                Numer telefonu
                <input name={'phone'}
                       value={postData.phone}
                       onChange={handlePostChange}
                       type={'number'}
                       className={'formStep4__input'}/>
              </label>
            </div>
            <div className={'formStep4__column'}>
              <h2 className={'formStep4__subtitle'}>Termin odbioru</h2>
              <label className={'formStep4__label'}>
                Data
                <input name={'date'}
                       value={courierData.date}
                       onChange={handleCourierChange}
                       type={'number'}
                       className={'formStep4__input'}/>
              </label>
              <label className={'formStep4__label'}>
                Godzina
                <input name={'time'}
                       value={courierData.time}
                       onChange={handleCourierChange}
                       type={'text'}
                       className={'formStep4__input'}/>
              </label>
              <label className={'formStep4__label'}>
                Uwagi dla  kuriera
                <textarea name={'note'}
                       value={courierData.note}
                       onChange={handleCourierChange}
                       className={'formStep4__input formStep4__input-textarea'}/>
              </label>
            </div>
          </div>
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

export default FormStep4;