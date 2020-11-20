import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Main from './pages/Main/Main';
import BusinessSignUp from './pages/SignUp/BusinessSignUp';
import IndividualSignUp from './pages/SignUp/IndividualSignUp';
import Login from './pages/Login/Login';
import PageLayout from './hoc/PageLayout/PageLayout';

function App() {
  return (
    <PageLayout>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/business-signup" component={BusinessSignUp} />
        <Route path="/individual-signup" component={IndividualSignUp} />
        <Route path="/" component={Main} />
      </Switch>
    </PageLayout>
  );
}

export default App;
