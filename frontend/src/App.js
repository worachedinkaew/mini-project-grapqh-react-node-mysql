import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './components/Home';
import Hobbies from './components/Hobbies';
import Users from './components/Users';
import User from './components/User';


export default function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/hobbies" component={Hobbies} />

        <Route exact={true} path="/users" component={Users} />
        <Route exact={true} path="/users/:id" component={User} />

        {/* <Route exact path="/users/:id" render={(props) => <User globalStore={globalStore} {...props} /> } /> */}


        {/* <Route path="/users/:id">
          <User />
        </Route> */}
      </Switch>
    </Router>
  );
}
