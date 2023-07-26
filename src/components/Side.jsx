import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { useState, useEffect, Fragment } from 'react';
import { Drawer, Icon, Button, ListItem, ListItemText, ListItemAvatar } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled, useTheme } from '@mui/material/styles';

const Side = ({ setShowMarkers, setShowHeatMap, showHeatMap, data, setData, handleMarkers, initialData }) => {

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const [itemSelected, setItemSelected] = useState('');
  const [showAllSelected, setShowAllSelected] = useState(true);

  useEffect(() => {
    // const filterData = () => {
    //   if (data.length > 0) {
    //     const filteredData = initialData.filter(item => item.item === itemSelected);
    //     setData(filteredData)
    //   }
    // };
    // filterData();
    console.log('test')
  }, [itemSelected]);

  const handleDrawerClose = () => {
    setOpen(false);
  }

  const handleShowAll = () => {
    setData(initialData);
    setShowHeatMap(true);
    setShowMarkers(true);
    setShowAllSelected(!showAllSelected)
  }

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
      src: '	https://i.etsystatic.com/12475356/r/il/72703d/4344046976/il_75x75.4344046976_az6t.jpg',
      title: 'Bandages (2-pack), Camino de Santiago Plasters, 30 pcs per box'
    },
    {
      src: 'https://i.etsystatic.com/12475356/c/2000/2000/0/0/il/63d30f/4416907678/il_75x75.4416907678_3bma.jpg',
      title: 'Bandages (3-pack), Camino de Santiago Plasters, 30 pcs per box'
    },
    {
      src: '/bandagesx2.avif',
      title: 'Bandages, Plasters (2 pack) - Camino de Santiago'
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

  const getList = () => (
    <div style={{ width: 210 }}>
      {photos.map((photo, index) => (
        <ListItem button key={index}>
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ListItemAvatar>
                  <Avatar
                    src={photo.src}
                    sx={{ border: '0.5px solid #D3D3D3', height: '50px', width: '50px' }}
                  />
                </ListItemAvatar>
                {photo.title.includes('Italian') && photo.title.includes('2-pack') ? (
                  <ListItemText sx={{ marginLeft: '9px' }} primary={'Italian (2-pack)'} />
                ) : photo.title.includes('Italian') && photo.title.includes('3-pack') ? (
                  <ListItemText sx={{ marginLeft: '9px' }} primary={'Italian (3-pack)'} />
                ) : photo.title.includes('Italian') ? (
                  <ListItemText sx={{ marginLeft: '9px' }} primary={'Italian'} />
                ) : photo.title.includes('Camino') && photo.title.includes('2') ? (
                  <ListItemText sx={{ marginLeft: '9px' }} primary={'Camino (2-pack)'} />
                ) : photo.title.includes('Camino') && photo.title.includes('3-pack') ? (
                  <ListItemText sx={{ marginLeft: '9px' }} primary={'Camino (3-pack)'} />
                ) : photo.title.includes('Camino') ? (
                  <ListItemText sx={{ marginLeft: '9px' }} primary={'Camino'} />
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
  );




  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  return (
    <>
      <Tooltip title="Filter by product" placement="right" arrow style={{marginLeft: 4}}>
        <Button
          id="filter=button"
          sx={{
            color: 'black',
            textTransform: 'none',
            fontFamily: 'apple-system, BlinkMacSystemFont, "Roboto", "Droid Sans", "Segoe UI", "Helvetica", Arial, sans-serif',
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
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {getList()}

      </Drawer>
    </>
  );
};

export default Side;
