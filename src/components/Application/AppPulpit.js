import React, {useState} from 'react';
import LogOutButton from "../logic_components/LogOutButton";
import {withAuthorization} from '../Session'
import {FormProvider} from "./GiveAwayForm/FormContext";
import FormStep1 from "./GiveAwayForm/FormStep1";
import FormStep2 from "./GiveAwayForm/FormStep2";
import FormStep3 from "./GiveAwayForm/FormStep3";
import FormStep4 from "./GiveAwayForm/FormStep4";
import FormSummary from "./GiveAwayForm/FormSummary";
import AppHeader from "./AppHeader";
import AppMain from "./AppMain";

function AppPulpit() {
  
  
  return (
    <>
      
      <AppMain/>
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

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AppPulpit);