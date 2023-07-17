import React, { useState } from 'react';
import Button from '@mui/material/Button';

const FloatingPanel = ({ setShowHeatMap, showHeatMap }) => {
  const handleToggle = () => {
    setShowHeatMap(!showHeatMap);
  };

  return (
    <div
      id="floating-panel"
      style={{
        position: 'absolute',
        top: '82px',
        left: '200px',
        zIndex: 1,
        border: '1px solid #ccc',
        borderRadius: '2px',
        background: '#F78333',
        padding: '5px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontFamily: "Guardian-EgypTT, Charter, 'Charter Bitstream', Cambria, 'Noto Serif Light', 'Droid Serif', Georgia, serif",
      }}
    >
      <Button
        id="toggle-heatmap"
        onClick={handleToggle}
        className="e2moi"
        size="small"
        sx={{color: '#000', background: 'white', marginRight: '10px'}}
      >
        Toggle Heatmap
      </Button>
      <div>
      <Button id="change-radius" className="e2moi" size="small" sx={{color: '#000', background: 'white', marginRight: '10px'}}>
        Change radius
      </Button>
      </div>
      <Button id="change-opacity" className="e2moi" size="small" sx={{color: '#000', background: 'white', marginRight: '10px'}}>
        Change opacity
      </Button>
      <Button id="filter-button" className="e2moi" size="small" sx={{color: '#000', background: 'white'}}>
        Filter by Product
      </Button>
    </div>
  );
};

export default FloatingPanel;



//v1

// import React, { useState, useEffect } from 'react';

// const FloatingPanel = ({ setShowHeatMap, showHeatMap, heatmap }) => {

//   const handleToggle = () => {
//     setShowHeatMap(!showHeatMap);
//   };

//   return (
//     <div id="floating-panel" style={{
//       position: 'absolute',
//       top: '82px',
//       left: '200px',
//       zIndex: 1,
//       border: '1px solid #ccc',
//       borderRadius: '2px',
//       background: '#fff',
//       padding: '5px',
//       display: 'flex',
//       justifyContent: 'flex-start',
//       alignItems: 'center',
//     }}>
//       <button id="toggle-heatmap" onClick={handleToggle}>
//         Toggle Heatmap
//       </button>
//       <button id="change-radius">Change radius</button>
//       <button id="change-opacity">Change opacity</button>
//     </div>
//   );
// };

// export default FloatingPanel;
