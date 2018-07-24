import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';


  const ToWelcome = () =>
  <div>
    <ul>
      <li><Link to={routes.WELCOME}>Log In</Link></li>
    </ul>
  </div>


export default ToWelcome;