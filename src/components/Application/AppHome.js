import React from 'react'
import AppMain from "./AppMain";
import AppForm from "./GiveAwayForm/AppForm";
import {withAuthorization} from "../Session";


function AppHome() {
 return (
  <>
   <AppMain/>
   <AppForm/>
  </>
 );
}
const condition = authUser => !!authUser;

export default withAuthorization(condition)(AppHome);