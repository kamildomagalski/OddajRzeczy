import React from 'react';
import AppHeader from "./AppHeader";
import decoration from '../../assets/Decoration.svg'

function AppMain() {
  
  
  return (
    <section className={'appMain'}>
      <div className={'backgroundFilter'}>
        <AppHeader/>
        <div className={'appMain__content'}>
          <h2 className={'appMain__title'}>Oddaj rzeczy, których już nie chcesz</h2>
          <h2 className={'appMain__title'}>POTRZEBUJĄCYM</h2>
          <img className={'decoration'} src={decoration} alt={'decoration'}/>
          <h3 className={'appMain__subtitle'}>Wystarczą 4 proste kroki:</h3>
          <div className={'appSteps'}>
            <div className={'appSteps__element'}>
              <div className={'appSteps__info'}>
                <p className={'appSteps__number'}>1</p>
                <p className={'appSteps__text'}>Wybierz rzeczy</p>
              </div>
            </div>
            <div className={'appSteps__element'}>
              <div className={'appSteps__info'}>
                <p className={'appSteps__number'}>2</p>
                <p className={'appSteps__text'}>Spakuj je w worki</p>
              </div>
            </div>
            <div className={'appSteps__element'}>
              <div className={'appSteps__info'}>
                <p className={'appSteps__number'}>3</p>
                <p className={'appSteps__text'}>Wybierz fundację</p>
              </div>
            </div>
            <div className={'appSteps__element'}>
              <div className={'appSteps__info'}>
                <p className={'appSteps__number'}>4</p>
                <p className={'appSteps__text'}>Zamów kuriera</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  );
}

export default AppMain;