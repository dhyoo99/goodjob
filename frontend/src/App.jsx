import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Main from './pages/Main/Main';
import JobDetail from './pages/JobDetail/JobDetail';
import JobCreate from './pages/JobCreate/JobCreate';
import PageLayout from './hoc/PageLayout/PageLayout';

function App() {
  return (
    <PageLayout>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/job" component={JobDetail} />
        <Route path="/jobcreate" component={JobCreate} />
      </Switch>
    </PageLayout>
  );
}

export default App;
