import React, { useContext } from 'react';
import decoration from '../../../assets/Decoration.svg'
import { FormContext } from "./FormContext";


function FormGreetings() {
  const { formData } = useContext(FormContext)
  
  if (formData.step !== 6) return null;
  return (
    <section className={'formStep'}>
      <div className={'container'}>
        <div className={'formStep__greetingBox'}>
          <div className={'formStep__greetingWrapper'}>
            <h2 className={'formStep__greeting'}>Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie
              informacje o odbiorze.</h2>
            <img className={'decoration'} src={decoration} alt={'decoration'}/>
          </div>
        </div>
      </div>
    
    </section>
  );
}

export default FormGreetings;