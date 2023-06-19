import IconMenu from "./IconMenu";
import UserProfile from "./UserProfile";
import Search from "./Search";

import * as Styles from './MainHeader.Styles'

const MainHeader = () =>{
  return (
    <Styles.Header>
      <Search />
      <Styles.RightHeader>
        <IconMenu />
        <UserProfile />
      </Styles.RightHeader>
    </Styles.Header>
  );
}

export default MainHeader;