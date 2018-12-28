/* eslint-disable react/jsx-max-props-per-line*/
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routesConfig from './routesConfig';
import MoneyCalculator from '../components/pages/money-calculator/MoneyCalculator';
import NotFoundPage from '../components/pages/not-found/NotFoundPage';

const { root, moneyCalculator } = routesConfig;

export default (
  <Switch>
    <Route
      exact
      path={moneyCalculator.path}
      component={MoneyCalculator}
    />
    <Route
      path="*"
      component={NotFoundPage}
    />
    <Redirect from={root.path} to={moneyCalculator.path}/>
  </Switch>
);
