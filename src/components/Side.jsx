import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useState, useEffect, Fragment } from "react";
import {
  Drawer,
  Icon,
  Button,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { styled, useTheme } from "@mui/material/styles";


const Side = ({
  setShowMarkers,
  setShowHeatMap,
  showHeatMap,
  data,
  setData,
  handleMarkers,
  initialData,
  setMapIsLoaded,
  mapIsLoaded,
  markersArr,
  setMarkersArr,
  heatmap
}) => {
  const [open, setOpen] = useState(false);
  const [selectAllChecked, setSelectAllChecked] = useState(true);
  const [checkedItems, setCheckedItems] = useState({});
  const isMobile = window.innerWidth <= 600;

  useEffect(() => {
    const filterData = () => {
      if (Object.keys(checkedItems).length > 0) {
        const filteredData = initialData.filter(
          (item) => checkedItems[item.item]
        );
        setData(filteredData);
      } else {
        setData(initialData);
      }
    };
    filterData();
  }, [checkedItems]);


  const handleSelection = (e, photoTitle) => {
    // Toggle the checked status of the photo item
          e.preventDefault();

         heatmap.setMap(null);

          markersArr.forEach((marker) => {
            marker.setMap(null);
          });

    // Check if already selected, reset to empty obj
    if (checkedItems[photoTitle]) {
      let checkedItemCopy = { ...checkedItems };
      delete checkedItemCopy[photoTitle];
      setCheckedItems(checkedItemCopy);
    } else {


      setCheckedItems((prevCheckedItems) => ({
        ...prevCheckedItems,
        [photoTitle]: !prevCheckedItems[photoTitle],
      }));
    }
    // Check if any checkbox is unchecked to set "Show All" to false
    setSelectAllChecked(
      Object.values(checkedItems).every((isChecked) => isChecked)
    );

    // If mobile, close the side bar upon selection
    if (isMobile) {
      setOpen(false);
    }

  };

  // Drawer close
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleShowAll = () => {
    if (Object.keys(checkedItems).length === 0) {
      setShowMarkers(true);
      setShowHeatMap(true);
      return;
    }

    markersArr.forEach((marker) => {
      marker.setMap(null);
    });
    setData(initialData);
    setShowHeatMap(true);
    setShowMarkers(true);
    setCheckedItems({});
    setSelectAllChecked(true);

    if (isMobile) {
      setOpen(false);
    }
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const photos = [
    {
      src: "/caminoColorful.avif",
      title: "Camino de Santiago Bandages, Plasters, 30 pcs",
    },
    {
      src: "https://i.etsystatic.com/12475356/r/il/72703d/4344046976/il_75x75.4344046976_az6t.jpg",
      title: "Bandages (2-pack), Camino de Santiago Plasters, 30 pcs per box",
    },
    {
      src: "https://i.etsystatic.com/12475356/c/2000/2000/0/0/il/63d30f/4416907678/il_75x75.4416907678_3bma.jpg",
      title: "Bandages (3-pack), Camino de Santiago Plasters, 30 pcs per box",
    },
    {
      src: "/bandagesx2.avif",
      title: "Bandages, Plasters (2 pack) - Camino de Santiago",
    },
    {
      src: "	/italyListingPic.avif",
      title: "Italian Bandages, Italy Plasters, 30 pcs",
    },
    {
      src: "/italyListingPicx2.avif",
      title: "Italian Bandages (2-pack), Italy Plasters, 30 pcs each",
    },
    {
      src: "italyListingPicx3.jpg",
      title: "Italian Bandages (3-pack), Italy Plasters, 30 pcs each",
    },
  ];

  return (
    <>
      <Tooltip
        title="Filter by product"
        placement="right"
        arrow
        style={{ marginLeft: 4 }}
      >
        <Button
          id="filter-button"
          sx={{
            color: "black",
            textTransform: "none",
            fontFamily:
              'apple-system, BlinkMacSystemFont, "Roboto", "Droid Sans", "Segoe UI", "Helvetica", Arial, sans-serif',
            fontSize: "19px",
            fontWeight: "400",
          }}
          onClick={() => setOpen(true)}
        >
          <FilterListIcon
            sx={{
              marginRight: "6px",
              fontFamily:
                "Guardian-EgypTT, Charter, 'Charter Bitstream', Cambria, 'Noto Serif Light', 'Droid Serif', Georgia, serif",
            }}
          />
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
            <ChevronLeftIcon
              sx={{
                color: "black",
                border: "1px solid black",
                borderRadius: "50%",
              }}
            />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div style={{ width: 210 }}>
          {photos.map((photo, index) => (
            <ListItem button key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    onClick={(e) => handleSelection(e, photo.title)}
                    checked={!!checkedItems[photo.title]}
                  />
                }
                label={
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <ListItemAvatar>
                      <Avatar
                        src={photo.src}
                        sx={{
                          border: "0.5px solid #D3D3D3",
                          height: "50px",
                          width: "50px",
                        }}
                      />
                    </ListItemAvatar>
                    {photo.title.includes("Italian") &&
                    photo.title.includes("2-pack") ? (
                      <ListItemText
                        sx={{ marginLeft: "9px" }}
                        primary={"Italian (x2)"}
                      />
                    ) : photo.title.includes("Italian") &&
                      photo.title.includes("3-pack") ? (
                      <ListItemText
                        sx={{ marginLeft: "9px" }}
                        primary={"Italian (x3)"}
                      />
                    ) : photo.src ===
                      "https://i.etsystatic.com/12475356/r/il/72703d/4344046976/il_75x75.4344046976_az6t.jpg" ? (
                      <ListItemText
                        sx={{ marginLeft: "9px" }}
                        primary={"Camino (2x)"}
                      />
                    ) : photo.title.includes("Bandages (3-pack)") ? (
                      <ListItemText
                        sx={{ marginLeft: "9px" }}
                        primary={"Camino (x3)"}
                      />
                    ) : photo.title.includes("Camino") &&
                      !photo.title.includes("-") ? (
                      <ListItemText
                        sx={{ marginLeft: "9px" }}
                        primary={"Camino"}
                        secondary={
                          <Typography
                            variant="caption"
                            component="span"
                            color="black"
                          >
                            (Colorful)
                          </Typography>
                        }
                      />
                    ) : photo.title.includes("Camino") &&
                      photo.title.includes("Plasters") ? (
                      <ListItemText
                        sx={{ marginLeft: "9px" }}
                        primary={"Camino (x2)"}
                      />
                    ) : photo.title.includes("Stickers") ? (
                      <ListItemText
                        sx={{ marginLeft: "9px" }}
                        primary={"Stickers"}
                      />
                    ) : (
                      <ListItemText
                        sx={{ marginLeft: "9px" }}
                        primary={"Italian"}
                      />
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
              color: "#000000",
              fontSize: "17px",
              fontWeight: "400",
              background: "#f5f5f5",
              textTransform: "none",
              width: "80%",
              border: "1px solid black",
              cursor: "pointer",
              fontFamily:
                'apple-system, BlinkMacSystemFont, "Roboto", "Droid Sans", "Segoe UI", "Helvetica", Arial, sans-serif',
              "&:hover": {
                background: "#ccc",
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
