import axios from "axios";
import { useState, useEffect } from "react";

import { BreweriesIndex } from "./BreweriesIndex";

export function Content() {
  const [breweries, setBreweries] = useState([]);

  const handleIndexBreweries = () => {
    console.log("handleIndexBreweries");
    axios.get("http://localhost:3000/breweries.json").then((response) => {
      console.log(response.data);
      setBreweries(response.data);
    });
  };

  useEffect(handleIndexBreweries, []);

  return (
    <div>
      <h1>Welcome to Cheers! a brewery-rating app</h1>
      <BreweriesIndex breweries={breweries} />
    </div>
  );
}
