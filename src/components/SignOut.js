import React from 'react';

import { auth } from '../firebase';

const SignOutButton = () =>
  <button
   class="ui black basic button"
    type="button"
    onClick={auth.doSignOut}
  >
    Sign Out
  </button>

export default SignOutButton;