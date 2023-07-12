import axios from "axios";
import { useState, useEffect } from "react";

import { BreweriesIndex } from "./BreweriesIndex";
import { CheckinsIndex } from "./CheckinsIndex";
import { CheckinsNew } from "./CheckinsNew";

export function Content() {
  const [breweries, setBreweries] = useState([]);
  const [checkins, setCheckins] = useState([]);

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
    console.log("handleCreatePhoto", params);
    axios.post("http://localhost:3000/checkins.json", params).then((response) => {
      setCheckins([...checkins, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexBreweries, []);
  useEffect(handleIndexCheckins, []);

  return (
    <div>
      <h1>Welcome to Cheers! a brewery-rating app</h1>
      <CheckinsNew onCreateCheckin={handleCreateCheckin} />
      <CheckinsIndex checkins={checkins} />
      <BreweriesIndex breweries={breweries} />
    </div>
  );
}
