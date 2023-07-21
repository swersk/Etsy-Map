
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const FloatingPanel = ({ setShowHeatMap, showHeatMap, data, setData, handleMarkers, handleRadius, initialData }) => {

  const [itemSelected, setItemSelected] = useState('')
  const [filteredMarkers, setFilteredMarkers] = useState(data);
  const [anchorEl, setAnchorEl] = useState(null);

  //when there's a new product selected from dropdown
  useEffect(() => {
    const filterData = () => {
      //reset data to the entire array

      if (data.length > 0) {
        const filteredData = initialData.filter(item => item.item === itemSelected);
        console.log('Filtered data length::', filteredData.length)

        setData(filteredData)

        // pass the filtered data to map to trigger useEffect and change pins
      }
    };
    filterData();
  }, [itemSelected]);

    const handleShowAll = () => {
      setData(initialData)
      console.log('data in show all', data.length)
    }

    //toggle heatmap
    const handleToggle = () => {
      setShowHeatMap(!showHeatMap);
    };

    //retrieve product title from filter product dropdown
    const handleSelection = (e) => {
      let title = e.currentTarget.querySelector('.product-title span').textContent
      setItemSelected(title)
    }

    const handleFilterClick = (event) => {
      setAnchorEl(event.currentTarget);
    //  setSelectedProduct(product);
    };

    //productTitle is a string
    const handleFilterClose = () => {
    // setSelectedProduct(productTitle);
      setAnchorEl(null);
    };

  //filter by product dropdown photos&titles
  const photos = [
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
    { src: 'https://i.etsystatic.com/12475356/r/il/3a78ef/4282184100/il_75x75.4282184100_ib1w.jpg',
      title: 'Bandages, Plasters (2 pack) - Camino de Santiago'
    },
    { src: 'https://i.etsystatic.com/12475356/c/870/692/208/32…il/46e51f/4784511940/il_75x75.4784511940_58ta.jpg',
      title: 'Bandages, Plasters (2 pack) - Camino de Santiago'
    },
    { src: 'https://i.etsystatic.com/12475356/c/2000/2000/0/0/il/63d30f/4416907678/il_75x75.4416907678_3bma.jpg',
      title: 'Bandages (3-pack), Camino de Santiago Plasters, 30 pcs per box'
    },
    { src: '	https://i.etsystatic.com/12475356/r/il/72703d/4344046976/il_75x75.4344046976_az6t.jpg',
      title: 'Bandages (2-pack), Camino de Santiago Plasters, 30 pcs per box'
    },
    { src: '	https://i.etsystatic.com/12475356/c/2500/1987/224/…il/dbb022/4488832554/il_75x75.4488832554_6rqc.jpg',
      title: 'Magnets (3pcs), Camino de Santiago'
    },
    { src: '	https://i.etsystatic.com/12475356/r/il/a3c20e/4075375872/il_75x75.4075375872_dpy7.jpg',
      title: 'Italian Bandages, Italy Plasters, 30 pcs'
    },
    { src: '	https://i.etsystatic.com/12475356/r/il/595e7a/4372395533/il_75x75.4372395533_abtf.jpg',
      title: 'Italian Bandages (2-pack), Italy Plasters, 30 pcs each'
    },
    { src: '	https://i.etsystatic.com/12475356/r/il/aa5f74/4379076555/il_75x75.4379076555_o6ft.jpg',
      title: 'Italian Bandages (3-pack), Italy Plasters, 30 pcs each'
    },
  ];



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
        marginLeft: '150px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontFamily: "Guardian-EgypTT, Charter, 'Charter Bitstream', Cambria, 'Noto Serif Light', 'Droid Serif', Georgia, serif",
      }}
    >
      <Button
        id="toggle-heatmap"
        onClick={handleMarkers}
        className="e2moi"
        size="small"
        sx={{ color: '#000', background: 'white', marginRight: '10px' }}
      >
        Toggle Markers
      </Button>
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
        onClick={handleRadius}
        className="e2moi"
        size="small"
        sx={{ color: '#000', background: 'white', marginRight: '10px' }}
      >
        Change heatmapradius
      </Button>
      <Button
        id="filter-button"
        className="e2moi"
        size="small"
        sx={{ color: '#000', background: 'white', cursor: 'pointer', marginRight: '10px' }}
        onClick={handleFilterClick}
      >
        Filter by Product
      </Button>
      <Button
        id="showall-button"
        className="e2moi"
        size="small"
        sx={{ color: '#000', background: 'white', cursor: 'pointer'}}
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
          </div>
        ))}
      </Menu>
    </div>
  );
};

export default FloatingPanel;


