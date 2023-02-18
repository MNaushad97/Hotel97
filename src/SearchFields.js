import React from "react";
import SearchButton from "./SearchButton";
import InputDestination from "./InputDestination";
import { useState, useContext, useEffect } from "react";
import DatePicker from "./DatePicker";
import { Link } from "react-router-dom";
import Counter from "./Counter";
import Search from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import SearchKeysContext from "./store/SearchKeysContext";
import SearchIcon from "./SearchIcon";

const Location = (
  <span class="material-symbols-outlined rotate-45">flight</span>
);
const hotelIcon = <span class="material-symbols-outlined">hotel</span>;

const Calendar = <span class="material-symbols-outlined">calendar_month</span>;
const Guests = <span class="material-symbols-outlined">group_add</span>;

function Searchfields() {
  const [count, setCount] = useState(2);
  const [selectedDestination, setNewDestination] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [activeModal, setModalActive] = useState(false);
  const [DestinationClicked, setDestinationClicked] = useState(false);
  const [DateButtonClicked, setDateButtonClicked] = useState(false);
  const [GuestButtonClicked, setGuestButtonClicked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowWidth);
    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  }, []);

  const destinationClickHandler = () => {
    setDestinationClicked(!DestinationClicked);
    setModalActive(true);
  };

  const dateButtonclickHandler = () => {
    setDateButtonClicked(!DateButtonClicked);
    setModalActive(true);
  };

  const guestButtonClickHandler = () => {
    setGuestButtonClicked(!GuestButtonClicked);
    setModalActive(true);
  };

  const modalHandler = () => {
    setModalActive(false);
    setDestinationClicked(false);
    setDateButtonClicked(false);
    setGuestButtonClicked(false);
  };
  return (
    <>
      <div className="flex justify-center items-center ">
        <div
          id="tabContent"
          className={
            windowWidth < 699
              ? " px-6  backdrop-blur-[2.5px]  bg-white/40 border py-[38px] transition-transform ease-in border-gray-200  mt-4  z-[7] m-0 rounded-full  ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] transition-all duration-[250ms] shadow-[0px_8px_5px_-5px_rgba(0,0,0,0.7)] flex justify-center flex-col   hover:shadow[0_16px_10px_-10px_rgba(0,0,0,0.7)]   hover:scale-[1.016]"
              : " px-2   bg-white border py-[38px] transition-transform ease-in border-gray-200    z-10 m-0 rounded-full  ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] transition-all duration-[250ms] shadow-[0px_8px_5px_-5px_rgba(0,0,0,0.7)] flex justify-center   py-1 fixed top-[70px] mt-0  hover:shadow[0_16px_10px_-10px_rgba(0,0,0,0.7)]   hover:scale-[1.016]"
          }
        >
          {!DestinationClicked ? (
            <button onClick={destinationClickHandler}>
              <SearchButton SearchName="Destination" icon={hotelIcon} />
            </button>
          ) : (
            <button className="" onClick="">
              <InputDestination
                selectedDestination={selectedDestination}
                setNewDestination={setNewDestination}
              />
            </button>
          )}

          {!DateButtonClicked ? (
            <button onClick={dateButtonclickHandler}>
              <SearchButton SearchName="Dates" icon={Calendar} />
            </button>
          ) : (
            <button onClick="">
              <DatePicker
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
              />
            </button>
          )}
          <button className="mb-0 ">
            {!GuestButtonClicked ? (
              <button onClick={guestButtonClickHandler}>
                <SearchButton SearchName="Guests" icon={Guests} className="" />
              </button>
            ) : (
              <Counter count={count} setCount={setCount} />
            )}

            {/*  */}
          </button>

          <SearchIcon
            selectedDestination={selectedDestination}
            count={count}
            startDate={startDate}
            endDate={endDate}
          />
        </div>
      </div>

      {activeModal && (
        <div
          onClick={modalHandler}
          id="modal"
          className=" fixed bg-gray-700 	 h-[110vh] -top-4 w-screen text-black z-[4] opacity-[0.43]"
        ></div>
      )}
    </>
  );
}

export default Searchfields;

/* 
 <div className="flex justify-center items-center">
      <div
        id="tabContent"
        className="   flex justify-center fixed top-14 z-10 m-0 rounded-full
        ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] transition-all duration-[250ms]
        hover:shadow-[0_16px_10px_-10px_rgba(0,0,0,0.7)]   hover:scale-[1.0096]"
      >
        <div
          id="searchfields"
          className="w-[578px]  shadow-md flex justify-center bg-white mt-2.5 h-[60px] items-center  rounded-[100px]"
        >
          <div className="flex justify-evenly items-center  ">
   

        className="   flex justify-center fixed top-14 z-10 m-0 rounded-full
        ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] transition-all duration-[250ms]
        hover:shadow-[0_16px_10px_-10px_rgba(0,0,0,0.7)]   hover:scale-[1.0096]"


          className="w-[578px]  shadow-md flex justify-center bg-white mt-2.5 h-[60px] items-center  rounded-[100px]"


{DestinationClicked && <InputDestination />}
            {!DestinationClicked && (
              <SearchButton
                SearchName="Destination"
                icon={Location}
                onClick={clickHandler}
              />
            )}
.inputs {
  font-size: 12px;
  font-weight:bold;
  margin-top: 10px;
  width:160px;
}


.vl {
  position: relative;
  top:15;
  height: 20%;
  background-color: rgb(228, 228, 228);
  width: 1.5px;
  margin-right: 20px;
  padding-bottom: 15px;
}
.tabContent {
  width:100%;
  display: flex;
  justify-content: center;
}

.searchFields {
  width:800px;
  background-color: white;
  height:65px;
  border-radius: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 30px;
}


<div className="tabContent">
        <div className="searchFields">
          <div className="inputs">
            Location
            <Select
              defaultOptionIndex={0}
              onChange={(data) => setDestination(data.label)}
              options={[
                {
                  id: "ny",
                  label: "New York",
                },
                {
                  id: "lon",
                  label: "London",
                },
                {
                  id: "db",
                  label: "Dubai",
                },
                {
                  id: "la",
                  label: "Los Angeles",
                },
              ]}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Check In
            <DatePicker
              id="CheckIn"
              onChange={(event) => setCheckIn(event.date)}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Check Out
            <DatePicker
              id="CheckOut"
              onChange={(event) => setCheckOut(event.date)}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Guests
            <Input
              value={2}
              name="AddGuests"
              type="number"
              onChange={(event) => setGuests(Number(event.target.value))}
            />
          </div>
          <Link to={"/rentals"} state={{
            destination: destination,
            checkIn: checkIn,
            checkOut: checkOut,
            guests: guests
          }}>
          <div className="searchButton">
            <Icon fill="#ffffff" size={24} svg="search" />
          </div>
          </Link>
        </div>
      </div>
 */
