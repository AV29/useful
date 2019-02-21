import styled from 'styled-components';

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
    border: 1px solid ${({ theme: { borderColor } }) => borderColor};
    border-radius: 4px;
    padding: 15px;
`;

export const DemoSection = styled(Section)`
    border-width: 2px;
    box-shadow: 0 0 15px ${({ theme: { shadowColor } }) => shadowColor};
`;

export const Heading = styled.h1`
    padding: 10px 0;
`;

export const SmallHeading = styled.h2`
    padding: 10px 0;
`;
