import { Link } from "react-router-dom";

export function BreweriesIndex(props) {
  return (
    <div>
      <h1>All Breweries</h1>
      {props.breweries.map((brewery) => (
        <div className="brewery-list" key={brewery.id}>
          <Link to={`/breweries/${brewery.id}`}>
            <h2>{brewery.name}</h2>
            <p>
              <strong>Address: </strong>
              {brewery.address + "., " + brewery.city + ", " + brewery.state + " " + brewery.zip}
            </p>
            <p>
              <strong>Website: </strong>
              {brewery.website_url}
            </p>
            <button onClick={() => props.onShowBrewery(brewery)}>More info</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
