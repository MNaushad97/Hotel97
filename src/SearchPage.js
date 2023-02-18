import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import Mould_buttons from "./Mould_buttons";
import SearchIcon from "./SearchIcon";
import { Search } from "@mui/icons-material";
import MapComponent from "./MapComponent";
import CardsResults from "./CardsResults";
import sampleHotelList from "./sampleHotelList";

const filterIcon = <span class="material-symbols-outlined ml-2">tune</span>;
function SearchPage() {
  const params = useParams();
  //const { state:{selectedDestination, count, startDate, endDate }} = useLocation();
  const { state: searchFilters } = useLocation();
  const [highlight, setHighLight] = useState(1);
  const [stillThere, setStillThere] = useState(false);
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

  let cords = [];
  sampleHotelList.forEach((e) => {
    if (e.city === searchFilters.selectedDestination.selectedDestination) {
      cords.push({
        lat: e.lat,
        lng: e.long,
        price: e.pricePerDay,
        id: e.id,
        key: e.key,
        name: e.name,
        img: e.imgUrl,
      });
    }
    console.log("cords", cords);
  });
  let names = [];
  sampleHotelList.forEach((e) => {
    names.push({ names: e.name });
    console.log("names", names);
  });
  return (
    <>
      <div className="flex justify-center items-center ">
        <div
          className="searchReminder my-4 bg-white border  px-[6px] h-[45px] transition-transform ease-in border-gray-200 flex justify-center items-center  top-[70px] z-10 m-0 rounded-full
        ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] transition-all duration-[250ms]  shadow-[0px_4px_12px_rgba(0,0,0,0.35)]
        hover:shadow[0_16px_10px_-10px_rgba(0,0,0,0.7)]   hover:scale[1.016] "
        >
          <div className="filter   ml-5  py-[2px] ">
            {searchFilters.selectedDestination.selectedDestination}
          </div>
          <div className="vl relative h-[25%] bg-slate-200 w-[1.5px] mx-5 py-[15px]" />
          <div className="filter mx-1  ml-3 my-[2px]  ">
            {`
           ${searchFilters.startDate.startDate.toLocaleString("default", {
             month: "short",
           })} 
           ${searchFilters.startDate.startDate.toLocaleString("default", {
             day: "2-digit",
           })} 
           - 
           ${searchFilters.endDate.endDate.toLocaleString("default", {
             month: "short",
           })} 
           ${searchFilters.endDate.endDate.toLocaleString("default", {
             day: "2-digit",
           })}
          `}
          </div>

          {windowWidth > 417 ? (
            <>
              <div className="vl relative h-[25%] bg-slate-200 w-[1.5px] mx-5 py-[15px]" />
              <div className="filter mx-1 ml-3 my-[2px] ">
                {searchFilters.count.count} Guests
              </div>
            </>
          ) : (
            ""
          )}
          <Search className="ml-3 p-1   text-[35px]  rounded-full bg-[#ff7779]  text-white " />
        </div>
      </div>
      <hr className="line border-t-[1px] border-solid border-slate-200 mb-0" />
      <div className="rentalContent flex justify-start h-[calc(100vh-135px)]">
        <div
          className={
            windowWidth > 1200
              ? "rentalContentLeft w-[50%] p-[1px] h-[calc(100vh-150px)] overflow-scroll"
              : "rentalContentLeft w-[100%] p-[1px] h-[calc(100vh-150px)] overflow-scroll"
          }
        >
          <div className="searchPage__info p-1 ">
            <Mould_buttons text="Price" />
            <Mould_buttons text="Rooms and Beds" />
            <Mould_buttons text="Cancellation Flexibility" />
            <Mould_buttons text="More filters" icon={filterIcon} />
            {sampleHotelList &&
              sampleHotelList.map((hotel, index) => {
                const city = hotel.city;
                if (
                  city === searchFilters.selectedDestination.selectedDestination
                ) {
                  return (
                    <CardsResults
                      key={index}
                      hotel={hotel}
                      index={index}
                      highlight={highlight}
                      setHighLight={setHighLight}
                      stillThere={stillThere}
                      setStillThere={setStillThere}
                    />
                  );
                }
              })}
            {console.log("highlight jus after cardResult", highlight)}
          </div>
        </div>
        {windowWidth > 1200 ? (
          <div className="rentalContentRight w-[50%] border-l-[1px]  border-slate-200">
            {console.log("highlight jus before mapComponent", highlight)}

            <MapComponent
              locations={cords}
              highlight={highlight}
              setHighLight={setHighLight}
              stillThere={stillThere}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default SearchPage;

/*

.rentalDivH {
    animation: mymove 3s;
    border-radius: 20px;
    display: flex;
    justify-content: start;
}


@keyframes mymove {
    from {background-color: #dddddd;}
    to {background-color: #dddddd00;}
  }




.rentalsContent {
    display: flex;
    justify-content: start;
    height: calc(100vh - 135px);
}

.rentalsContentL {
    width: 50%;
    padding:30px;
    height: calc(100vh - 150px);
    overflow: scroll;
}

.searchReminder {
    width:400px;
    border: 1.5px solid rgb(242, 242, 242);
    border-radius: 100px;
    height:45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left:30px;
    padding-right:5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.filter {
    font-size: 14px;
    font-weight: 500;
    margin-right: 20px
}

.searchFiltersIcon {
    background-color: #EB4E5F;
    padding:7px;
    border-radius: 50%;
}

.line {
    border-top:1px solid rgb(230, 229, 229);
    margin-bottom: 0px;
}

.line2 {
    border-top:0.5px solid rgb(230, 230, 230);
    margin: 30px 0px;
}


.rentalsContent {
    display: flex;
    justify-content: start;
    height: calc(100vh - 135px);
}

.rentalsContentL {
    width: 50%;
    padding:30px;
    height: calc(100vh - 150px);
    overflow: scroll;
}

.rentalsContentR {
    width:50%;
}

.rentalDiv {
    display: flex;
    justify-content: space-around;
}

.rentalDivH {
    animation: mymove 3s;
    border-radius: 20px;
    display: flex;
    justify-content: start;
}


@keyframes mymove {
    from {background-color: #dddddd;}
    to {background-color: #dddddd00;}
  }
.rentalImg {
    height:200px;
    width:300px;
    border-radius:20px;
    margin-right:20px; 
}

.rentalInfo {
    padding:10px;
    width: 100%;
}

.rentalTitle {
    font-size: 23px;
    margin-bottom: 15px;;
}

.rentalDesc {
    color: gray;
}

.bottomButton {
    margin-top:50px;
    justify-content: space-between;
    display: flex;
    width:100%;
    align-items: center;
}

.price {
    display:flex;
    justify-content: end;
    gap:5px;
    color:#808080;
    font-size: 12px;
}

-----


.searchPage__info {
    padding: 20px;
  }

.searchPage__info > p {
    margin-bottom: 10px;
    font-size: 14px;
}

.searchPage__info > h1 {
    margin-bottom: 30px;
}

.searchPage__info > button {
    border-radius: 30px;
    text-transform: inherit;
    margin: 5px;
  } */
