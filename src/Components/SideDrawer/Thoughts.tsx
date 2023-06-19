import styled from 'styled-components';
import { LampOn } from '../../assets/icons/LampOn';

const ThoughtsContainer = styled.div`
  display: none;

  @media (min-width: 640px) {
    display: block;
    position: relative;
    margin-top: 45px;
    margin-left: 22px;
    margin-bottom: 0;
    padding-bottom: 30px;
  }
`;

const Lamp = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  border-radius: 50%;
  width: 66px;
  height: 66px;
`;

const InnerEllipse = styled.span`
  position: absolute;
  border-radius: 50%;
  width: 33px;
  height: 33px;
  background-color: #f5e530;
  background-opacity: 0.7;
  filter: blur(17px);
`;

const ThoughtsText = styled.section`
  margin-top: -33px;
  padding-top: 37px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3;
  border-radius: 2xl;
`;

const Title = styled.h2`
  font-size: small;
  font-weight: 500;
  color: #000;
`;

const Description = styled.p`
  font-size: x-small;
  font-weight: normal;
  color: grey;
  margin-left: 5px;
  margin-right: 5px;
  text-align: center;
`;

const TextButton = styled.button`
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 7px;
  padding-right: 7px;
  background-color: #fff;
  font-size: small;
  font-weight: 500;
  margin-bottom: 5px;
  border-radius: 5px;
`;

export default function Thoughts() {
  return (
    <ThoughtsContainer>
      <Lamp>
        <InnerEllipse />
        <LampOn />
      </Lamp>
      <ThoughtsText>
        <Title>Thoughts Time</Title>
        <Description>
          We don't have any notice for you, till then you can share your
          thoughts with your peers.
        </Description>
        <TextButton>Write a message</TextButton>
      </ThoughtsText>
    </ThoughtsContainer>
  );
}
