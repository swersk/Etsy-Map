import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const FloatingPanel = ({ setShowHeatMap, showHeatMap }) => {
  const handleToggle = () => {
    setShowHeatMap(!showHeatMap);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleFilterClose = () => {
    setAnchorEl(null);
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
        sx={{ color: '#000', background: 'white', marginRight: '10px' }}
      >
        Toggle Heatmap
      </Button>
      <Button
        id="change-radius"
        className="e2moi"
        size="small"
        sx={{ color: '#000', background: 'white', marginRight: '10px' }}
      >
        Change radius
      </Button>
      <Button
        id="change-opacity"
        className="e2moi"
        size="small"
        sx={{ color: '#000', background: 'white', marginRight: '10px' }}
      >
        Change opacity
      </Button>
      <Button
        id="filter-button"
        className="e2moi"
        size="small"
        sx={{ color: '#000', background: 'white', cursor: 'pointer' }}
        onClick={handleFilterClick}
      >
        Filter by Product
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleFilterClose}
        PaperProps={{
          style: {
            boxShadow: 'none',
          },
        }}
        MenuListProps={{
          style: {
            padding: 0,
          },
        }}
      >
        <li role="presentation">
          <MenuItem
            role="menuitem"
            className='list-nav-item width-full text-body unstyled-button'
            onClick={handleFilterClose}
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: '#f1f1f1',
              },
              fontFamily: 'apple-system, BlinkMacSystemFont, "Roboto", "Droid Sans", "Segoe UI", "Helvetica", Arial, sans-serif',
              fontSize: '14px',
              color: '#222',
              cursor: 'pointer'
            }}
            >
              <div className="flag" style={{ display: 'flex', alignItems: 'center'}}>
                <div className="product-img" >
                    <img
                    className="flag-img thumbnail mr-xs-2 height-50px width-50px"
                    src="https://i.etsystatic.com/12475356/r/il/196c6f/4122318507/il_75x75.4122318507_38c6.jpg"
                    alt="Camino bandages"
                    style={{border: '0.5px solid #D3D3D3', height: '50x', width: '50px'}}
                  />
                </div>
                <div className="product-title">
                  <span style={{marginLeft: '15px'}}>
                    Camino de Santiago Bandages, Plasters, 30pcs
                  </span>
                </div>
              </div>
            </MenuItem>
        </li>
      </Menu>
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
