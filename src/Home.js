import React from "react";
import Hotel1 from "../src/images/hotels/bedd.jpg";
import Hotel2 from "../src/images/hotels/f2.jpg";
import Banner from "./Banner";
import Searchfields from "./SearchFields";
import Card from "./Mould_Card";
import img from "./images/hotels/1.jpg";
import { useState, useEffect } from "react";

const Home = () => {
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
  return (
    <>
      <div id="home" className="">
        {windowWidth > 698 ? (
          <Banner />
        ) : (
          <img src={img} alt="" className="absolute z-[-5] h-fit w-screen" />
        )}
        <Searchfields className="  " />
        {/* <img src={img} className="absolute z-[-5] h-screen w-screen" /> */}
        <div
          className="home__section  grid   p-[30px] grid-cols-1
        lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-2"
        >
          <Card
            src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
            title="Online Experiences"
            description="Unique activities we can do together, led by a world of hosts."
          />
          <Card
            src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
            title="Unique Stays"
            description="Spaces that are more than just a place to sleep."
          />
          <Card
            src={Hotel2}
            //src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
            title="Entire Villa"
            description="Comfortable private places, with room for friends or family."
          />
          <Card
            src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
            title="Lakefront"
            description="Enjoy the amazing sights that are pure of serenity"
          />
          <Card
            src={Hotel1}
            //src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
            title="3 Bedroom Flats"
            description="Superhost with a stunning view of the beachside"
          />
          <Card
            src="https://media.nomadicmatt.com/2018/apartment.jpg"
            title="1 Bedroom apartment"
            description="Superhost with great amenities and a fabolous shopping complex nearby"
            price="₹2700/night"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
/*

--------
 <div className="grid  grid-cols-3 p-[30px]">
          {sampleHotelList.forEach((hotel) => {
            return (
              <Card
                src={hotel.imgUrl}
                title={hotel.name}
                description={hotel.dosDescription}
              />
            );
          })}
        </div>
-------------------------------
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  width: 100%;
}

.header__icon {
  object-fit: contain;
  height: 100px;
  margin-left: 20px;
}

.header__center {
  display: flex;
  flex: 1;
  align-items: center;
  max-width: fit-content;
  padding: 10px;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 999px;
}

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
