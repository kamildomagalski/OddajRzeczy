import React, {useState, useContext} from 'react';
import {FormContext} from "./FormContext";
import DatePicker, {setDefaultLocale}  from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import pl from 'date-fns/locale/pl';
import {addDays, getDay, setHours, setMinutes}  from 'date-fns'


setDefaultLocale(pl)

function FormStep4() {
  const {formData, setStep, handleSetData} = useContext(FormContext)
  const [postData, setPostData] = useState(formData.postData)
  const [courierData, setCourierData] = useState(formData.courierData)
  const [validateErrors, setValidateErrors] = useState({
    streetError: '',
    cityError: '',
    postcodeError: '',
    phoneNumberError: ''
  })
  
  // const [startDate, setStartDate] = useState(new Date());
  //
  // console.log(startDate);
  
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
 
  // console.log(typeof courierData.date);
  //
  // if(courierData.date){
  //   console.log(format(courierData.date, "dd/MM/yyyy"));
  // }
  
  const handleDateChange= (date)=>{
    setCourierData(prevState => {
      return{
        ...prevState,
      date: date
      }
    })
  }
  const handleTimeChange= (time)=>{
    setCourierData(prevState => {
      return{
        ...prevState,
        time: time
      }
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    if(!validate()) return;
    clearValidate();
    
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
  // const reg = /^[0-9]*$/i;
  // const srting = postData.postcode.replace('-', '')
  // console.log(typeof srting);
  // const isOk= reg.test('97400')
  // console.log(isOk);
  // console.log(postData.postcode.replace('-', ''));
  
  //todo sprawdzić działanie regex jak powyżej? dlaczego isOk wywala false?
  
  
  function validate(){
    let isValid = true;
    if(postData.street.length < 2){
      setValidateErrors(prevState => {
       return {
         ...prevState,
         streetError: 'Nazwa ulicy musi zawierać przynajmniej dwa znaki.'
       }})
      isValid = false;
    }
    if(postData.city.length < 2 ){
      setValidateErrors(prevState => {
        return {
          ...prevState,
          cityError: 'Nazwa miasta musi zawierać co najmniej dwa znaki.'
        }
      })
      isValid = false;
    }
    const reg = /^[0-9]+$/i;
    if(postData.postcode.length < 6
    || postData.postcode.charAt(3) !== '-'
    || !(reg.test(postData.postcode.charAt(1)))
    || !(reg.test(postData.postcode.charAt(2)))
    || !(reg.test(postData.postcode.charAt(4)))
    || !(reg.test(postData.postcode.charAt(5)))
    || !(reg.test(postData.postcode.charAt(6)))
    ){
      setValidateErrors( prevState => {
        return {
          ...prevState,
          postcodeError: 'Kod pocztory musi zawierać cyfry i być w formacie __-___'
        }
      })
      isValid = false;
    }
    if(postData.phone.length !== 9 ){
      setValidateErrors(prevState => {
        return {
          ...prevState,
          phoneNumberError: 'Numer telefonu musi zawierać 9 cyfr.'
        }
      })
      isValid = false;
    }
    if(courierData.date)
    return isValid;
  }
  function clearValidate(){
    setValidateErrors({
      streetError: '',
      cityError: '',
      postcodeError: '',
      phoneNumberError: ''
    })
  }
  const isWeekday = date => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };
  
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
              <p className={'warning__error'}>{validateErrors.streetError}</p>
              <label className={'formStep4__label'}>
                Miasto
                <input name={'city'}
                       value={postData.city}
                       onChange={handlePostChange}
                       type={'text'}
                       className={'formStep4__input'}/>
              </label>
              <p className={'warning__error'}>{validateErrors.cityError}</p>
              <label className={'formStep4__label'}>
                Kod pocztowy
                <input name={'postcode'}
                       value={postData.postcode}
                       onChange={handlePostChange}
                       type={'text'}
                       className={'formStep4__input'}/>
              </label>
              <p className={'warning__error'}>{validateErrors.postcodeError}</p>
              <label className={'formStep4__label'}>
                Numer telefonu
                <input name={'phone'}
                       value={postData.phone}
                       onChange={handlePostChange}
                       type={'number'}
                       className={'formStep4__input'}/>
              </label>
              <p className={'warning__error'}>{validateErrors.phoneNumberError}</p>
            </div>
            <div className={'formStep4__column'}>
              <h2 className={'formStep4__subtitle'}>Termin odbioru</h2>
  
              <label className={'formStep4__label'}>
                Data
                <DatePicker className={'formStep4__input'}
                            selected={courierData.date}
                            onChange={handleDateChange}
                            dateFormat="dd-MM-yyyy"
                            minDate={addDays(new Date(), 2)}
                            filterDate = {isWeekday}
                  />
              </label>
              <label className={'formStep4__label'}>
                Godzina
                <DatePicker className={'formStep4__input'}
                            selected={courierData.time}
                            onChange={handleTimeChange}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={60}
                            minTime={setHours(new Date(),  9)}
                            maxTime={setHours(new Date(),  18)}
                            timeCaption="Time"
                            dateFormat="HH:mm" />
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