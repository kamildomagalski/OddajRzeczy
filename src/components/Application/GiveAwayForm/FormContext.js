import React, { useState, createContext } from 'react';

const FormContext = createContext();

function FormProvider(props) {
  const [formData, setFormData]=useState({
    step: 1,
    type: '',
    bags: '',
    localization:'',
    localizationSpecific: '',
    helpGroups: [],
    postData: {
      street: '',
      city: '',
      postcode: ' ',
      phone: ''
    },
    courierData: {
      date: '',
      time: '',
      note:''
    }

  })
  const setData= (data)=> {
    setFormData(prevState => ({
      ...prevState,
      ...data
    }))
  }

  const setStep= (num)=> {
    setFormData(prevState => ({
      ...prevState,
      step: num
    }))
  }
  
  
  
 return (
  <FormContext.Provider value={{formData, setFormData, setData, setStep}}>
    {props.children}
  </FormContext.Provider>
 );
}
export { FormProvider, FormContext };

