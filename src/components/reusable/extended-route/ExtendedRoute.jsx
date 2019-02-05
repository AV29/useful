import React from 'react';
import { func } from 'prop-types';
import { Route } from 'react-router-dom';

const ExtendedRoute = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={props => React.createElement(component, { ...rest, ...props })}
  />
);

ExtendedRoute.propTypes = {
  component: func
};

export default ExtendedRoute;
