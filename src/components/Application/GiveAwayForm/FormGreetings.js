import React, { useContext } from 'react';
import decoration from '../../../assets/Decoration.svg'
import { FormContext } from "./FormContext";
import {Link} from "react-router-dom";


function FormGreetings() {
  const { formData, setStep } = useContext(FormContext)
  
  const handleNextCollection= () => {
    setStep(1);
  }
  if (formData.step !== 6) return null;
  return (
    <section className={'formGreetings'}>
      <div className={'container'}>
        <div className={'formGreetings__greetingBox'}>
          <div className={'formGreetings__greetingWrapper'}>
            <h2 className={'formGreetings__greeting'}>Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie
              informacje o odbiorze.</h2>
            <img className={'decoration'} src={decoration} alt={'decoration'}/>
            <div className={'formStep__buttons'}>
              <Link to={'/'}  type={"button"}
                      className={'btn btn-small btn-border formStep__btn'}>Strona Główna
              </Link>
              <button onClick={handleNextCollection} type={"submit"} className={'btn btn-small btn-border formStep__btn'}>Kolejna zbiórka
              </button>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
}

export default FormGreetings;