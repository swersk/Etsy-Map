import React, { useState } from 'react';
import Map from './components/Map.jsx';
import Dropdown from './components/Dropdown.jsx';
import './styles/App.css';
import Side from './components/Side.jsx';


function App() {
  const [data, setData] = useState([]);
  const [showHeatMap, setShowHeatMap] = useState(true);
  const [markers, setShowMarkers] = useState(true);
  const [initialData, setInitialData] = useState([]);
  const [mapIsLoaded, setMapIsLoaded] = useState(false);


  //TODO: refactor so i don't pass all this down
  return (
    <div className="App">
      <header className="App-header">
        <Side className="Side" setShowMarkers={setShowMarkers} setShowHeatMap={setShowHeatMap} showHeatMap={showHeatMap} data={data} setData={setData} initialData={initialData} setMapIsLoaded={setMapIsLoaded} mapIsLoaded={mapIsLoaded}/>
        <h2>Etsy Sales Map</h2>
        <Dropdown className="Dropdown" />
      </header>
      <Map data={data} setData={setData} showHeatMap={showHeatMap} setShowHeatMap={setShowHeatMap} markers={markers} setShowMarkers={setShowMarkers} initialData={initialData} setInitialData={setInitialData} setMapIsLoaded={setMapIsLoaded} mapIsLoaded={mapIsLoaded}/>
    </div>
  );
}

export default App;



// import React, { useState } from 'react';
// import Map from './components/Map.jsx';
// import Dropdown from './components/Dropdown.jsx';
// import './styles/App.css';
// import Side from './components/Side.jsx';


// function App() {
//   const [data, setData] = useState([]);
//   const [showHeatMap, setShowHeatMap] = useState(true);
//   const [markers, setShowMarkers] = useState(true);
//   const [initialData, setInitialData] = useState([]);
//   const [mapIsLoaded, setMapIsLoaded] = useState(false);

//   //TODO: refactor so i don't pass all this down
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Side className="Side" setShowMarkers={setShowMarkers} setShowHeatMap={setShowHeatMap} showHeatMap={showHeatMap} data={data} setData={setData} initialData={initialData} setMapIsLoaded={setMapIsLoaded} mapIsLoaded={mapIsLoaded}/>
//         <h2>Etsy Sales Map</h2>
//         <Dropdown className="Dropdown" />
//       </header>
//       <Map data={data} setData={setData} showHeatMap={showHeatMap} setShowHeatMap={setShowHeatMap} markers={markers} setShowMarkers={setShowMarkers} initialData={initialData} setInitialData={setInitialData} setMapIsLoaded={setMapIsLoaded} mapIsLoaded={mapIsLoaded}/>
//     </div>
//   );
// }

// export default App;

