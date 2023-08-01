import React, { useState, useEffect } from "react";
import Map from "./components/Map.jsx";
import Papa from "papaparse";
import Dropdown from "./components/Dropdown.jsx";
import "./styles/App.css";
import Side from "./components/Side.jsx";

function App() {
  const [data, setData] = useState([]);
  const [showHeatMap, setShowHeatMap] = useState(true);
  const [markers, setShowMarkers] = useState(true);
  const [initialData, setInitialData] = useState([]);
  const [mapIsLoaded, setMapIsLoaded] = useState(false);
  const [markersArr, setMarkersArr] = useState([]);
  const [loading, setLoading] = useState(true);
  const [heatmap, setHeatmap] = useState(true);

  // Parse CSV data
  useEffect(() => {
    fetch("/Etsy2023G.csv")
      .then((response) => response.blob())
      .then((blob) => {
        Papa.parse(blob, {
          header: true,
          delimiter: ",",
          skipEmptyLines: "greedy",
          complete: function (results) {
            const addressData = results.data.map((item) => ({
              item: item["Item Name"],
              buyer: item.buyer,
              date: item["Date Paid"],
              name: item["Ship Name"].split(" ")[0],
              quantity: item.Quantity,
              address1: item["Ship Address1"],
              city: item["Ship City"],
              state: item["Ship State"],
              latitude: parseFloat(item.Latitude),
              longitude: parseFloat(item.Longitude),
            }));
            setData(addressData);
            setInitialData(addressData);
            setLoading(false);
          },
        });
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }


  //TODO: refactor so i don't pass all this down
  return (
    <div className="App">
      <header className="App-header">
        <Side
          className="Side"
          setShowMarkers={setShowMarkers}
          setShowHeatMap={setShowHeatMap}
          showHeatMap={showHeatMap}
          data={data}
          setData={setData}
          initialData={initialData}
          setMapIsLoaded={setMapIsLoaded}
          mapIsLoaded={mapIsLoaded} setMarkersArr={setMarkersArr} markersArr={markersArr}  heatmap={heatmap}
        />
        <h2>Etsy Sales Map</h2>
        <Dropdown className="Dropdown" />
      </header>
      <Map
        data={data}
        setData={setData}
        showHeatMap={showHeatMap}
        setShowHeatMap={setShowHeatMap}
        markers={markers}
        setShowMarkers={setShowMarkers}
        initialData={initialData}
        setInitialData={setInitialData}
        setMapIsLoaded={setMapIsLoaded}
        mapIsLoaded={mapIsLoaded} setMarkersArr={setMarkersArr} markersArr={markersArr} setHeatmap={setHeatmap} heatmap={heatmap}
      />
    </div>
  );
}

export default App;



