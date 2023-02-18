import React from "react";
import { Button } from "@mui/material";
function Mould_buttons(props) {
  return (
    <Button
      variant="outlined"
      className="rounded-[30px]  m-[5px] sm:text-inherit sm:border-inherit sm:normal-case"
    >
      {props.text}
      {props.icon}
    </Button>
  );
}

export default Mould_buttons;
