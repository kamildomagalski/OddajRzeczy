import React, { useState, createContext } from 'react';

const GiveAwayFormContext = createContext();

function FormProvider(props) {
  const [formData, setFormData]=useState({
    type: '',
    bags: '',
    localization:'',
    postData: {
      street: '',
      city: '',
      postcode: '',
      phone: ''
    },

  })
  
  
 return (
  <GiveAwayFormContext.Provider value={[formData, setFormData]}>
    {props.children}
  </GiveAwayFormContext.Provider>
 );
}
export { FormProvider, GiveAwayFormContext };

