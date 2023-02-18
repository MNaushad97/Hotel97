import React from "react";

const SearchKeysContext = React.createContext({
  selectedDestination: null,
  count: 2,
  setCount: () => {},

  startDate: new Date(),
  endDate: new Date(),
});

export default SearchKeysContext;
