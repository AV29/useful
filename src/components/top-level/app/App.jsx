import React, { Component } from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import routes from '../../../routing/routes';
import { ThemeProvider } from 'styled-components';
import themes from '../../../utilities/themes';
import { StyledAppWrapper, StyledInnerWrapper, StyledRoutesWrapper } from './styles';

class App extends Component {

  static getCurrentTheme() {
    return themes.find(({ id }) => id === localStorage.getItem('themeId')) || themes[0];
  }

  constructor(props) {
    super(props);

    this.handleChangeTheme = this.handleChangeTheme.bind(this);

    this.state = {
      theme: { ...App.getCurrentTheme() }
    };
  }

  handleChangeTheme(themeId) {
    this.setState(() => ({ theme: { ...themes.find(theme => theme.id === themeId) } }), this.saveTheme);
  }

  saveTheme() {
    localStorage.setItem('themeId', this.state.theme.id);
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
