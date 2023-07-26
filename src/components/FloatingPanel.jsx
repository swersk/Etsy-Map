import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import FormLabel from '@mui/material/FormLabel';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import FilterListIcon from '@mui/icons-material/FilterList';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';


const FloatingPanel = ({ setShowMarkers, setShowHeatMap, showHeatMap, data, setData, handleMarkers, initialData }) => {


  const [buttonRef, setButtonRef] = useState(null);
  const [itemSelected, setItemSelected] = useState('')
  const [anchorEl, setAnchorEl] = useState(null);
  const [showAllSelected, setShowAllSelected] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);

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
    setShowAllSelected(!showAllSelected)
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

  const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

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
    <>
      <div
        id="floating-panel"
        style={{
          position: 'absolute',
          bottom: '33px',
          left: '9px',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          fontFamily: "Arial",
        }}
      >

        <div style={{ width: '100%' }}>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleFilterClose}
            //to not hide the button when expanded
            anchorOrigin={{
              vertical: 'bottom', //menu positioned below the button
              horizontal: 'right', //menu positioned to the right of the button
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            getContentAnchorEl={null} // Disable the default anchor handling
            //other styling
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

        <div style={{
          border: '1px solid #ccc',
          borderRadius: '2px',
          background: '#f5f5f5',
          padding: '5px',
          marginBottom: '7px'
        }}>
          <FormGroup>

            <Stack direction="column" alignItems="center">
              <LightTooltip title="Turn markers on/off" placement="right-start" arrow>
              <FormLabel
              sx={{
                '&:hover':{
                  color: '#000000',
                }
              }}
              >Markers</FormLabel>
              </LightTooltip>
              <Stack direction="row" alignItems="center">
                <Typography>Off</Typography>
                <Switch onChange={handleMarkers} defaultChecked inputProps={{ 'aria-label': 'toggle switch' }} />
                <Typography>On</Typography>
              </Stack>
            </Stack>
            <Stack direction="column" alignItems="center">
            <LightTooltip title="Turn heatmap on/off" placement="right-start" arrow>
              <FormLabel
               sx={{
                '&:hover':{
                  color: '#000000',
                }
              }}
              >Heatmap</FormLabel>
              </LightTooltip>
              <Stack direction="row" alignItems="center">
                <Typography>Off</Typography>
                <Switch onChange={handleToggle} defaultChecked inputProps={{ 'aria-label': 'toggle switch' }} />
                <Typography>On</Typography>
              </Stack>
            </Stack>
          </FormGroup>
        </div>
        <div style={{ width: "100%" }}>
          <div style={{ marginBottom: '7px', background: '#f5f5f5' }}>
            <Button
              ref={setButtonRef}
              id="filter-button"
              className="google-button"
              sx={{
                color: '#000000',
                fontSize: '17px',
                fontWeight: '400',
                background: '#f5f5f5',
                textTransform: 'none',
                padding: '5px 9px',
                width: '100%',
                cursor: 'pointer',
                fontFamily: 'apple-system, BlinkMacSystemFont, "Roboto", "Droid Sans", "Segoe UI", "Helvetica", Arial, sans-serif',
                '&:hover': {
                  background: '#ccc',
                },
              }}
              onClick={handleFilterClick}
            >
              <FilterListIcon sx={{ marginRight: '6px' }} />
              {itemSelected ? itemSelected : 'Filter'}
            </Button>
            <Divider orientation="horizontal" sx={{
              width: '100%',
              height: '1px',
              backgroundColor: '#ccc',
              margin: '0',
            }} />
            <Button
              id="showall-button"
              className="google-button"
              sx={{
                color: '#000000',
                fontSize: '17px',
                fontWeight: '400',
                background: '#f5f5f5',
                textTransform: 'none',
                width: '100%',
                cursor: 'pointer',
                fontFamily: 'apple-system, BlinkMacSystemFont, "Roboto", "Droid Sans", "Segoe UI", "Helvetica", Arial, sans-serif',
                '&:hover': {
                  background: '#ccc',
                },
              }}
              onClick={handleShowAll}
            >
              Show All
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingPanel;
