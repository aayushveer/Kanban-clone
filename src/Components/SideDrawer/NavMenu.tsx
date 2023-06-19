import styled from 'styled-components';
import { Home } from '../../assets/icons/Home';
import { Message } from '../../assets/icons/Message';
import { Task } from '../../assets/icons/Task';
import { Profile } from '../../assets/icons/Profile';
import { Setting } from '../../assets/icons/Setting';

const NavMenuContainer = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 25px;
  border-bottom: 1px solid #ccc;
`;

const MenuItem = styled.li`
  display: flex;
  font-size: 1rem;
  font-weight: 500;
  color: grey;
  gap: 14px;
  margin-left: 9px;

  @media (min-width: 640px) {
    margin-left: 9px;
  }
`;

const MenuItemSpan = styled.span`
  display: none;

  @media (min-width: 640px) {
    display: block;
  }
`;

export default function NavMenu() {
  return (
    <NavMenuContainer>
      <MenuItem>
        <Home />
        <MenuItemSpan>Home</MenuItemSpan>
      </MenuItem>
      <MenuItem>
        <Message />
        <MenuItemSpan>Messages</MenuItemSpan>
      </MenuItem>
      <MenuItem>
        <Task />
        <MenuItemSpan>Tasks</MenuItemSpan>
      </MenuItem>
      <MenuItem>
        <Profile />
        <MenuItemSpan>Members</MenuItemSpan>
      </MenuItem>
      <MenuItem>
        <Setting />
        <MenuItemSpan>Settings</MenuItemSpan>
      </MenuItem>
    </NavMenuContainer>
  );
}
