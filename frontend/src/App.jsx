import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Main from './pages/Main/Main';
import PageLayout from './hoc/PageLayout/PageLayout';
import Login from './pages/Login/Login';
import PersonalRegister from './pages/PersonalRegister/PersonalRegister';
import CorporateReigster from './pages/CorporateRegister/CorporateReigster';

function App() {
  return (
    <PageLayout>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register-p" component={PersonalRegister} />
        <Route path="/register-c" component={CorporateReigster} />
        <Route exact path="/" component={Main} />
      </Switch>
    </PageLayout>
  );
}

export default App;
