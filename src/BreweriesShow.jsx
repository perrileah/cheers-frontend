import { Modal } from "./Modal";
import { useState, useEffect } from "react";
import { CheckinsNew } from "./CheckinsNew";
import axios from "axios";

export function BreweriesShow(props) {
  const [isCheckinsNewVisible, setIsCheckinsNewVisible] = useState(false);

  const handleShowNewCheckin = () => {
    console.log("handleShowNewCheckin");
    setIsCheckinsNewVisible(true);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsCheckinsNewVisible(false);
  };

  const handleCreateCheckin = (params, successCallback) => {
    console.log("handleCreateCheckin", params);
    axios.post("http://localhost:3000/checkins.json", params).then((response) => {
      setCheckins([...checkins, response.data]);
      successCallback();
    });
  };

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
      <button onClick={handleShowNewCheckin}>Create a Check-In!</button>
      <Modal show={isCheckinsNewVisible} onClose={handleClose}>
        <CheckinsNew onCreateCheckin={handleCreateCheckin} />
      </Modal>
    </div>
  );
}
