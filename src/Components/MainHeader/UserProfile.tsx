import { ArrowDown } from "../../assets/icons/ArrowDown";
import CurrentUser from "../../assets/images/current-user.jpg";
import * as Styles from './UserProfile.Styles'

export default function UserProfile() {
  return (
    <Styles.UserProfileContainer>
      <Styles.UserInfoContainer>
        <Styles.UserName>Anima Agrawal</Styles.UserName>
        <Styles.UserAddress>U.P, India</Styles.UserAddress>
      </Styles.UserInfoContainer>
      <Styles.UserImage
        src={CurrentUser}
        alt="Anima Agrawal"
        width="38px"
        height="38px"
      />
      <ArrowDown />
    </Styles.UserProfileContainer>
  );
}

