import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Main from './pages/Main/Main';
import PageLayout from './hoc/PageLayout/PageLayout';

function App() {
  return (
    <PageLayout>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </PageLayout>
  );
}

export default App;
