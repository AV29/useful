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

export const FlexRowWrapped = styled(Flex)`
    flex-wrap: wrap;
`;

export const Section = styled.div`
    display: inline-block;
    border: 1px solid ${({ theme: { borderColor } }) => borderColor};
    border-radius: 4px;
    padding: 10px;
    width: 100%;
`;

export const DemoSection = styled(Section)`
    padding: 20px;
    width: calc(50% - 10px);
    margin: 5px 10px 5px 0;
    border-width: 2px;
`;

export const Heading = styled.h1`
    padding: 10px 0;
`;

export const SmallHeading = styled.h2`
    padding: 10px 0;
`;
