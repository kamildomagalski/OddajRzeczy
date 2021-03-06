import React, {useState} from 'react';
import {FormProvider} from "./GiveAwayForm/FormContext";
import FormStep1 from "./GiveAwayForm/FormStep1";
import FormStep2 from "./GiveAwayForm/FormStep2";
import FormStep3 from "./GiveAwayForm/FormStep3";
import FormStep4 from "./GiveAwayForm/FormStep4";
import FormSummary from "./GiveAwayForm/FormSummary";
import FormGreetings from "./GiveAwayForm/FormGreetings";


function AppForm() {
  return (
    <section className={'appForm'}>
      <div className={'backgroundFilter'}>
      <FormProvider>
        <FormStep1/>
        <FormStep2/>
        <FormStep3/>
        <FormStep4/>
        <FormSummary/>
        <FormGreetings/>
      </FormProvider>
      </div>
    </section>
  );
}


export default AppForm;