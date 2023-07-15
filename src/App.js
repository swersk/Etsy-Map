import React from 'react';
import Map from './components/Map.jsx';
import './styles/App.css';

function App() {

  return (
    <div className="App" style={{ height: '100vh' }}>
      <header className="App-header" style={{ height: '95%' }}>
        <p style={{textAlign: 'center', color: 'orange'}}>Etsy Sales Map</p>
        <Map />
      </header>
    </div>
  );
}

export default App;
