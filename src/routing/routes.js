/* eslint-disable react/jsx-max-props-per-line*/
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ExtendedRoute from '../components/reusable/extended-route/ExtendedRoute';
import NotFoundPage from '../components/pages/not-found/NotFoundPage';
import routesConfig from './routesConfig';

export default (
  <Switch>
    <Route
      exact
      path="/"
      render={() => <Redirect to={routesConfig[0].path}/>}
    />
    {routesConfig.map(({ id, ...route }) => <ExtendedRoute key={id} {...route} />)}
    <Route
      path="*"
      component={NotFoundPage}
    />
  </Switch>
);
