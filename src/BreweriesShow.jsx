import { Modal } from "./Modal";
import { CheckinsNew } from "./CheckinsNew";
import axios from "axios";
import mapboxgl from "mapbox-gl";
import React, { useRef, useEffect, useState } from "react";

mapboxgl.accessToken = import.meta.env.VITE_SOME_KEY;

export function BreweriesShow(props) {
  // setting map default state
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(Number(props.brewery.longitude));
  const [lat, setLat] = useState(Number(props.brewery.latitude));
  const [zoom, setZoom] = useState(10);

  useEffect(() => {
    console.log("before", props.brewery.longitude, props.brewery.latitude);
    if (map.current) return; // initialize map only once
    console.log("after", props.brewery.longitude, props.brewery.latitude);
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.on("move", () => {
      //resets values as user interacts with map
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

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
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
