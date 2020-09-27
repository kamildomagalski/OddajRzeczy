import React, {useState} from 'react';
import MainSection from "./MainSection";
import InfoSection from "./InfoSection";
import StepsSection from "./StepsSection";
import AboutSection from "./AboutSection";
import HelpSection from "./HelpSection";
import ContactSection from "./ContactSection";
import {withFirebase} from "../Firebase";



function Home({ firebase }) {
 const [isLogIn, setLogIn] = useState(false)
 
 const userId = firebase.auth.currentUser?.uid
 const rootRef = firebase.db.ref('users/' + userId);
 
 
 return (
  <>
  <MainSection/>
  <InfoSection/>
  <StepsSection/>
  <AboutSection/>
  <HelpSection/>
  <ContactSection/>
  </>
 );
}
export default withFirebase(Home);