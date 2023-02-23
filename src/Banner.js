import React from "react";
import Button from "@mui/material/Button";

function Banner() {
  return (
    <div
      id="Banner"
      className="bg-[url('https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg')]
      relative h-[50vh] bg-cover bg-center  "
    >
      <div
        id="bannerinfo"
        className="bg-black mt-[-69.8px]   text-white px-[50px] pt-[18.99vh] pb-10 w-[390px] "
      >
        <h1 className="text-[32px] font-[500]">
          Good vibes waiting near good tides
        </h1>
        <h5 className="text-[14px] mt-2.5">
          Some of your best ideas come when you're on vacation.
        </h5>
        <Button
          variant="outlined"
          className="bg-[#ff7779]  text-white mt-5 font-semibold border-black
          hover:bg-white hover:text-[#ff7779] hover:border-[#ff7779] "
        >
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;

/*.banner {
  background: url("") center center;
  height: 50vh;
  position: relative;
}

.banner__search {
    display: flex;
    flex-direction: column;
}

.banner__searchButton {
  background-color: white !important;
  font-weight: 900 !important;
  text-transform: inherit !important;
  color: #ff7779 !important;
}

.banner__info > button {
    background-color: #ff7779;
    color: white;
    text-transform: inherit;
    margin-top: 20px;
    font-weight: 600;
}

.banner__info > button:hover {
    background-color: white;
    color: #ff7779;
  }
  

.banner__info > h5 {
    margin-top: 10px;
}*/
