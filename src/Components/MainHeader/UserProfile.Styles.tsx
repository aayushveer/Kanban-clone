import styled from 'styled-components';

export const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const UserInfoContainer = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
  }
  margin-top: 0;
  margin-left: 10px;
  flex-direction: column;
  gap: 3px;
  align-items: end;
`;

export const UserName = styled.span`
  font-size: 16px;
  font-weight: normal;
  color: var(--black);
`;

export const UserAddress = styled.span`
  font-size: 14px;
  font-weight: normal;
  color: var(--grey);
`;

export const UserImage = styled.img`
  border-radius: 50%;
`;