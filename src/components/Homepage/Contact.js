import React from 'react';
import decoration from '../../assets/Decoration.svg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <section className={'contact'}>
      <div className={'backgroundFilter'}>
        <div className={'contact__section'}>
          <h2 className={'contact__title'}>Skontaktuj się z nami</h2>
          <img className={'decoration'} src={decoration} alt={'decoration'}/>
          <form className={'contact__form'}>
            <div className={'contact__details'}>
              <div className={'contact__wrapper'}>
                <h3 className={'contact__subtitle'}>Wpisz swoje imię</h3>
                <input className={'contact__input contact__name'} placeholder={'Krzysztof'}/>
              </div>
              <div className={'contact__wrapper'}>
                <h3 className={'contact__subtitle'}>Wpisz swój email</h3>
                <input className={'contact__input contact__email'} placeholder={'abc@xyz.pl'}/>
              </div>
            </div>
            <div className={'contact__wrapper'}>
              <h3 className={'contact__subtitle'}>Wpisz swoją wiadomosć</h3>
              <textarea className={'contact__input contact__message '}
                     placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                     'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                     'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
                     'nisi ut aliquip ex ea commodo consequat.'}/>
            </div>
            <button className={'btn btn-small btn-contact'}>Wiślij</button>
          </form>
        </div>
        <footer className={'footer'}>
          <p>Copyright by Coders Lab</p>
          <div className={'footer__media'}>
            <FontAwesomeIcon icon={['fab', 'facebook-square']} className={'footer__icon'}/>
            <FontAwesomeIcon icon={['fab', 'instagram']} className={'footer__icon'}/>
          </div>
        </footer>
      </div>
    
    </section>
  );
}

export default Contact;