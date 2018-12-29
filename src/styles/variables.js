export const primaryColor = '#288dc8';
const primaryBorderColor = 'lightgrey';
export const primaryBGColor = '#ffffff';

export const secondaryColor = '#ffffff';
const secondaryBorderColor = 'darkblue';
export const secondaryBGColor = '#288dc8';

export const transitionStyle = 'cubic-bezier(0.15, 0.9, 0.5, 1)';

export const pickedBorderColor = ({ theme: { isDarkTheme } }) => isDarkTheme ? secondaryBorderColor : primaryBorderColor;
