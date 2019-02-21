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
    baseColor: string,
    borderColor: string,
    shadowColor: string,
    backgroundColor: string
  })
};

export default ThemesProvider;
