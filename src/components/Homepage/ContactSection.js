import React, {useState} from 'react';
import decoration from '../../assets/Decoration.svg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ContactForm from "./ContactForm";

function ContactSection() {
  const [isSent, setIsSent]= useState(false)
  
  const handleSend = (value) => {
    setIsSent(value)
  }
  
  const MessageSuccess= () =>{
    return (
      <div className={'messageSuccess'}>
        <p className={'messageSuccess__text'}>Wiadomość została wysłana!</p>
        <p className={'messageSuccess__text'}>Wkrótce sie z Tobą skontaktujemy.</p>
      </div>
    )
  }
  
  return (
    <section className={'contact'} id={'contact'}>
      <div className={'backgroundFilter'}>
        <div className={'contact__section'}>
          <h2 className={'contact__title'}>Skontaktuj się z nami</h2>
          <img className={'decoration'} src={decoration} alt={'decoration'}/>
          {isSent? <MessageSuccess/> : null}
          <ContactForm handleSend={handleSend}/>
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

export default ContactSection;