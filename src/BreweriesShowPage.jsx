import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function BreweriesShowPage() {
  const [brewery, setBrewery] = useState({});
  const params = useParams();

  const handleShowBrewery = () => {
    axios.get(`http://localhost:3000/breweries/${params.id}.json`).then((response) => {
      setBrewery(response.data);
    });
  };

  useEffect(handleShowBrewery, []);

  return (
    <div id="breweries-show">
      <h1>Brewery Info</h1>
      <div>
        <h2>Name: {brewery.name}</h2>
      </div>
      <div>
        <p>{brewery.address}</p>
      </div>
      <div>
        <p>{brewery.city}</p>
      </div>
      <div>
        <p>{brewery.state}</p>
      </div>
      <div>
        <p>{brewery.zip}</p>
      </div>
      <div>
        <p>{brewery.website_url}</p>
      </div>
    </div>
  );
}
