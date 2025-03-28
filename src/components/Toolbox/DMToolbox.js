import React, { useEffect, useState } from "react";

import MapSelector from './MapSelector';
import { AppBar, Box, ToggleButtonGroup, ToggleButton, Button, TextField } from '@mui/material';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import StreetviewIcon from '@mui/icons-material/Streetview';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FlareIcon from '@mui/icons-material/Flare';
import EffectColorPicker from "./EffectColorPicker";
import ConnectionStatus from "./ConnectionStatus";
import SaveButton from "./SaveButton";
import LoadButton from "./LoadButton";
import { PhotoLibrary } from "@mui/icons-material";
import MapIcon from '@mui/icons-material/Map';
import PanoramaPhotosphereIcon from '@mui/icons-material/PanoramaPhotosphere';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';

const DMToolbox = ({
    handleDMMapChange,
    handlePlayerMapChange,
    handleFogOfWarReveal,
    handlePlayerView,
    handleMapMove,
    handleDMViewRescale,
    handlePlayerViewRescale,
    handleEffects,
    handleEffectColorChange,
    handlePhotoLibraries,
    getState,
    handleLoad,
    handleBattleTracker,

    mapMoveSelected,
    fogOfWarRevealSelected,
    playerViewSelected,
    dmViewScale,
    playerViewScale,
    effectsSelected,
    photoLibrariesSelected,
    selectedEffectColor,
    connectionStatus
}) => {
    const [selectedTool, setSelectedTool] = useState();

    useEffect(() => {
        if (mapMoveSelected) {
            setSelectedTool('mapMove');
        } else if (fogOfWarRevealSelected) {
            setSelectedTool('fogReveal');
        } else if (playerViewSelected) {
            setSelectedTool('playerView');
        } else if (effectsSelected) {
            setSelectedTool('areaEffect');
        } else if (photoLibrariesSelected) {
            setSelectedTool('photoLibraries');
        }
    }, [mapMoveSelected, fogOfWarRevealSelected, playerViewSelected, effectsSelected, photoLibrariesSelected])

    const dmViewScaleChangeHandler = (e) => {
        handleDMViewRescale(parseFloat(e.target.value));
    };

    const playerViewScaleChangeHandler = (e) => {
        handlePlayerViewRescale(parseFloat(e.target.value));
    };

    return (
        <Drawer variant="permanent" anchor="left">
            <Grid container direction="column" spacing={2} sx={{ padding: 2 }}>
                <Grid item>
                    <ConnectionStatus connectionStatus={connectionStatus} />
                </Grid>
                <Grid item>
                    <ToggleButtonGroup orientation="horizontal" size="large" aria-label="Small sizes" sx={{ flexWrap: "wrap" }}>
                        <MapSelector icon={<MapIcon />} onMapChange={handleDMMapChange} helperText="Add a Map to DM screen" />
                        <MapSelector icon={<PanoramaPhotosphereIcon />} onMapChange={handlePlayerMapChange} helperText="Add a Map to Player screen" />
                    </ToggleButtonGroup>
                </Grid>
                <Grid item>
                    <Button variant="outlined" onClick={handleBattleTracker} aria-label="Show battle tracker" sx={{ flexWrap: "wrap" }}>
                        <SportsKabaddiIcon />
                    </Button>
                </Grid>
                <Grid item>
                    <ToggleButtonGroup value={selectedTool} orientation="horizontal" size="large" aria-label="Small sizes" sx={{ flexWrap: "wrap" }}>
                        <ToggleButton value="mapMove" key="mapMove" onClick={handleMapMove}>
                            <ControlCameraIcon />
                        </ToggleButton>
                        <ToggleButton value="playerView" key="playerView" onClick={handlePlayerView}>
                            <StreetviewIcon />
                        </ToggleButton>
                        <ToggleButton value="fogReveal" key="fogReveal" onClick={handleFogOfWarReveal}>
                            <VisibilityIcon />
                        </ToggleButton>
                        <ToggleButton value="areaEffect" key="areaEffect" onClick={handleEffects}>
                            <FlareIcon />
                        </ToggleButton>
                        <ToggleButton value="photoLibraries" key="photoLibraries" onClick={handlePhotoLibraries}>
                            <PhotoLibrary />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                <Grid item>
                    <EffectColorPicker color={selectedEffectColor} onColorChange={handleEffectColorChange} />
                </Grid>
                <Grid item>
                    <TextField id={'DMViewScale'} type="number" value={dmViewScale} inputProps={{
                        step: 0.1,
                        min: 0.1,
                        max: 5,
                        type: 'number',
                    }} onChange={dmViewScaleChangeHandler} />
                </Grid>
                <Grid item>
                    <TextField id={'PlayerViewScale'} type="number" value={playerViewScale} inputProps={{
                        step: 0.1,
                        min: 0.1,
                        max: 5,
                        type: 'number',
                    }} onChange={playerViewScaleChangeHandler} />
                </Grid>
                <Grid item>
                    <SaveButton getState={getState} filename="session" />
                </Grid>
                <Grid item>
                    <LoadButton handleStateLoad={handleLoad} />
                </Grid>
            </Grid>
        </Drawer>
    );
};

export default DMToolbox;