import React from "react";
import GoogleMapReact from "google-map-react";
import { useState } from "react";
import { Button } from "@mui/material";

function MapComponent(locations) {
  const receivedArrayLocation = locations.locations;
  const receivedHighlight = locations.highlight;
  const receivedStillThere = locations.stillThere;
  console.log("stillThere", locations.stillThere);
  const [showName, setShowName] = useState(false);
  const [showIdentifier, setshowIdentifier] = useState("");
  console.log("received loccation:", receivedArrayLocation);

  // const AnyReactComponent = ({ text }) => (
  //   <div

  //     {text}
  //   </div>
  // );
  var arr = Object.keys(receivedArrayLocation);
  var getLat = (key) => receivedArrayLocation[key]["lat"];
  let avgLat = arr.reduce((a, c) => a + Number(getLat(c)), 0) / arr.length;
  var getLng = (key) => receivedArrayLocation[key]["lng"];
  let avgLng = arr.reduce((a, c) => a + Number(getLng(c)), 0) / arr.length;

  const defaultProps = {
    //center: { lat: 15.596430724044952, lng: 73.73867560059247 },
    center: { lat: avgLat, lng: avgLng },
    zoom: 10,
  };

  return (
    // Important! Always set the container height explicitly
    <div
      style={{ height: "82.9vh", width: "100%" }}
      onClick={() => {
        if (showName == true) {
          setShowName(false);
        }
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {receivedArrayLocation.map(function (detail) {
          // console.log(
          //   "receivedHighlight",
          //   receivedHighlight,
          //   "index at marker:",
          //   detail.key
          // );

          return (
            <Button
              onMouseEnter={() => {
                setShowName(true);
                setshowIdentifier(detail.key);
              }}
              onMouseLeave={() => setShowName(false)}
              lat={detail.lat}
              lng={detail.lng}
              id={detail.id}
              key={detail.key}
              //text={`₹` + detail.price * 1800}
              className={`shadow-lg flex text-center items-center justify-center rounded-3xl py-[1px] 
              ${detail.key === receivedHighlight && receivedStillThere
                ?"bg-[#ff7779]  text-white transition-transform duration-200 ease-linear scale-[1.24] text-[16px] px-[3px]"
                :"bg-white  font-semibold text-[14px] px-[1px] hover:text-[#1876D1] hover:bg-white"}`}
             
            >
              {`₹` + detail.price * 1800}
            </Button>
          );
        })}
        {receivedArrayLocation.map(function (detail) {
          console.log(
            "receivedHighlight",
            receivedHighlight,
            "index at marker:",
            detail.key
          );
          console.log(
            "deatil.key:",
            detail.key,
            "showIdentifier:",
            showIdentifier
          );
          return showName && showIdentifier == detail.key ? (
            <div
              lat={detail.lat}
              lng={detail.lng}
              id={detail.id}
              key={detail.key}
              className=" flex-wrap w-max h-8 p-2   -mx-56  text-white"
            >
              <div className="mb-1">
                <img
                  alt=""
                  src={detail.img}
                  className="w-[200px] rounded-xl h-[150px] "
                />
              </div>
              <div className="ml-1 ">{detail.name}</div>
            </div>
          ) : (
            ""
          );
        })}
      </GoogleMapReact>
    </div>
  );
}
export default MapComponent;
/* 

       
-------------------------------
        {receivedArrayLocation.map(function (detail) {
          return (
            <div
              onClick={() => console.log("price clicked of", detail.name)}
              lat={detail.lat}
              lng={detail.lng}
              id={detail.id}
              key={detail.key}
              className=" text-white py-8"
            >
              {detail.name}
            </div>
          );
        })}

----------
return (
    // Important! Always set the container height explicitly
    <div style={{ height: "80vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={15.596430724044952}
          lng={73.73867560059247}
          text="₹5200"
          // lat={detail.lat}
          // lng={detail.lng}
          //text={detail.price}
        />
      </GoogleMapReact>
    </div>
  );
}
------------------------------------------------

import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { useState, useEffect } from "react";

function RentalsMap({ locations, google, setHighLight, names }) {
  const [center, setCenter] = useState();
  useEffect(() => {
    var arr = Object.keys(locations);
    var getLat = (key) => locations[key]["lat"];
    var avgLat = arr.reduce((a, c) => a + Number(getLat(c)), 0) / arr.length;

    var getLng = (key) => locations[key]["lng"];
    var avgLng = arr.reduce((a, c) => a + Number(getLng(c)), 0) / arr.length;

    setCenter({ lat: avgLat, lng: avgLng });
  }, [locations]);

  return (
    <>
      {center && (
        <Map
          google={google}
          containerStyle={{
            width: "50vw",
            height: "calc(100vh - 135px)",
          }}
          center={center}
          initialCenter={locations[0]}
          zoom={10}
          disableDefaultUI={true}
        >
          {locations.map((coords, names, i) => (
            <Marker
              position={coords}
              label={names}
              onMouseover={() => setHighLight(i)}
              onMouseOut={() => setHighLight()}
            ></Marker>
          ))}
        </Map>
      )}
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: "",
})(RentalsMap);


-----------------------------------------------------------------------------------------


import React, { useState, useEffect } from "react";
import styled from "styled-components";

import GoogleMapReact from "google-map-react";
// import 'google-map-react/dist/index.css'

import Marker from "./Marker";

const cntr = [34.0522, -118.2437];
const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;
export default function MapComponent() {
  const [places, setPlaces] = useState([]);

  const fetchPlaces = async () => {
    fetch("places.json")
      .then((response) => response.json())
      .then((data) => setPlaces(data.results));
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  if (!places || places.length === 0) {
    return null;
  }

  return (
    <Wrapper>
      <GoogleMapReact defaultZoom={10} defaultCenter={cntr}>
        {places.map((place) => (
          <Marker
            key={place.id}
            text={place.name}
            lat={place.geometry.location.lat}
            lng={place.geometry.location.lng}
          />
        ))}
      </GoogleMapReact>
    </Wrapper>
  );
}

----------------------------------------------------

*/
