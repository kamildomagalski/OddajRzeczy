import React, {useState, useContext} from 'react';
import {FormContext} from "./FormContext";

function FormStep4() {
  const {formData, setFormData, setStep} = useContext(FormContext)
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
    setFormData(prevState => ({
      ...prevState,
      postData: postData,
      courierData: courierData,
    }))
    setFormData(prevState => ({
      ...prevState,
      courierData: courierData,
      step: 5
    }))
    
  }
  const handlePrevPage = () => {
    setStep(3);
  }
  if (formData.step !== 4) return null
  
  return (
    <>
      <h1 className={'appPulpit__title'}>Podaj adres i termin odbioru:</h1>
      <form className={'appPulpit__form'}>
        <h2>Termin odbioru:</h2>
        <label>
          Ulica:
          <input name={'street'}
                 value={postData.street}
                 onChange={handlePostChange}
                 type={'text'}/>
        </label>
        <label>
          Miasto:
          <input name={'city'}
                 value={postData.city}
                 onChange={handlePostChange}
                 type={'text'}/>
        </label>
        <label>
          Kod pocztowy:
          <input name={'postcode'}
                 value={postData.postcode}
                 onChange={handlePostChange}
                 type={'number'}/>
        </label>
        <label>
          Numer telefonu:
          <input name={'phone'}
                 value={postData.phone}
                 onChange={handlePostChange}
                 type={'number'}/>
        </label>
        <h2>Termin odbioru</h2>
        <label>
          Data:
          <input name={'date'}
                 value={courierData.date}
                 onChange={handleCourierChange}
                 type={'number'}/>
        </label>
        <label>
          Godzina:
          <input name={'time'}
                 value={courierData.time}
                 onChange={handleCourierChange}
                 type={'text'}/>
        </label>
        <label>
          Uwagi:
          <input name={'note'}
                 value={courierData.note}
                 onChange={handleCourierChange}
                 type={'text'}/>
        </label>
        
        <button onClick={handlePrevPage} type={"button"} className={'btn btn-small'}>Wstecz</button>
        <button onClick={handleSubmit} type={"submit"} className={'btn btn-small'}>Dalej</button>
      </form>
    
    </>
  );
}

export default FormStep4;