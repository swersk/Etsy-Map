import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import FormLabel from '@mui/material/FormLabel';

const FloatingPanel = ({ setShowMarkers, setShowHeatMap, showHeatMap, data, setData, handleMarkers, handleRadius, initialData }) => {

  const [itemSelected, setItemSelected] = useState('')
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const filterData = () => {
      if (data.length > 0) {
        const filteredData = initialData.filter(item => item.item === itemSelected);
        setData(filteredData)
      }
    };
    filterData();
  }, [itemSelected]);

  const handleShowAll = () => {
    setData(initialData);
    setShowHeatMap(true);
    setShowMarkers(true);
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
        top: '620px',
        left: '9px',
        width: '170px',
        zIndex: 1,
        border: '1px solid #ccc',
        borderRadius: '2px',
        background: '#f5f5f5',
        padding: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontFamily: "Guardian-EgypTT, Charter, 'Charter Bitstream', Cambria, 'Noto Serif Light', 'Droid Serif', Georgia, serif",

      }}
    >

    <FormGroup>
      <Stack direction="column" alignItems="center">
        <FormLabel>Markers</FormLabel>
        <Stack direction="row" alignItems="center">
          <Typography>Off</Typography>
          <Switch onChange={handleMarkers} defaultChecked inputProps={{ 'aria-label': 'toggle switch' }} />
          <Typography>On</Typography>
        </Stack>
      </Stack>
      <Stack direction="column" alignItems="center">
        <FormLabel>Heatmap</FormLabel>
        <Stack direction="row" alignItems="center">
          <Typography>Off</Typography>
          <Switch onChange={handleToggle} defaultChecked inputProps={{ 'aria-label': 'toggle switch' }} />
          <Typography>On</Typography>
        </Stack>
      </Stack>
      <Stack direction="column" alignItems="center">
        <FormLabel>HeatMap Radius</FormLabel>
        <Stack direction="row" alignItems="center">
          <Typography>Small</Typography>
          <Switch onChange={handleRadius} defaultChecked inputProps={{ 'aria-label': 'toggle switch' }} />
          <Typography>Large</Typography>
        </Stack>
      </Stack>
    </FormGroup>


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


