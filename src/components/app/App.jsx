import React, { Component } from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import { mainTheme } from '../../utilities/themes';
import routes from '../../routing/routes';
import { ThemeProvider } from 'styled-components';
import { StyledAppWrapper, StyledInnerWrapper, StyledRoutesWrapper } from './styles';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={mainTheme}>
        <StyledAppWrapper>
          <Header/>
          <StyledInnerWrapper>
            <Sidebar/>
            <StyledRoutesWrapper>
              {routes}
            </StyledRoutesWrapper>
          </StyledInnerWrapper>
        </StyledAppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
