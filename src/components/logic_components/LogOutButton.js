import React from 'react';
import { withFirebase } from "../Firebase";
import {Link} from "react-router-dom";

function LogOutButton({ firebase }) {
 return (
  <Link to={'/'} type={'button'} onClick={firebase.doSignOut}>
   Sign Out
  </Link>
 );
}
export default withFirebase(LogOutButton);