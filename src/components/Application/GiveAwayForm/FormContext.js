import React, {useState, createContext} from 'react';

const FormContext = createContext(null);

function FormProvider(props) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
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
  
  const handleSetStep = (num) => {
    setStep(num)
  }
  const clearFormState = () => {
  
  }
  const clearFormData = () => {
    setFormData({
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
  }
  
  return (
    <FormContext.Provider value={{formData, step, handleSetData, handleSetStep, clearFormData}}>
      {props.children}
    </FormContext.Provider>
  );
}

export {FormProvider, FormContext};

