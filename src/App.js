import React from 'react';
import Map from './components/Map.jsx';
import './styles/App.css';

function App() {
  return (
    <div className="App" style={{ height: '100vh' }}>
      <header className="App-header" style={{ height: '40px' }}>
        <h2 style={{ textAlign: 'center', color: '#F56400', fontSize: '24px', fontWeight: '700' }}>
          Etsy Sales Map
        </h2>
      </header>
      <Map />
    </div>
  );
}

export default App;
