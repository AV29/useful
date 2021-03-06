import styled from 'styled-components';
import { defaultTheme } from '../constants/themes';

export const getBaseColor = ({ theme: { baseColor } }) => baseColor || defaultTheme.BASE_COLOR;
export const getBorderColor = ({ theme: { borderColor } }) => borderColor || defaultTheme.BORDER_COLOR;
export const getShadowColor = ({ theme: { shadowColor } }) => shadowColor || defaultTheme.SHADOW_COLOR;
export const getBGColor = ({ theme: { backgroundColor } }) => backgroundColor || defaultTheme.BACKGROUND_COLOR;

const getPadding = ({ top = 0, left = 0, bottom = 0, right = 0 }) => `${top}px ${right}px ${bottom}px ${left}px`;

export const withPadding = component => typeof component === 'string' ? styled[component]`padding: ${getPadding}` : styled(component);

export const Flex = styled.div`
   display: flex;
   flex: ${({ flex }) => flex || 'none'};
`;

export const FlexRow = styled(Flex)`
    justify-content: ${({ justify }) => justify || 'center'};
    align-items: ${({ align }) => align || 'center'};
`;

export const FlexColumn = styled(Flex)`
   flex-direction: column;
   justify-content: ${({ justify }) => justify || 'center'};
   align-items: ${({ align }) => align || 'center'};
`;

export const GridWrapper = styled.div`
   display: grid;
   grid-gap: 15px;
   margin-top: 10px;
   grid-template-columns: repeat(${({ columns = 2 }) => columns}, 1fr);
   
   @media only screen and (max-width: 1280px) {
      grid-template-columns: repeat(1, 1fr)
   } 
`;

export const Section = styled.div`
    display: inline-block;
    border: 1px solid ${getBorderColor};
    border-radius: 4px;
    padding: 15px;
`;

export const StyledDemoSection = styled(Section)`
    border-width: 2px;
    box-shadow: 0 0 15px ${getShadowColor};
    width: 100%;
`;

export const Heading = styled.h1`
    text-align: center;
    padding: 10px 0;
`;

export const SmallHeading = styled.h2`
    padding: 10px 0;
`;

export const List = styled.ul`
  user-select: none;
  list-style-type: none;
  min-width: 100px;
  color: ${getBaseColor};
  li {
    padding: 10px 5px;
    font-size: 1.4rem;
    &:hover {
      font-weight: 900;
      cursor: pointer;
    }
  }
`;

export const PaddedBlock = withPadding('div');

export const PaddedHeading = withPadding('h1');

export const PaddedSmallHeading = withPadding('h2');
