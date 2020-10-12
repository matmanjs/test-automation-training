import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PageAbc from './pages/abc';

import PageSimple from './pages/simple';
import PageIndex from './pages/index';
import PageTransaction from './pages/transaction';
import PageWithdraw from './pages/withdraw';
import PageDebug from './pages/debug';
import PageHybridApp from './pages/hybrid-app';

import './App.less';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={PageIndex} />
        <Route path={'/abc/:pageName'} component={PageAbc} />
        <Route path={'/simple'} component={PageSimple} />
        <Route path={'/transaction'} component={PageTransaction} />
        <Route path={'/withdraw'} component={PageWithdraw} />
        <Route path={'/debug'} component={PageDebug} />
        <Route path={'/hybrid-app'} component={PageHybridApp} />
      </Switch>
    </Router>
  );
}
