import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleClickSearch = () => {
    value !== "" ? navigate(`/search/${value}`) : navigate("/");
    setValue("");
  };
  return (
    <div className="header-search">
      <input
        type="text"
        placeholder="Tìm sản phẩm..."
        className="input-search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <FontAwesomeIcon
        icon={faSearch}
        className="icon-search"
        onClick={() => handleClickSearch()}
      />
    </div>
  );
};

export default Search;
