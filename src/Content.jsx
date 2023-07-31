import axios from "axios";
import { useState, useEffect } from "react";

import { BreweriesIndex } from "./BreweriesIndex";
import { CheckinsIndex } from "./CheckinsIndex";
import { CheckinsNew } from "./CheckinsNew";
import { Modal } from "./Modal";

export function Content() {
  const [breweries, setBreweries] = useState([]);
  const [checkins, setCheckins] = useState([]);
  const [isCheckinsNewVisible, setIsCheckinsNewVisible] = useState(false);
  const [currentCheckin, setCurrentCheckin] = useState({});

  const handleIndexBreweries = () => {
    console.log("handleIndexBreweries");
    axios.get("http://localhost:3000/breweries.json").then((response) => {
      console.log(response.data);
      setBreweries(response.data);
    });
  };

  const handleIndexCheckins = () => {
    console.log("handleIndexCheckins");
    axios.get("http://localhost:3000/checkins.json").then((response) => {
      console.log(response.data);
      setCheckins(response.data);
    });
  };

  const handleCreateCheckin = (params, successCallback) => {
    console.log("handleCreatePhoto", params);
    axios.post("http://localhost:3000/checkins.json", params).then((response) => {
      setCheckins([...checkins, response.data]);
      successCallback();
    });
  };

  const handleShowCheckin = (checkin) => {
    console.log("handleShowCheckin", checkin);
    setIsCheckinsNewVisible(true);
    setCurrentCheckin(checkin);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsCheckinsNewVisible(false);
  };

  useEffect(handleIndexBreweries, []);
  useEffect(handleIndexCheckins, []);

  return (
    <div>
      <h1>Welcome to Cheers! a brewery-rating app</h1>
      <CheckinsNew onCreateCheckin={handleCreateCheckin} />
      <CheckinsIndex checkins={checkins} />
      <BreweriesIndex breweries={breweries} />
      <Modal show={isCheckinsNewVisible} onClose={handleClose}>
        <h1>Test</h1>
      </Modal>
    </div>
  );
}
