import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoibGVhaHBlcnJpIiwiYSI6ImNsaDB3cXN4aDBhaTQzcHVqdzJhb3hiZDMifQ.UjViRKqejimhTNWFCTH9iA";

function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div ref={mapContainer} className="map-container" />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
