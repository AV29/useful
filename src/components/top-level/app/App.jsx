import React, { Component } from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import routes from '../../../routing/routes';
import { ThemeProvider } from 'styled-components';
import { StyledAppWrapper, StyledInnerWrapper, StyledRoutesWrapper } from './styles';
import { primaryColor, secondaryColor, primaryBGColor, secondaryBGColor } from '../../../styles/variables';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChangeTheme = this.handleChangeTheme.bind(this);

    this.state = {
      theme: {
        isDarkTheme: false,
        color: primaryColor,
        bgColor: primaryBGColor
      }
    };
  }

  handleChangeTheme({ target: { checked } }) {
    this.setState(
      ({
        theme: {
          isDarkTheme: checked,
          color: checked ? secondaryColor : primaryColor,
          bgColor: checked ? secondaryBGColor : primaryBGColor,
        }
      })
    );
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <StyledAppWrapper>
          <Header onThemeChange={this.handleChangeTheme} isDarkTheme={this.state.theme.isDarkTheme}/>
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
