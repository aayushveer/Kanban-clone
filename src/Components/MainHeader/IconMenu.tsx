import { Calendar2 } from "../../assets/icons/Calendar2";
import { MessageQuestion } from "../../assets/icons/MessageQuestion";
import { Notification } from "../../assets/icons/Notification";
import * as Styles from './IconMenu.Styles'

export default function IconMenu() {
  return (
    <Styles.IconMenu>
      <Calendar2 />
      <MessageQuestion />
      <Notification />
    </Styles.IconMenu>
  );
}
