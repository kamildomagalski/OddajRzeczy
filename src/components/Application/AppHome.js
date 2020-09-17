import React from 'react'
import AppMain from "./AppMain";
import AppForm from "./AppForm";
import {withAuthorization} from "../Session";
import ContactSection from "../Homepage/ContactSection";


function AppHome() {
 return (
  <>
   <AppMain/>
   <AppForm/>
   <ContactSection/>
  </>
 );
}
const condition = authUser => !!authUser;

export default withAuthorization(condition)(AppHome);