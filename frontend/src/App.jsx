import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Main from './pages/Main/Main';
import PageLayout from './hoc/PageLayout/PageLayout';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <PageLayout>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={Main} />
      </Switch>
    </PageLayout>
  );
}

export default App;
