import React from 'react';
import LogOutButton from "../logic_components/LogOutButton";
import { withAuthorization } from '../Session'

function AppPulpit() {
 
 return (
  <div>
  <h1>To jest widok formularza</h1>
  <LogOutButton className={'btn btn-small'} />
  </div>
 );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition) (AppPulpit);