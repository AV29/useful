/* eslint-disable react/jsx-max-props-per-line*/
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routesConfig from './routesConfig';
import MoneyCalculator from '../components/pages/money-calculator/MoneyCalculator';
import About from '../components/pages/about/About';
import NotFoundPage from '../components/pages/not-found/NotFoundPage';

const { root, calc, about } = routesConfig;

export default (
  <Switch>
    <Route
      exact
      path={root.path}
      render={() => <Redirect to={calc.path}/>}
    />
    <Route
      exact
      path={calc.path}
      component={MoneyCalculator}
    />
    <Route
      exact
      path={about.path}
      component={About}
    />
    <Route
      path="*"
      component={NotFoundPage}
    />
  </Switch>
);
