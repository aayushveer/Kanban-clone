import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--dusky-white);
  width: 33.3333%;
  margin-top: 22px;
  margin-left: 0;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 0;
  padding-right: 0;
  border-radius: 6px;
`;

export const InputContainerSpan = styled.span`
  position: absolute;
  left: 18px;
`;

export const InputContainerInput = styled.input`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  background-color: var(--dusky-white);
  border-bottom: 1px solid transparent;
  outline: none;
  &:focus {
    border-bottom: 1px solid var(--grey-light-1);
  }
  font-size: 16px;
  color: var(--grey);
  width: 50%;
  padding: 0;
  margin-left: 55px;
`;

export const InputContainerLabel = styled.label`
  display: none;
  @media (min-width: 1200px) {
    display: block;
  }
  position: absolute;
  top: 10px;
  left: 55px;
  transform: scale(1);
  font-size: 16px;
  color: var(--grey);
  font-weight: normal;
  pointer-events: none;
  transition: transform 200ms ease-out;
`;

export const FocusedInputLabel = styled.label`
  transform: translate(-3px, -6px) scale(0.75);
  color: var(--black);
`;

export const FilledInputLabel = styled.label`
  transform: translate(-3px, -6px) scale(0.75);
  color: var(--black);
`;
