export function BreweriesIndex(props) {
  return (
    <div>
      <h1>All Breweries</h1>
      {props.breweries.map((brewery) => (
        <div key={brewery.id}>
          <h2>{brewery.name}</h2>
          <p>{brewery.city}</p>
        </div>
      ))}
    </div>
  );
}
