import React from "react";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FormLabel from "@mui/material/FormLabel";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";

// This component is the toggle menu on the bottom left

const FloatingPanel = ({
  setShowMarkers,
  setShowHeatMap,
  showHeatMap,
  data,
  setData,
  handleMarkers,
  initialData,
  markers
}) => {
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  const handleToggle = () => {
    setShowHeatMap(!showHeatMap);
  };

  return (
    <>
      <div
        id="floating-panel"
        style={{
          position: "absolute",
          bottom: "33px",
          left: "9px",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "2px",
            backgroundColor: "#FFFFFF",
            padding: "5px",
            marginBottom: "3px",
          }}
        >
          <FormGroup>
            <Stack direction="column" alignItems="center">
              <LightTooltip
                title="Turn markers on/off"
                placement="right-start"
                arrow
              >
                <FormLabel sx={{ "&:hover": { color: "#000000" } }}>
                  Markers
                </FormLabel>
              </LightTooltip>
              <Stack direction="row" alignItems="center">
                <Typography>Off</Typography>
                <Switch
                  onChange={handleMarkers}
                  checked={markers}
                  defaultChecked
                  inputProps={{ "aria-label": "toggle switch" }}
                />
                <Typography>On</Typography>
              </Stack>
            </Stack>
            <Divider />
            <Stack direction="column" alignItems="center">
              <LightTooltip
                title="Turn heatmap on/off"
                placement="right-start"
                arrow
              >
                <FormLabel sx={{ "&:hover": { color: "#000000" } }}>
                  Heatmap
                </FormLabel>
              </LightTooltip>
              <Stack direction="row" alignItems="center">
                <Typography>Off</Typography>
                <Switch
                  onChange={handleToggle}
                  defaultChecked
                  checked={showHeatMap}
                  inputProps={{ "aria-label": "toggle switch" }}
                />
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
