import React from "react";
import { Button } from "@mui/material";
import ErrorPage from "./images/Screenshot 2022-09-01 at 7.09.08 PM.png";
import { useParams } from "react-router-dom";
import Mould_buttons from "./Mould_buttons";

function Search404Page() {
  const params = useParams();
  return (
    <div className="searchPage__info p-[0px] relative flex justify-center">
      <img src={ErrorPage} className="w-[100%] h-[100%]" />
      <p className=" text-[16px] animate-bounce mr-[4.5px] absolute top-[490px] flex font-semibold text-white">
        Page Not Found
      </p>
    </div>
  );
}
export default Search404Page;
