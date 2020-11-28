import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import Main from './pages/Main/Main';
import PageLayout from './hoc/PageLayout/PageLayout';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import store from './store';

function App() {
  return (
    <PageLayout>
      <Provider store={store}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/" component={Main} />
        </Switch>
      </Provider>
    </PageLayout>
  );
}

export default App;
