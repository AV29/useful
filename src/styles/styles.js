import styled from 'styled-components';
import * as defaults from '../constants/defaults';

export const getBaseColor = ({ theme: { baseColor } }) => baseColor || defaults.BASE_COLOR;
export const getBorderColor = ({ theme: { borderColor } }) => borderColor || defaults.BORDER_COLOR;
export const getShadowColor = ({ theme: { shadowColor } }) => shadowColor || defaults.SHADOW_COLOR;
export const getBGColor = ({ theme: { backgroundColor } }) => backgroundColor || defaults.BACKGROUND_COLOR;

export const Flex = styled.div`
   display: flex;
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
   grid-template-columns: repeat(${({ columns = 2 }) => columns}, 1fr);;
`;

export const Section = styled.div`
    display: inline-block;
    border: 1px solid ${getBorderColor};
    border-radius: 4px;
    padding: 15px;
`;

export const DemoSection = styled(Section)`
    border-width: 2px;
    box-shadow: 0 0 15px ${getShadowColor};
`;

export const Heading = styled.h1`
    padding: 10px 0;
`;

export const SmallHeading = styled.h2`
    padding: 10px 0;
`;

export const List = styled.ul`
  border: 2px solid ${getBorderColor};
  padding: 10px;
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
