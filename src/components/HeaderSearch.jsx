import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch, BiSearchAlt } from "react-icons/bi";

const HeaderSearch = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    setIsInputVisible(true);
    console.log("clicked");
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <form
      className="flex items-stretch justify-end gap-0 text-white cursor-pointer"
      onClick={handleClick}
      onSubmit={handleSubmit}
    >
      <input
        className={`text-white ${
          isInputVisible ? "w-[300px] px-2" : "w-0 px-0"
        } bg-black py-4 placeholder:text-white font-normal outline-none transition-all duration-500 overflow-hidden`}
        type="text"
        name="search"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <span className="text-white bg-black p-4 flex items-center">
        {isInputVisible ? (
          <button type="submit">
            <BiSearch />
          </button>
        ) : (
          <BiSearch />
        )}
      </span>
    </form>
  );
};

export default HeaderSearch;
