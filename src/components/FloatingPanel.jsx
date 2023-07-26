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
  const [itemSelected, setItemSelected] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [showAllSelected, setShowAllSelected] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    const filterData = () => {
      if (data.length > 0) {
        const filteredData = initialData.filter(item => item.item === itemSelected);
        setData(filteredData);
      }
    };
    filterData();
  }, [itemSelected]);

  const handleShowAll = () => {
    setData(initialData);
    setShowHeatMap(true);
    setShowMarkers(true);
    setShowAllSelected(!showAllSelected);
  };

  const handleToggle = () => {
    setShowHeatMap(!showHeatMap);
  };

  const handleSelection = (e) => {
    let title = e.currentTarget.querySelector('.product-title span').textContent;
    setItemSelected(title);
  };

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

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
          fontFamily: 'Arial',
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
            {/* Menu content here */}
          </Menu>
        </div>
        <div
          style={{
            border: '1px solid #ccc',
            borderRadius: '2px',
            background: '#f5f5f5',
            padding: '5px',
            marginBottom: '7px',
          }}
        >
          <FormGroup>
            <Stack direction="column" alignItems="center">
              <LightTooltip title="Turn markers on/off" placement="right-start" arrow>
                <FormLabel sx={{ '&:hover': { color: '#000000' } }}>Markers</FormLabel>
              </LightTooltip>
              <Stack direction="row" alignItems="center">
                <Typography>Off</Typography>
                <Switch onChange={handleMarkers} defaultChecked inputProps={{ 'aria-label': 'toggle switch' }} />
                <Typography>On</Typography>
              </Stack>
            </Stack>
            <Stack direction="column" alignItems="center">
              <LightTooltip title="Turn heatmap on/off" placement="right-start" arrow>
                <FormLabel sx={{ '&:hover': { color: '#000000' } }}>Heatmap</FormLabel>
              </LightTooltip>
              <Stack direction="row" alignItems="center">
                <Typography>Off</Typography>
                <Switch onChange={handleToggle} defaultChecked inputProps={{ 'aria-label': 'toggle switch' }} />
                <Typography>On</Typography>
              </Stack>
            </Stack>
          </FormGroup>
        </div>
      </div>
    </>
  );
};

export default FloatingPanel;
