/* eslint-disable react/jsx-max-props-per-line*/
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ExtendedRoute from '../components/reusable/extended-route/ExtendedRoute';
import routesConfig from './routesConfig';
import Controls from '../components/pages/contols/Controls';
import Hooks from '../components/pages/hooks/Hooks';
import About from '../components/pages/about/About';
import NotFoundPage from '../components/pages/not-found/NotFoundPage';
import RenderProps from '../components/pages/render-props/RenderProps';
import Hoc from '../components/pages/hoc/Hoc';
import This from '../components/pages/this/This';
import Lifecycle from '../components/pages/lifecycle/Lifecycle';

const { controls, about, hooks, renderProps, lifecycle, hoc, context } = routesConfig;

export default (
  <Switch>
    <Route
      exact
      path="/"
      render={() => <Redirect to={controls.path}/>}
    />
    <ExtendedRoute
      exact
      path={controls.path}
      name={controls.name}
      component={Controls}
    />
    <ExtendedRoute
      exact
      path={hooks.path}
      name={hooks.name}
      component={Hooks}
    />
    <ExtendedRoute
      exact
      path={renderProps.path}
      name={renderProps.name}
      component={RenderProps}
    />
    <ExtendedRoute
      exact
      path={lifecycle.path}
      name={lifecycle.name}
      component={Lifecycle}
    />
    <ExtendedRoute
      exact
      path={hoc.path}
      name={hoc.name}
      component={Hoc}
    />
    <ExtendedRoute
      exact
      path={context.path}
      name={context.name}
      component={This}
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
