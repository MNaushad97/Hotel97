import React from "react";
import { Button } from "@mui/material";

function SearchButton(props) {
  return (
    <Button
      type="button"
      className=" normal-case text-black content-center  inline-flex rounded-full items-center  justify-center 
      pl-[20.5px] pr-4  
      py-[4.8px]  bg-white/0  text-sm font-medium min-w-[152px] 
      hover:bg-gray-100/50 
      md:bg-white md:min-w-full
    sm:hover:bg-gray-100 sm:w-full "
    >
      {props.SearchName}
      <div className="m-1.5">{props.icon}</div>
    </Button>
  );
}

export default SearchButton;
