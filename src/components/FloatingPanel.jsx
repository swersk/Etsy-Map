
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const FloatingPanel = ({ setShowHeatMap, showHeatMap, data }) => {

const [itemSelected, setItemSelected] = useState('')

useEffect(() => {
  console.log('data', data)
  const filterData = () => {
    if (data.length > 0) {
      const filteredData = data.filter(item => item.item === itemSelected);
      console.log('Filtered data:', filteredData)
      // pass the filtered data to map to trigger useEffect and change pins
    }
  };
  filterData();
}, [data, itemSelected]);

  const handleToggle = () => {
    setShowHeatMap(!showHeatMap);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);

  //  setSelectedProduct(product);
  };

  const handleSelection = (e) => {
    let title = e.currentTarget.querySelector('.product-title span').textContent
    setItemSelected(title)
    console.log('Selected item title:', title);
  }

  //productTitle is a string
  const handleFilterClose = () => {
   // setSelectedProduct(productTitle);
    setAnchorEl(null);
  };

  const photos = [
    //add the rest of the photos
    {
      src: "https://i.etsystatic.com/12475356/r/il/196c6f/4122318507/il_75x75.4122318507_38c6.jpg",
      title: 'Camino de Santiago Bandages, Plasters, 30 pcs',
    },
    { src: 'https://i.etsystatic.com/12475356/r/il/9b34b1/4740924743/il_75x75.4740924743_suz9.jpg',
      title: 'Camino de Santiago Bandages, Plasters, 30 pcs'
    },
    { src: 'https://i.etsystatic.com/12475356/r/il/004e5a/4740976481/il_75x75.4740976481_fqy7.jpg',
      title: 'Camino de Santiago Bandages, Plasters, 30 pcs'
    },
    { src: 'https://i.etsystatic.com/12475356/c/1000/794/1000/…il/05d94e/4278333409/il_75x75.4278333409_iwrw.jpg',
      title: 'Sticker, Buen Camino! (Camino de Santiago)'
    },
    { src: 'https://i.etsystatic.com/12475356/c/1080/858/535/9…il/cb45b7/4230175724/il_75x75.4230175724_mc7h.jpg',
      title: 'Sticker, Buen Camino! (Camino de Santiago)'
    },
    { src: 'https://i.etsystatic.com/12475356/c/1360/1081/778/…il/05100a/4233850976/il_75x75.4233850976_jnqh.jpg',
      title: '  Sticker, Buen Camino! (Camino de Santiago)'
    },
  ];

  // useEffect(() => {
  //   const filterMarkers = () => {
  //     const selectedProduct = anchorEl ? anchorEl.textContent : null;
  //     const filteredMarkers = selectedProduct
  //       ? data.filter(item => item.title === selectedProduct)
  //       : data;

  //     setFilteredMarkers(filteredMarkers);
  //   };

  //   filterMarkers();
  // }, [anchorEl, data, setFilteredMarkers]);


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
        {photos.map((photo, index) => (
          <li key={index}>
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
              <div onClick={handleSelection} className="flag" style={{ display: 'flex', alignItems: 'center' }}>
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
          </li>
        ))}
      </Menu>
    </div>
  );
};

export default FloatingPanel;




// //v1

// // import React, { useState, useEffect } from 'react';

// // const FloatingPanel = ({ setShowHeatMap, showHeatMap, heatmap }) => {

// //   const handleToggle = () => {
// //     setShowHeatMap(!showHeatMap);
// //   };

// //   return (
// //     <div id="floating-panel" style={{
// //       position: 'absolute',
// //       top: '82px',
// //       left: '200px',
// //       zIndex: 1,
// //       border: '1px solid #ccc',
// //       borderRadius: '2px',
// //       background: '#fff',
// //       padding: '5px',
// //       display: 'flex',
// //       justifyContent: 'flex-start',
// //       alignItems: 'center',
// //     }}>
// //       <button id="toggle-heatmap" onClick={handleToggle}>
// //         Toggle Heatmap
// //       </button>
// //       <button id="change-radius">Change radius</button>
// //       <button id="change-opacity">Change opacity</button>
// //     </div>
// //   );
// // };

// // export default FloatingPanel;
