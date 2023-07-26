import React from 'react';
import Map from './components/Map.jsx';
import Dropdown from './components/Dropdown.jsx';
import './styles/App.css';
import Side from './components/Side.jsx';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Side className="Side" />
          <h2>Etsy Sales Map</h2>
        <Dropdown className="Dropdown"/>
      </header>
      <Map />
    </div>
  );
}

export default App;
