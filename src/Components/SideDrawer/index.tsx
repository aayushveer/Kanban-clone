import styled from 'styled-components';
import ColorFilter from '../../assets/images/colorfilter.png';
import { ArrowLeft } from '../../assets/icons/ArrowLeft';
import NavMenu from './NavMenu';
import MyProjects from './MyProjects';
import Thoughts from './Thoughts';

const SideDrawerContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  min-height: 100vh;
`;

const Header = styled.header`
  height: 5rem;
  border-bottom: 1px solid var(--b-grey-light-1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  @media (min-width: 640px) {
    padding: 0.5rem 2.5rem;
  }
`;

const HeaderText = styled.span`
  display: flex;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--black);
  gap: 0.5rem;
`;

const HeaderTextImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const HeaderTextH2 = styled.h2`
  display: none;
  @media (min-width: 640px) {
    display: block;
  }
`;

const Arrow = styled.span`
  display: none;
  @media (min-width: 640px) {
    display: block;
  }
`;

const Main = styled.main``;

export default function SideDrawer() {
  return (
    <SideDrawerContainer>
      <Header>
        <HeaderText>
          <HeaderTextImage src={ColorFilter} alt="color-filter" />
          <HeaderTextH2>Project M.</HeaderTextH2>
        </HeaderText>
        <Arrow>
          <ArrowLeft />
        </Arrow>
      </Header>
      <Main>
        <NavMenu />
        <MyProjects />
        <Thoughts />
      </Main>
    </SideDrawerContainer>
  );
}

