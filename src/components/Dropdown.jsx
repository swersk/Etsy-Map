import { Menu, MenuItem, MenuList, Popover, Popper, ClickAwayListener } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/Create';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import GetAppIcon from '@mui/icons-material/GetApp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [nestedDropdown, setNestedDropdown] = useState(false);

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

  const handleContact = () => {
    const emailAddress = 'ms.swersky@gmail.com';
    const subject = 'Regarding your Etsy sales map';
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoUrl;
  };


  return (
    <>
      <Box sx={{position: 'absolute', top: 6, right: 10, justifyContent: 'right'}}>
        <Tooltip title="More Options">
          <IconButton
            onClick={handleClick}
            aria-controls={open ? 'options-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 42, height: 42 }} src="https://i.etsystatic.com/iusa/fef472/95287663/iusa_75x75.95287663_mbwt.jpg?version=0" alt="Lauren's avatar" />
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
          <Avatar src="https://i.etsystatic.com/isla/330fa4/56457224/isla_180x180.56457224_t77zstsm.jpg?version=0"/>
          My Account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleContact}>
          <ListItemIcon>
            <CreateIcon  fontSize="small" />
          </ListItemIcon>
          Contact
        </MenuItem>
        <MenuItem onClick={handleDownload}>
          <ListItemIcon>
            <GetAppIcon fontSize="small" />
          </ListItemIcon>
            Download Shop Data
        </MenuItem>
      </Menu>
      </Box>
    </>
  );
};

export default Dropdown;
