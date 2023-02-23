import React from "react";
import { TextField, Autocomplete } from "@mui/material";
import { useState,  useEffect } from "react";


//import styled from "styled-components";

const Location = (
  <span class="material-symbols-outlined rotate-45 ml-[5px] ">flight</span>
);
const DestinationWithIcon = (
  <div className="flex align-middle">
    <div className=" ">Destination </div>
    <div className="">{Location}</div>
  </div>
);
const topDestinations = ["Goa", "Bengaluru", "Dubai", "Los Angeles"];

function InputDestination({ selectedDestination, setNewDestination }) {
  console.log(selectedDestination);

  const destinationInputChangeHandler = (event, newValue) => {
    setNewDestination(newValue);
  };
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
    <div
      className={`m-0 rounded-full pt-0.5 ${windowWidth > 699?"ml-[20px]":"ml-[105px]"}`}
    >
      <Autocomplete
        value={selectedDestination}
        onChange={destinationInputChangeHandler}
        openOnFocus={true}
        disablePortal={false}
        autoComplete={true}
        autoHighlight={true}
        selectOnFocus={true}
        clearOnBlur={true}
        id="combo-box-demo"
        options={topDestinations}
        fullWidth={true}
        className="min-w-[187px] "
        sx={{
          width: 187,
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={DestinationWithIcon}
            variant="standard"
            autoFocus={true}
            fullWidth={true}
            error={false}
            className="min-w-[160px] h-auto  bottom-2.5 mt-1"
          />
        )}
      />
    </div>
  );
}

export default InputDestination;

/** 
const AutocompleteStyling = styled(TextField)`
  .MuiPopperUnstyled-root {
    width: 187px;
  }
`;
*/
