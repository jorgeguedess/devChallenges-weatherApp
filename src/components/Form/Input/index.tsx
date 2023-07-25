import React, { useContext, useState } from "react";
import { Container, InputContainer, InputSearch, Button } from "./styles";

import { BiSearchAlt2 } from "../../../styles/Icons";
import { GlobalContext } from "../../../context/WeatherContext";

const Input: React.FC = ({ handleCloseMenu }: any) => {
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
