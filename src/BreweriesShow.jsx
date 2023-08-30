import { Modal } from "./Modal";

export function BreweriesShow(props) {
  return (
    <div className="brewery-show">
      <h1>{props.brewery.name}</h1>
      <img src={props.brewery.image_url} />
      <p>
        <strong>Address: </strong>{" "}
        {props.brewery.address + "., " + props.brewery.city + ", " + props.brewery.state + " " + props.brewery.zip}
      </p>
      <p>
        <strong>Website: </strong>
        {props.brewery.website_url}
      </p>
      <p>
        <strong>Latitude: </strong>
        {props.brewery.latitude}
      </p>
      <p>
        <strong>Longitude: </strong>
        {props.brewery.longitude}
      </p>
      <button onClick={Modal}>Create a Check-In!</button>
    </div>
  );
}
