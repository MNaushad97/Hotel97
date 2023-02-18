import React from "react";
import { Button } from "@mui/material";

function CardsResults({
  key,
  hotel,
  highlight,
  setHighLight,
  setStillThere,
  stillThere,
}) {
  console.log("received in cardResult:");

  console.log("highlight:", highlight);

  return (
    <>
      <hr className="line2 border-t-[0.5px] border-solid border-slate-300 my-[10px] mx-0" />
      <div
        className="rentalDiv  group  flex-col  px-2 py-1 rounded-[20px] transition-transform duration-100 ease-in
        sm:flex sm:flex-row sm:justify-around sm:items-center
         hover:bg-slate-100 hover:scale[1.006]"
        onMouseEnter={(key) => {
          //hotel.highlightFocus = 1;
          console.log("name:", hotel.name);
          console.log("highlight in cards on MouseEnter:", hotel.key);
          setStillThere(true);
          return setHighLight(hotel.key);
        }}
        onMouseLeave={(key) => {
          //hotel.highlightFocus = 0;
          console.log("highlight in cards on MouseLeaves:", hotel.key);
          return setStillThere(false);
        }}
      >
        <img
          className="rentalImg h-[180px] sm:w-[260px]  rounded-[20px] mr-5 w-screen object-cover"
          src={hotel.imgUrl}
          alt="Hotel"
        />

        <div className="rentalInfo  p-0 w-full">
          <div className="rentalTitle  text-[23px] mb-[15px]">{hotel.name}</div>

          <div className="rentalDesc text-gray-500">{hotel.unoDescription}</div>
          <div className="rentalDesc">{hotel.dosDescription}</div>
          <div className="bottomButton mt-[50px] flex justify-between w-full items-center">
            <Button className="normal-case rounded-md hover:bg-blue-100">
              Stay Here
            </Button>
            <div
              className="price flex justify-end gap-[5px] pr-2  text-[#808080] text-[12px] ease-in transition-transform
            group-hover:text-[#1876D1] group-hover:text-[14px] group-hover:font-semibold"
            >
              <p>₹ {hotel.pricePerDay * 1800}/ Day</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsResults;

/*

--------
<div
        className={
          highlight == index
            ? "rentalDiv flex justify-around items-center pl-2 rounded-[20px]"
            : "rentalDiv flex justify-around items-center pl-2 rounded-[20px] border-gray-500 border-[0.5px]"
        }
      >

--------------      
<hr className="line2 border-t-[0.5px] border-solid border-slate-200 my-[30px] mx-0" />
      <div
        className={
          highlight == index
            ? "rentalDiv flex justify-around items-center pl-2 rounded-[20px]"
            : "rentalDiv flex justify-around items-center pl-2 rounded-[20px] border-gray-500 border-[0.5px]"
        }
      >
        <img
          className="rentalImg h-[200px] w-[300px] rounded-[20px] mr-5"
          src={hotel.imgUrl}
        />

        <div className="rentalInfo p-2.5 w-full">
          <div className="rentalTitle text-[23px] mb-[15px]">{hotel.name}</div>

          <div className="rentalDesc text-gray-500">{hotel.unoDescription}</div>
          <div className="rentalDesc">{hotel.dosDescription}</div>
          <div className="bottomButton mt-[50px] flex justify-between w-full items-center">
            <Button className="normal-case rounded-2xl">Stay Here</Button>
            <div className="price flex justify-end gap-[5px] text-[#808080] text-[12px]">
              <p>₹ {hotel.pricePerDay * 1800}/ Day</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsResults;
 */
