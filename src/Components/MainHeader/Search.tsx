import { useState } from "react";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import * as Styles from './Search.Styles'

export default function Search() {
  const [value, setValue] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <Styles.InputContainer>
      <Styles.InputContainerSpan>
        <SearchIcon />
      </Styles.InputContainerSpan>
      <Styles.InputContainerInput
        type="text"
        id="search"
        value={value}
        name="search"
        onChange={(event) => {
          handleChange(event);
        }}
      />
      <Styles.InputContainerLabel htmlFor="search" className={value && "filled"}>
        Search for anything...
      </Styles.InputContainerLabel>
    </Styles.InputContainer>
  );
}
