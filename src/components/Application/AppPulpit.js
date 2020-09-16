import React, { useState } from 'react';
import LogOutButton from "../logic_components/LogOutButton";
import { withAuthorization } from '../Session'
import { FormProvider } from "./GiveAwayForm/GiveAwayFormContext";
import GiveAwayFormStep1 from "./GiveAwayForm/GiveAwayFormStep1";
import GiveAwayFormStep2 from "./GiveAwayForm/GiveAwayFormStep2";
import GiveAwayFormStep3 from "./GiveAwayForm/GiveAwayFormStep3";
import GiveAwayFormStep4 from "./GiveAwayForm/GiveAwayFormStep4";
import GiveAwayFormSummary from "./GiveAwayForm/GiveAwayFormSummary";

function AppPulpit() {
  const [actualStep, setActualStep] = useState(1)
  
  
  const handleStepNext = () => {
    if (actualStep === 5) return;
    setActualStep(prevState => prevState + 1)
  }
  const handleStepPrev = () => {
    if (actualStep === 1) return;
    setActualStep(prevState => prevState - 1)
  }
  return (
    <div className={'appPulpit'}>
      <h1>To jest widok formularza</h1>
      <LogOutButton className={'btn btn-small'}/>
      
      <FormProvider>
        <GiveAwayFormStep1 actualStep={actualStep}/>
        <GiveAwayFormStep2 actualStep={actualStep}/>
        <GiveAwayFormStep3 actualStep={actualStep}/>
        <GiveAwayFormStep4 actualStep={actualStep}/>
        <GiveAwayFormSummary actualStep={actualStep}/>
        
        <button onClick={handleStepPrev} className={'btn btn-small'}>Wstecz</button>
        <button onClick={handleStepNext} className={'btn btn-small'}>Dalej</button>
      </FormProvider>
    
    
    </div>
  );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AppPulpit);