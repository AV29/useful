import React, { Component } from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import { mainTheme } from '../utilities/themes';
import routes from '../routing/routes';
import styled, { ThemeProvider } from 'styled-components';

const StyledAppWrapper = styled.div`
  background-color: transparent;
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;

const StyledRoutesWrapper = styled.div`
  flex: 1;
  padding: 10px;
`;

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
