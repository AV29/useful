import React, { Component } from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import routes from '../../../routing/routes';
import { ThemeProvider } from 'styled-components';
import themes from '../../../utilities/themes';
import { StyledAppWrapper, StyledInnerWrapper, StyledRoutesWrapper } from './styles';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChangeTheme = this.handleChangeTheme.bind(this);

    this.state = {
      theme: { ...themes[0] }
    };
  }

  handleChangeTheme(theme) {
    this.setState({ theme: { ...theme } });
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <StyledAppWrapper>
          <Header
            onThemeChange={this.handleChangeTheme}
            themes={themes}
          />
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
