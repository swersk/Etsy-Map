import React, { useState, useEffect } from 'react';

const FloatingPanel = ({ setShowHeatMap, showHeatMap, heatmap }) => {

  const [gradientEnabled, setGradientEnabled] = useState(false);

  const handleToggle = () => {
    setShowHeatMap(!showHeatMap);
  };

  const handleGradient = () => {
    setGradientEnabled(!gradientEnabled);
    const gradient = [
      "rgba(0, 255, 255, 0)",
      "rgba(0, 255, 255, 1)",
      "rgba(0, 191, 255, 1)",
      "rgba(0, 127, 255, 1)",
      "rgba(0, 63, 255, 1)",
      "rgba(0, 0, 255, 1)",
      "rgba(0, 0, 223, 1)",
      "rgba(0, 0, 191, 1)",
      "rgba(0, 0, 159, 1)",
      "rgba(0, 0, 127, 1)",
      "rgba(63, 0, 91, 1)",
      "rgba(127, 0, 63, 1)",
      "rgba(191, 0, 31, 1)",
      "rgba(255, 0, 0, 1)"
    ]
      heatmap.set("gradient", heatmap.get("gradient") ? null : gradient)
  }

  return (
    <div id="floating-panel" style={{
      position: 'absolute',
      top: '78px',
      left: '200px',
      zIndex: 1,
      border: '1px solid #ccc',
      borderRadius: '4px',
      background: '#fff',
      padding: '10px',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }}>
      <button id="toggle-heatmap" onClick={handleToggle}>
        Toggle Heatmap
      </button>
      <button id="change-gradient" onClick={handleGradient}>
        Change gradient
      </button>
      <button id="change-radius">Change radius</button>
      <button id="change-opacity">Change opacity</button>
    </div>
  );
};

export default FloatingPanel;
