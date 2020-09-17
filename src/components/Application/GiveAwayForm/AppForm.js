import React from 'react';
import {withAuthorization} from '../../Session'
import {FormProvider} from "./FormContext";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";
import FormSummary from "./FormSummary";


function AppForm() {
  
  
  return (
    <>
      <FormProvider>
        <FormStep1/>
        <FormStep2/>
        <FormStep3/>
        <FormStep4/>
        <FormSummary/>
      </FormProvider>
    </>
  );
}


export default AppForm;