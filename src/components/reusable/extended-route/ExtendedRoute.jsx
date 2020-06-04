import React from 'react';
import { oneOfType, object, func, element } from 'prop-types';
import { Route } from 'react-router-dom';

const ExtendedRoute = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={props => React.createElement(component, { ...rest, ...props })}
  />
);

ExtendedRoute.propTypes = {
  component: oneOfType([func, object, element]).isRequired
};

export default ExtendedRoute;
