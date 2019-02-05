/* eslint-disable react/jsx-max-props-per-line*/
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ExtendedRoute from '../components/reusable/extended-route/ExtendedRoute';
import routesConfig from './routesConfig';
import MoneyCalculator from '../components/pages/money-calculator/MoneyCalculator';
import Hooks from '../components/pages/hooks/Hooks';
import About from '../components/pages/about/About';
import NotFoundPage from '../components/pages/not-found/NotFoundPage';

const { root, calc, about, hooks } = routesConfig;

export default (
  <Switch>
    <Route
      exact
      path={root.path}
      render={() => <Redirect to={calc.path}/>}
    />
    <ExtendedRoute
      exact
      path={calc.path}
      name={calc.name}
      component={MoneyCalculator}
    />
    <ExtendedRoute
      exact
      path={hooks.path}
      name={hooks.name}
      component={Hooks}
    />
    <ExtendedRoute
      exact
      path={about.path}
      name={about.name}
      component={About}
    />
    <Route
      path="*"
      component={NotFoundPage}
    />
  </Switch>
);
