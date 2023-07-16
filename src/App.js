import React from 'react';
import Map from './components/Map.jsx';
import Dropdown from './components/Dropdown.jsx';
import './styles/App.css';

function App() {
  return (
    <div className="App" style={{ height: '100vh' }}>
      <header className="App-header" style={{ height: '68px'}}>
        <h2 style={{ textAlign: 'center', color: '#F56400', fontSize: '28px', fontWeight: '700' }}>
          Etsy Sales Map
        </h2>
        <div style={{position: 'absolute', top: 0, right: 0}}>
          <Dropdown />
        </div>
      </header>

      <Map />
    </div>
  );
}

export default App;
