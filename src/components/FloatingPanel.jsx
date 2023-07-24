
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const FloatingPanel = ({ setShowHeatMap, showHeatMap, data, setData, handleMarkers, handleRadius, initialData }) => {

  const [itemSelected, setItemSelected] = useState('')
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const filterData = () => {
      if (data.length > 0) {
        const filteredData = initialData.filter(item => item.item === itemSelected);
        console.log('Filtered data length::', filteredData.length)
        setData(filteredData)
      }
    };
    filterData();
  }, [itemSelected]);

  const handleShowAll = () => {
    setData(initialData)
    console.log('data in show all', data.length)
  }

  const handleToggle = () => {
    setShowHeatMap(!showHeatMap);
  };

  // Retrieve product title from filter dropdown
  const handleSelection = (e) => {
    let title = e.currentTarget.querySelector('.product-title span').textContent
    setItemSelected(title)
  }

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const photos = [
    {
      src: "/caminoColorful.avif",
      title: 'Camino de Santiago Bandages, Plasters, 30 pcs',
    },
    {
      src: 'https://i.etsystatic.com/12475356/r/il/3a78ef/4282184100/il_75x75.4282184100_ib1w.jpg',
      title: 'Bandages, Plasters (2 pack) - Camino de Santiago'
    },
    {
      src: 'https://i.etsystatic.com/12475356/c/2000/2000/0/0/il/63d30f/4416907678/il_75x75.4416907678_3bma.jpg',
      title: 'Bandages (3-pack), Camino de Santiago Plasters, 30 pcs per box'
    },
    {
      src: '	https://i.etsystatic.com/12475356/r/il/72703d/4344046976/il_75x75.4344046976_az6t.jpg',
      title: 'Bandages (2-pack), Camino de Santiago Plasters, 30 pcs per box'
    },
    {
      src: '	/italyListingPic.avif',
      title: 'Italian Bandages, Italy Plasters, 30 pcs'
    },
    {
      src: '/italyListingPicx2.avif',
      title: 'Italian Bandages (2-pack), Italy Plasters, 30 pcs each'
    },
    {
      src: 'italyListingPicx3.jpg',
      title: 'Italian Bandages (3-pack), Italy Plasters, 30 pcs each'
    },
  ];

  return (
    <div
      id="floating-panel"
      style={{
        position: 'absolute',
        top: '79px',
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
        onClick={handleMarkers}
        className="google-button"
        size="small"
        sx={{ color: '#000', background: 'white', marginRight: '10px', marginLeft: '9px' }}
      >
        Toggle Markers
      </Button>
      <Button
        id="toggle-heatmap"
        onClick={handleToggle}
        className="google-button"
        size="small"
        sx={{ color: '#000', background: 'white', marginRight: '10px' }}
      >
        Toggle Heatmap
      </Button>
      <Button
        id="change-radius"
        onClick={handleRadius}
        className="google-button"
        size="small"
        sx={{ color: '#000', background: 'white', marginRight: '10px' }}
      >
        Change heatmap radius
      </Button>
      <Button
        id="filter-button"
        className="google-button"
        size="small"
        sx={{ color: '#000', background: 'white', cursor: 'pointer', marginRight: '10px' }}
        onClick={handleFilterClick}
      >
        Filter by Product
      </Button>
      <Button
        id="showall-button"
        className="google-button"
        size="small"
        sx={{ color: '#000', background: 'white', cursor: 'pointer' }}
        onClick={handleShowAll}
      >
        Show All
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
        {photos.map((photo, index) => (
          <div key={index}>
            <MenuItem
              role="menuitem"
              className="list-nav-item width-full text-body unstyled-button"
              onClick={handleFilterClose}
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: '#f1f1f1',
                },
                fontFamily:
                  'apple-system, BlinkMacSystemFont, "Roboto", "Droid Sans", "Segoe UI", "Helvetica", Arial, sans-serif',
                fontSize: '14px',
                color: '#222',
                cursor: 'pointer',
              }}
            >
              <div onClick={handleSelection} className="flag" style={{
                display: 'flex', alignItems: 'center'
              }}>
                <div className="product-img">
                  <img
                    className="flag-img thumbnail mr-xs-2 height-50px width-50px"

                    src={photo.src}
                    alt={photo.title}
                    style={{ border: '0.5px solid #D3D3D3', height: '50x', width: '50px' }}
                  />
                </div>
                <div className="product-title" style={{ marginLeft: '15px' }}>
                  <span>{photo.title}</span>
                </div>
              </div>
            </MenuItem>
          </div>
        ))}
      </Menu>
    </div>
  );
};

export default FloatingPanel;

