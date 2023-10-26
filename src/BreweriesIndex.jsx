import { Link } from "react-router-dom";
import { useState } from "react";

export function BreweriesIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  console.log(props);
  return (
    <div id="breweries-index">
      <input
        placeholder="Find a Brewery!"
        type="text"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
        list="breweries"
      />
      <datalist id="breweries">
        {props.breweries.map((brewery) => (
          <option key={brewery.id}>{brewery.name}</option>
        ))}
      </datalist>

      <h1>All Breweries</h1>
      {props.breweries
        .filter((brewery) => brewery.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((brewery) => (
          <div key={brewery.id}>
            <h2>{brewery.name}</h2>
            <img src={brewery.image_url} alt="image link" />
            <p>
              <strong>Address: </strong>
              {brewery.address + "., " + brewery.city + ", " + brewery.state + " " + brewery.zip}
            </p>
            <p>
              <strong>Website: </strong>
              {brewery.website_url}
            </p>
            <Link to={`/breweries/${brewery.id}`}>
              <button onClick={() => props.onShowBrewery(brewery)}>More info</button>
            </Link>
          </div>
        ))}
    </div>
  );
}
