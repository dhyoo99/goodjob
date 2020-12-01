import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Main from './pages/Main/Main';
import PageLayout from './hoc/PageLayout/PageLayout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <PageLayout>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Main} />
      </Switch>
    </PageLayout>
  );
}

export default App;
