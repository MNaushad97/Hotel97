import React from "react";
import { useState, useCallback, useContext } from "react";
import { Button } from "@mui/material";
import SearchKeysContext from "./store/SearchKeysContext";

function Counter({ count, setCount }) {
  const decreament = useCallback(() => {
    setCount((counter) => (+counter > 1 ? +counter - 1 : +counter));
  }, [setCount]);

  const increament = useCallback(
    () => setCount((counter) => (+counter < 97 ? +counter + 1 : +counter)),
    [setCount]
  );

  const handleChange = useCallback((e) => setCount(e.target.value), [setCount]);

  return (
    <>
      <div className="mr-2 ">
        <Button
          className="bg-gray-200 text-center text-xl mx-0.5 mb-[3px] text-black rounded-full"
          onClick={decreament}
        >
          -
        </Button>

        <input
          type="text"
          autoFocus
          required
          value={count}
          pattern="[0-9]"
          onChange={handleChange} //allows mannual editing in input tag
          onKeyPress={(event) => {
            // Don't allow anything except numbers
            if (
              !/[0-9]/.test(event.key) ||
              Number(`${count}${event.key}`) > 97 ||
              Number(`${count}${event.key}`) < 1
            ) {
              event.preventDefault();
            }
          }}
          className="p-3 text-black bg-gray-100  rounded-full m-0 w-14 text-center"
        />

        <Button
          className="bg-gray-200  text-center text-xl mx-0.5 mb-[3px] text-black rounded-full"
          onClick={increament}
        >
          +
        </Button>
      </div>
    </>
  );
}

export default Counter;
/*
1-search how to use call back without arrow function
2-how to use callback with function that has parameters

function changeCount(amount) {
    if (count == 0 && amount == -1) {
      setCount(0);
    } else setCount((prevCount) => prevCount + amount);
  }


onKeyPress={(event) => {
            // Don't allow anything except numbers
            if (
              !/[0-9]|[-]/.test(event.key) ||
              Number(`${count}${event.key}`) > 0 ||
              Number(`${count}${event.key}`) < 97
            ) {
              event.preventDefault();
            }
          }} */
