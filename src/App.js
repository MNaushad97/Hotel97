import React from "react";
import { StyledEngineProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Searchfields from "./SearchFields";

import "./App.css";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import SearchKeysContext from "./store/SearchKeysContext";
import Search404Page from "./Search404Page";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search">
          <Route
            path=":selectedDestination/:details"
            element={<SearchPage />}
          />
          <Route path="null/:details" element={<Search404Page />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
