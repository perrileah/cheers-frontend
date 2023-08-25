export function BreweriesShow(props) {
  return (
    <div>
      <h1>Brewery information</h1>
      <p>Name: {props.brewery.name}</p>
      <p>
        Address:{" "}
        {props.brewery.address + "., " + props.brewery.city + ", " + props.brewery.state + " " + props.brewery.zip}
      </p>
      <p>Website: {props.brewery.website_url}</p>
    </div>
  );
}
