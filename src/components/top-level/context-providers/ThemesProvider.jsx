import React, { Component } from 'react';
import { node, string, shape } from 'prop-types';

export const Context = React.createContext();

class ThemesProvider extends Component {
  render() {
    return (
      <Context.Provider value={this.props.theme}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

ThemesProvider.propTypes = {
  children: node,
  theme: shape({
    id: string,
    color: string,
    borderColor: string,
    shadowColor: string,
    bgColor: string
  })
};

export default ThemesProvider;
