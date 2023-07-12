export function BreweriesIndex(props) {
  return (
    <div>
      <h1>All Breweries</h1>
      {props.breweries.map((brewery) => (
        <div key={brewery.id}>
          <h2>{brewery.name}</h2>
          <p>{brewery.address}</p>
          <p>{brewery.city}</p>
          <p>{brewery.state}</p>
          <p>{brewery.zip}</p>
          <p>{brewery.website_url}</p>
        </div>
      ))}
    </div>
  );
}
