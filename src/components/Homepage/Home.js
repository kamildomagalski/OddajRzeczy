import React from 'react';
import MainSection from "./MainSection";
import InfoSection from "./InfoSection";
import StepsSection from "./StepsSection";
import AboutSection from "./AboutSection";
import HelpSection from "./HelpSection";
import ContactSection from "./ContactSection";



function Home({authUser}) {
 return (
  <>
  <MainSection authUser={authUser}/>
  <InfoSection/>
  <StepsSection/>
  <AboutSection/>
  <HelpSection/>
  <ContactSection/>
  </>
 );
}
export default Home;