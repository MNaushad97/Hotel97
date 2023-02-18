import React from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useState, useContext, useHistory, useEffect } from "react";
import { Button } from "@mui/material";

//import { DateRangePicker } from "@mui/";
import {
  addDays,
  endOfDay,
  startOfDay,
  startOfYear,
  startOfMonth,
  endOfMonth,
  endOfYear,
  addMonths,
  addWeeks,
  addYears,
  startOfWeek,
  endOfWeek,
  isSameDay,
  differenceInCalendarDays,
} from "date-fns";
import SearchKeysContext from "./store/SearchKeysContext";
import { Search } from "@mui/icons-material";

function DatePicker({ startDate, setStartDate, endDate, setEndDate }) {
  // const history = useHistory();
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
  //console.log("startDate:", startDate, "endDate:", endDate);
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  return (
    <div className=" p-0 pb-0 mb-0 h-auto pt-[0.5px] ">
      <DateRangePicker
        minDate={new Date()}
        showDateDisplay={windowWidth > 639 ? true : false}
        editableDateInputs={true}
        //color={""}
        months={1}
        direction="horizontal"
        ranges={[selectionRange]}
        //rangeColors={["#ff7779"]}
        onChange={handleSelect}
        className="text-black px-4 mt-[34.7px]  w-[370px] 
        sm:mt[-3.7px] sm:w-[370px] sm:mt-[-3.7px] 
        md:w-[450px] lg:w-fit"
        inputRanges={[]}
        sx={{
          width: 700,
        }}
        renderStaticRangeLabel={true}
        staticRanges={
          windowWidth < 769
            ? []
            : [
                {
                  label: "Today",
                  range: () => ({
                    startDate: new Date(),
                    endDate: new Date(),
                  }),
                  isSelected(range) {
                    const definedRange = this.range();
                    return (
                      isSameDay(range.startDate, definedRange.startDate) &&
                      isSameDay(range.endDate, definedRange.endDate)
                    );
                  },
                },
                {
                  label: "Till Tomorrow",
                  range: () => ({
                    startDate: new Date(),
                    endDate: endOfDay(addDays(new Date(), 1)),
                  }),
                  isSelected(range) {
                    const definedRange = this.range();
                    return (
                      isSameDay(range.startDate, definedRange.startDate) &&
                      isSameDay(range.endDate, definedRange.endDate)
                    );
                  },
                },
                {
                  label: "2 Days",
                  range: () => ({
                    startDate: startDate,
                    endDate: endOfDay(addDays(startDate, 2)),
                  }),
                  isSelected(range) {
                    const definedRange = this.range();
                    return (
                      isSameDay(range.startDate, definedRange.startDate) &&
                      isSameDay(range.endDate, definedRange.endDate)
                    );
                  },
                },
                {
                  label: "Till This Week",
                  range: () => ({
                    startDate: startDate,
                    endDate: endOfWeek(addWeeks(startDate, 0)),
                  }),
                  isSelected(range) {
                    const definedRange = this.range();
                    return (
                      isSameDay(range.startDate, definedRange.startDate) &&
                      isSameDay(range.endDate, definedRange.endDate)
                    );
                  },
                },
                {
                  label: "1 Week",
                  range: () => ({
                    startDate: startDate,
                    endDate: endOfDay(addDays(startDate, 7)),
                  }),
                  isSelected(range) {
                    const definedRange = this.range();
                    return (
                      isSameDay(range.startDate, definedRange.startDate) &&
                      isSameDay(range.endDate, definedRange.endDate)
                    );
                  },
                },
                {
                  label: "2 Weeks",
                  range: () => ({
                    startDate: startDate,
                    endDate: endOfDay(addDays(startDate, 14)),
                  }),
                  isSelected(range) {
                    const definedRange = this.range();
                    return (
                      isSameDay(range.startDate, definedRange.startDate) &&
                      isSameDay(range.endDate, definedRange.endDate)
                    );
                  },
                },
                {
                  label: "Till This Month",
                  range: () => ({
                    startDate: startDate,
                    endDate: endOfMonth(addMonths(startDate, 0)),
                  }),
                  isSelected(range) {
                    const definedRange = this.range();
                    return (
                      isSameDay(range.startDate, definedRange.startDate) &&
                      isSameDay(range.endDate, definedRange.endDate)
                    );
                  },
                },
                {
                  label: "1 Month",
                  range: () => ({
                    startDate: startDate,
                    endDate: endOfDay(addDays(startDate, 30)),
                  }),
                  isSelected(range) {
                    const definedRange = this.range();
                    return (
                      isSameDay(range.startDate, definedRange.startDate) &&
                      isSameDay(range.endDate, definedRange.endDate)
                    );
                  },
                },
              ]
        }
      />

      {/* <Button onClick={() => history.push("/search")}>Search Airbnb</Button> */}
    </div>
  );
}

export default DatePicker;
/*






-----------------------------------------------------------------

import * as React from "react";
import addWeeks from "date-fns/addWeeks";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import Box from "@mui/material/Box";

function getWeeksAfter(date, amount) {
  return date ? addWeeks(date, amount) : undefined;
}

function DatePicker() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        disablePast
        value={value}
        //maxDate={getWeeksAfter(value[0], 4)}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
export default DatePicker;
 */
