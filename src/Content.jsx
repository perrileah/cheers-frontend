import axios from "axios";
import { useState, useEffect } from "react";

import { BreweriesIndex } from "./BreweriesIndex";
import { CheckinsIndex } from "./CheckinsIndex";

export function Content() {
  const checkins = [
    {
      id: 1,
      brewery_id: "12345",
      user_id: 1,
      rating: 5,
      image_url: "image_url",
      comments: "great beer and friendly staff",
    },
    { id: 2, brewery_id: "167835", user_id: 1, rating: 3, image_url: "image_url", comments: "enjoyable experience" },
  ];

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
      <CheckinsIndex checkins={checkins} />
      <BreweriesIndex breweries={breweries} />
    </div>
  );
}
