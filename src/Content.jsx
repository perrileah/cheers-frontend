import axios from "axios";
import { useState, useEffect } from "react";

import { BreweriesIndex } from "./BreweriesIndex";
import { CheckinsIndex } from "./CheckinsIndex";
import { CheckinsNew } from "./CheckinsNew";
import { Modal } from "./Modal";
import { BreweriesShow } from "./BreweriesShow";
import { Routes, Route } from "react-router-dom";
import { CheckinsShow } from "./CheckinsShow";
import { BreweryDetails } from "./BreweryDetails";
import { Signup } from "./Signup";
import { Login } from "./Login";

export function Content() {
  const [breweries, setBreweries] = useState([]);
  const [checkins, setCheckins] = useState([]);
  const [isBreweriesShowVisible, setIsBreweriesShowVisible] = useState(false);
  const [currentBrewery, setCurrentBrewery] = useState(null);

  const handleIndexBreweries = () => {
    console.log("handleIndexBreweries");
    axios.get("http://localhost:3000/breweries.json").then((response) => {
      console.log(response.data);
      setBreweries(response.data);
    });
  };

  const handleIndexCheckins = () => {
    console.log("handleIndexCheckins");
    axios.get("http://localhost:3000/checkins.json").then((response) => {
      console.log(response.data);
      setCheckins(response.data);
    });
  };

  const handleCreateCheckin = (params, successCallback) => {
    console.log("handleCreateCheckin", params);
    axios.post("http://localhost:3000/checkins.json", params).then((response) => {
      setCheckins([...checkins, response.data]);
      successCallback();
    });
  };

  const handleShowBrewery = (brewery) => {
    console.log("handleShowBrewery", brewery);
    setIsBreweriesShowVisible(true);
    setCurrentBrewery(brewery);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsBreweriesShowVisible(false);
  };

  useEffect(handleIndexBreweries, []);
  useEffect(handleIndexCheckins, []);

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<BreweriesIndex breweries={breweries} onShowBrewery={handleShowBrewery} />} />
        <Route path="/breweries" element={<BreweriesIndex breweries={breweries} onShowBrewery={handleShowBrewery} />} />
        <Route path="/checkinsnew" element={<CheckinsNew onCreateCheckin={handleCreateCheckin} />} />
        <Route path="/checkins" element={<CheckinsIndex checkins={checkins} />} />
        <Route path="/breweries/:id" element={<BreweryDetails />} />
      </Routes>
      {currentBrewery && <BreweriesShow brewery={currentBrewery} />}
    </div>
  );
}
