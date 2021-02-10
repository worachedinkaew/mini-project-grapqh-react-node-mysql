import React, { Fragment } from 'react';
import { Router } from '@reach/router';

// import {
//     Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';

import User from './components/User';

export default function AppTwo() {
  return (
    <Fragment>
        <Router primary={false} component={Fragment}>
        	<User path="users/:id" />
        </Router>
    </Fragment>
  );
}
