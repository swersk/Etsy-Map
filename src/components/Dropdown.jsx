import { Menu, MenuItem } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import CreateIcon from '@mui/icons-material/Create';
import GetAppIcon from '@mui/icons-material/GetApp';
import { useState } from 'react';

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const openShop = () => {
    window.open('https://www.etsy.com/uk/shop/BabelooDesigns?ref=seller-platform-mcnav')
  }

  const handleDownload = () => {
    window.open('https://www.etsy.com/uk/your/shops/BabelooDesigns/download')
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(!open);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <>
      <Box sx={{
        position: 'absolute',
        top: 8,
        right: 3,
        justifyContent: 'right',
        cursor: 'pointer',
        '&hover': {
          background: '#555',
        }
        }}
        >
        <Tooltip title="Shop Info">
          <IconButton
            onClick={handleClick}
            aria-controls={open ? 'options-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 42, height: 42 }} src="/shop2.png" alt="Lauren's avatar" />
          </IconButton>
        </Tooltip>

        <Menu
          anchorEl={anchorEl}
          id="options-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={openShop}>
            <Avatar src="https://i.etsystatic.com/isla/330fa4/56457224/isla_180x180.56457224_t77zstsm.jpg?version=0" />
            Visit the Shop
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleDownload}>
            <ListItemIcon>
              <GetAppIcon fontSize="small" />
            </ListItemIcon>
            Sales Data
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default Dropdown;
