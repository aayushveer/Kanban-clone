import styled from 'styled-components';

export const Header = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  background-color: white;
  z-index: 50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  padding: 4px;
  @media (min-width: 768px) {
    padding: 8px;
  }
  @media (min-width: 1024px) {
    padding: 12px;
  }
  border-bottom: 1px solid lightgrey;
`;

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;