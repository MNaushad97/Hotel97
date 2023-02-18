import LogoImg from "./images/hotel_97.png";
import SearchIcon from "@mui/icons-material/Search";

import GTranslateIcon from "@mui/icons-material/GTranslate";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import React from "react";
import Searchfields from "./SearchFields";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      id="header"
      className="flex py-2  shadow-md justify-between items-center sticky top-0 bg-white z-[10] w-full
      px-1 sm:pr-[38px] md:pr-4 "
    >
      <Link to={`/`}>
        <img src={LogoImg} alt="headerIcon" className=" h-[34px] lg:ml-56" />
      </Link>

      <div
        id="headerRight"
        className="flex items-center justify-between  w-[6vw] h-[2vh] mr-16 
        sm:w-[15vw] sm:mr-20
         "
      >
        <p className=" mx-4 w-[100px] cursor-pointer hidden sm:inline	">
          Become A Host
        </p>

        <GTranslateIcon className=" mx-4  hidden sm:inline-block	" />
        <ExpandMoreIcon />
        <Avatar className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;
/*

.header__center > input {
  border: none;
  padding: 10px;
  outline-width: 0;
  /* width: 250px; 
}

.header__right {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15vw;
  margin-right: 80px;
} */
