import { Menu, MenuItem } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { Drawer, Icon, Button, ListItem, ListItemText, ListItemAvatar } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const Side = () => {
  const [open, setOpen] = useState(false);

  const handleFilterClose = () => {
  //  setAnchorEl(null);
  console.log('test in Side')
  };

  const handleSelection = (e) => {
    // let title = e.currentTarget.querySelector('.product-title span').textContent
    // setItemSelected(title)
    console.log('test in Side')
  }

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


  const getList = () => (
    <div style={{ width: 250 }} onClick={() => setOpen(false)}>
      {photos.map((photo, index) => (
        <ListItem button key={index} onClick={handleFilterClose}>
          <ListItemAvatar>
            <Avatar src={photo.src} sx={{ border: '0.5px solid #D3D3D3', height: '50px', width: '50px' }} />
          </ListItemAvatar>
          <ListItemText sx={{ marginLeft: '15px' }} primary={photo.title} />
        </ListItem>
      ))}
    </div>
  );

  return (
    <>
      <Button sx={{ color: 'black' }} onClick={() => setOpen(true)}>
        <FilterListIcon sx={{ marginRight: '6px' }} />
        Filter
      </Button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        anchor="left"
        icon={<Icon>menu</Icon>}
      >
        {getList()}
      </Drawer>
    </>
  );
};

export default Side;

 // const data = [
  //   {
  //     name: "Home",
  //   },
  //   { name: "Trash"}
  // ];

  // {data.map((item, index) => (
  //   <ListItem button key={index}>
  //     <ListItemIcon>{item.icon}</ListItemIcon>
  //     <ListItemText primary={item.name} />
  //   </ListItem>
  // ))}