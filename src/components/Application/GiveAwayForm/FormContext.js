import React, {useState, createContext} from 'react';

const FormContext = createContext(null);

function FormProvider(props) {
  const [clear, setClear] = useState(0)
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
  const clearData = () => {
    setClear(value => value + 1)
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
    <FormContext.Provider value={{formData, step, clear, handleSetData, handleSetStep, clearFormData, clearData}}>
      {props.children}
    </FormContext.Provider>
  );
}

export {FormProvider, FormContext};

