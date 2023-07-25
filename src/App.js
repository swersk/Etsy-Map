import React from 'react';
import Map from './components/Map.jsx';
import Dropdown from './components/Dropdown.jsx';

import './styles/App.css';

function App() {
  return (
    <div className="App" style={{ height: '98vh' }}>
      <header
        className="App-header"
        style={{
          height: '66px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2
            style={{
              color: '#F56400',
              fontSize: '29px',
              fontWeight: '700',
              marginTop: '19px',
            }}
          >
            Etsy Sales Map
          </h2>
        </div>
        <Dropdown />
      </header>
      <Map />
    </div>
  );
}

export default App;
