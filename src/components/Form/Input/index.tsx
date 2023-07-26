/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useState } from "react";
import { Container, InputContainer, InputSearch, Button } from "./styles";

import { BiSearchAlt2 } from "../../../styles/Icons";
import { GlobalContext } from "../../../context/WeatherContext";

interface InputProps {
  handleCloseMenu: () => void;
}

const Input: React.FC<InputProps> = ({ handleCloseMenu }) => {
  const [search, setSearch] = useState<string>("");

  const { setQuery } = useContext(GlobalContext);

  const handleChangeSearch = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  };

  const handleClickLocation = () => {
    if (search.length > 0) {
      setQuery({ q: search });
      handleCloseMenu();
    }
    return;
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      handleClickLocation();
    }
  };

  return (
    <Container>
      <InputContainer>
        <BiSearchAlt2 />
        <InputSearch
          placeholder="search location"
          value={search}
          onChange={handleChangeSearch}
          onKeyDown={handleKeyDown}
        />
      </InputContainer>
      <Button onClick={handleClickLocation}>Search</Button>
    </Container>
  );
};

export default Input;
