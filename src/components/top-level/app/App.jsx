import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import routes from '../../../routing/routes';
import { ThemeProvider } from 'styled-components';
import themes from '../../../utilities/themes';
import languages from '../../../utilities/languages';
import { StyledAppWrapper, StyledInnerWrapper, StyledRoutesWrapper } from './styles';
import { FlexColumn } from '../../../styles/styles';

class App extends Component {

  static getCurrentTheme () {
    return themes.find(({ id }) => id === localStorage.getItem('themeId')) || themes[0];
  }

  static saveLanguage (languageId) {
    localStorage.setItem('languageId', languageId);
  }

  constructor (props) {
    super(props);

    this.handleChangeTheme = this.handleChangeTheme.bind(this);

    this.state = {
      theme: { ...App.getCurrentTheme() }
    };
  }

  handleChangeTheme (themeId) {
    this.setState(() => ({ theme: { ...themes.find(theme => theme.id === themeId) } }), this.saveTheme);
  }

  saveTheme () {
    localStorage.setItem('themeId', this.state.theme.id);
  }

  render () {
    return (
      <ThemeProvider theme={this.state.theme}>
        <StyledAppWrapper>
          <Header
            onThemeChange={this.handleChangeTheme}
            onLanguageChange={App.saveLanguage}
            themes={themes}
            languages={languages}
          />
          <StyledInnerWrapper>
            <Sidebar/>
            <FlexColumn align="stretch" flex={1}>
              <StyledRoutesWrapper>
                {routes}
              </StyledRoutesWrapper>
              <Footer/>
            </FlexColumn>
          </StyledInnerWrapper>
        </StyledAppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
