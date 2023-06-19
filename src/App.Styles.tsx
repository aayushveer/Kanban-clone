import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-left: 1px solid lightgrey;
`;

export const LeftContainer = styled.div`
  width: 50px;
  min-width: 250px; /* Adjust the values for different breakpoints */
  @media (min-width: 640px) { /* Adjust the breakpoint value as needed */
    min-width: 280px;
  }
`;