import React, {useState, createContext} from 'react';

const FormContext = createContext(null);

function FormProvider(props) {
  const [formData, setFormData] = useState({
    step: 1,
    type: '',
    bags: '',
    localization: '',
    localizationSpecific: '',
    helpGroups: {
      children: false,
      singleMother: false,
      homeless: false,
      disabledPeople: false,
      elderly: false
    },
    postData: {
      street: '',
      city: '',
      postcode: ' ',
      phone: ''
    },
    courierData: {
      date: '',
      time: '',
      note: ''
    }
    
  })
  const handleSetData = (data) => {
    setFormData(prevState => ({
      ...prevState,
      ...data
    }))
  }
  
  const setStep = (num) => {
    setFormData(prevState => ({
      ...prevState,
      step: num
    }))
  }
  
  const clearFormData = () => {
    setFormData(prevState => {
      return {
        step: 5,
        type: '',
        bags: '',
        localization: '',
        localizationSpecific: '',
        helpGroups: {
          children: false,
          singleMother: false,
          homeless: false,
          disabledPeople: false,
          elderly: false
        },
        postData: {
          street: '',
          city: '',
          postcode: ' ',
          phone: ''
        },
        courierData: {
          date: '',
          time: '',
          note: ''
        }
      }
    })
  }
  
  return (
    <FormContext.Provider value={{formData, setFormData, handleSetData, setStep, clearFormData}}>
      {props.children}
    </FormContext.Provider>
  );
}

export {FormProvider, FormContext};

