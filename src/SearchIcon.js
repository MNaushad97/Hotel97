import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import Search from "@mui/icons-material/Search";
function SearchIcon({ selectedDestination, count, startDate, endDate }) {
  const StartDate =
    startDate.getDate() +
    "-" +
    (startDate.getMonth() + 1) +
    "-" +
    startDate.getFullYear();
  const EndDate =
    endDate.getDate() +
    "-" +
    (endDate.getMonth() + 1) +
    "-" +
    endDate.getFullYear();

  return (
    <div className="flex justify-center items-center">
      <Link
        to={
          `search/` +
          selectedDestination +
          `/for_` +
          count +
          `_guests_from_` +
          StartDate +
          `_to_` +
          EndDate
        }
        state={{
          selectedDestination: { selectedDestination },
          count: { count },
          startDate: { startDate },
          endDate: { endDate },
        }}
      >
        <Button
          className=" m-1 p-0 rounded-full "
          style={{
            maxWidth: "43px",
            maxHeight: "43px",
            minWidth: "43px",
            minHeight: "43px",
          }}
        >
          <Search
            className="m-0 bg-[#fe7d80] p-2 text-black text-[43px]  rounded-full
            hover:bg-[#ff7779]   hover:text-white "
          />
        </Button>
      </Link>
    </div>
  );
}

export default SearchIcon;

/* 

"6": {},
  "7": {},
  "8": {},
  "9": {},
  "10": {},
  "11": {},
  "12": {},
  "13": {},
  "14": {},
  "15": {},
  "16": {}
  "movies": {
    "1": {
      "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg",
      "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg",
      "description": "When 11-year-old Riley moves to a new city, her Emotions team up to help her through the transition. Joy, Fear, Anger, Disgust and Sadness work together, but when Joy and Sadness get lost, they must journey through unfamiliar places to get back home.",
      "subTitle": "2015 • 1h 35m • Coming of Age, Family, Animation",
      "title": "Inside Out",
      "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C647DF3FFBFA343CFEA84AC715148F25F9E86F398B408010CC403E7654FB908/scale?width=1440&aspectRatio=1.78",
      "type": "recommend",
      "yt": "https://www.youtube.com/embed/yRUAzGQ3nSY"
    },
    "2": {
      "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4E9E81584305009D6385F6178D4B6930E97CD6EC4A3B53C818400DEF778FFA9A/scale?width=1440&aspectRatio=1.78&format=jpeg",
      "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B983FF22BA64B6E19E0D3267280819B26758CFB765E8BED1099D11E320612953/scale?width=400&aspectRatio=1.78&format=jpeg",
      "description": "Garfield is adopted by a greedy Lord with nefarious plans to open up his estate as a hunting ground.",
      "subTitle": "2006 • 1h 19m • Family, Comedy, Kids",
      "title": "A tail of two kitties",
      "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/50B933E83609BEEFEDFA177A6D96DBFA7804C14F70A0B5AB314E892E65498ACF/scale?width=1440&aspectRatio=1.78",
      "type": "new",
      "yt": "https://www.youtube.com/embed/BLTnQko_Lz4"
    },
*/
