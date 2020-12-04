import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Main from './pages/Main/Main';
import PageLayout from './hoc/PageLayout/PageLayout';

const Login = React.lazy(() => import('./pages/Login/Login'));
const IndividualRegister = React.lazy(() =>
  import('./pages/IndividualRegister/IndividualRegister')
);
const CorporateRegister = React.lazy(() =>
  import('./pages/CorporateRegister/CorporateRegister')
);
const Notice = React.lazy(() => import('./pages/Notice/Notice'));

function App() {
  return (
    <PageLayout>
      <Suspense fallback={<h2>...Loading</h2>}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register-i" component={IndividualRegister} />
          <Route path="/register-c" component={CorporateRegister} />
          <Route path="/notice" component={Notice} />
          <Route exact path="/" component={Main} />
        </Switch>
      </Suspense>
    </PageLayout>
  );
}

export default App;
