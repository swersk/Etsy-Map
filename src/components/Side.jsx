import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { useState, useEffect, Fragment } from 'react';
import { Drawer, Icon, Button, ListItem, ListItemText, ListItemAvatar } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { styled, useTheme } from '@mui/material/styles';

// TODO: make sure drawer doesn't cover infowindow / recenter map
// TODO: avoid rerender on every click
// TODO: add sticker filter functionality below

const Side = ({ setShowMarkers, setShowHeatMap, showHeatMap, data, setData, handleMarkers, initialData }) => {

  const [open, setOpen] = useState(false);
  const [selectAllChecked, setSelectAllChecked] = useState(true);
  const [checkedItems, setCheckedItems] = useState({});
  const isMobile = window.innerWidth <= 600;

  useEffect(() => {
    const filterData = () => {
      if (Object.keys(checkedItems).length > 0) {
        const filteredData = initialData.filter(item => checkedItems[item.item]);
        setData(filteredData);
      } else {
        setData(initialData);
      }
    };
    filterData();
  }, [checkedItems]);

  const handleDrawerClose = () => {
    setOpen(false);
  }

  const handleShowAll = () => {
    setData(initialData);
    setShowHeatMap(true);
    setShowMarkers(true);
    setCheckedItems({});
    setSelectAllChecked(true);

    if (isMobile) {
      setOpen(false);
    }
  }

  const handleSelection = (photoTitle) => {
    // Toggle the checked status of the photo item
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [photoTitle]: !prevCheckedItems[photoTitle],
    }));
    // Check if any checkbox is unchecked to set "Show All" to false
    setSelectAllChecked(Object.values(checkedItems).every((isChecked) => isChecked));

    // If mobile, close the side bar upon selection
    if (isMobile) {
      setOpen(false);
    }
  };

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));


  const photos = [
    {
      src: "/caminoColorful.avif",
      title: 'Camino de Santiago Bandages, Plasters, 30 pcs',
    },
    {
      src: '/bandagesx2.avif',
      title: 'Bandages, Plasters (2 pack) - Camino de Santiago'
    },
    {
      src: '	/italyListingPic.avif',
      title: 'Italian Bandages, Italy Plasters, 30 pcs'
    },
    // {
    //   src: '/4stickers.avif',
    //   title: 'Stickers'
    // },
  ];

  return (
    <>
      <Tooltip title="Filter by product" placement="right" arrow style={{ marginLeft: 4 }}>
        <Button
          id="filter=button"
          sx={{
            color: 'black',
            textTransform: 'none',
            fontFamily: 'apple-system, BlinkMacSystemFont, "Roboto", "Droid Sans", "Segoe UI", "Helvetica", Arial, sans-serif',
            // fontFamily: "Guardian-EgypTT, Charter, 'Charter Bitstream', Cambria, 'Noto Serif Light', 'Droid Serif', Georgia, serif",
            fontSize: '19px',
            fontWeight: '400',
          }} onClick={() => setOpen(true)}>
          <FilterListIcon sx={{ marginRight: '6px' }} />
          Filter
        </Button>
      </Tooltip>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        anchor="left"
        icon={<Icon>menu</Icon>}
        variant="persistent"
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon sx={{ border: '1px solid gray', borderRadius: '50%' }} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div style={{ width: 210 }}>
          {photos.map((photo, index) => (
            <ListItem button key={index}>
              <FormControlLabel
                control={<Checkbox onClick={() => handleSelection(photo.title)} checked={!!checkedItems[photo.title]} />}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ListItemAvatar>
                      <Avatar
                        src={photo.src}
                        sx={{ border: '0.5px solid #D3D3D3', height: '50px', width: '50px' }}
                      />
                    </ListItemAvatar>
                    {photo.title.includes('Italian') ? (
                      <ListItemText sx={{ marginLeft: '9px' }} primary={'Italian'} />
                    ) : photo.title.includes('Camino') && photo.title.includes('2') ? (
                      <ListItemText sx={{ marginLeft: '9px' }} primary={`Camino`} secondary={<Typography variant="caption" component="span" color="textSecondary">(Blue/Yellow)</Typography>} />
                    ) : photo.title.includes('Camino') ? (
                      <ListItemText sx={{ marginLeft: '9px' }} primary={`Camino`} secondary={<Typography variant="caption" component="span" color="textSecondary">(Colorful)</Typography>} />
                    ) : (
                      <ListItemText sx={{ marginLeft: '9px' }} primary={photo.title} />
                    )}
                  </Box>
                }
              />
            </ListItem>
          ))}
          <br />
          <Divider />
          <br />
          <Button
            id="showall-button"
            className="google-button"
            onClick={handleShowAll}
            sx={{
              color: '#000000',
              fontSize: '17px',
              fontWeight: '400',
              background: '#f5f5f5',
              textTransform: 'none',
              width: '80%',
              cursor: 'pointer',
              fontFamily:
                'apple-system, BlinkMacSystemFont, "Roboto", "Droid Sans", "Segoe UI", "Helvetica", Arial, sans-serif',
              '&:hover': {
                background: '#ccc',
              },
            }}
          >
            Show All
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default Side;

