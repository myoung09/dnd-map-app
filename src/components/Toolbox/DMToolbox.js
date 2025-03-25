import React, { useEffect, useState } from "react";

import MapSelector from './MapSelector';
import { Box, ToggleButtonGroup, TextField, InputLabel, Typography } from '@mui/material';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FlareIcon from '@mui/icons-material/Flare';
import EffectColorPicker from "./EffectColorPicker";
import ConnectionStatus from "./ConnectionStatus";
import SaveButton from "./SaveButton";
import LoadButton from "./LoadButton";
import { PhotoLibrary } from "@mui/icons-material";
import MapIcon from '@mui/icons-material/Map';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import LabeledToggleButton from './LabeledToggleButton';
import CompleteSessionButton from "./CompleteSessionButton";

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
            <Grid container direction="column" spacing={4} p={5} justifyContent={"space-between"} alignItems={"space-between"} flexGrow={1}>
                <ToggleButtonGroup value={selectedTool}>
                    <Grid item container direction="column" spacing={4} justifyContent={"center"} alignItems={"center"}>
                        <Grid item>
                            <ConnectionStatus connectionStatus={connectionStatus} />
                        </Grid>
                        <Grid item container direction="column" spacing={2} justifyContent={"center"} alignItems={"center"}>
                            <InputLabel>DM Map Controls</InputLabel>
                            <Grid item container direction="row" spacing={2} gap={2} justifyContent={"center"} alignItems={"center"}>
                                <MapSelector icon={<MapIcon />} onMapChange={handleDMMapChange} helperText="Add a Map to DM screen" />
                                <TextField
                                    id={'DMViewScale'}
                                    type="number"
                                    value={dmViewScale}
                                    label="Map Scale"
                                    inputProps={{
                                        step: 0.1,
                                        min: 0.1,
                                        max: 5,
                                        type: 'number',
                                    }}
                                    onChange={dmViewScaleChangeHandler}
                                />
                                <LabeledToggleButton value="mapMove" key="mapMove" onClick={handleMapMove} icon={<ControlCameraIcon />} label="Move" />
                                <LabeledToggleButton value="fogReveal" key="fogReveal" onClick={handleFogOfWarReveal} icon={<VisibilityIcon />} label="Reveal" />
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" spacing={2} justifyContent={"center"} alignItems={"center"}>
                            <InputLabel>Player's Map Controls</InputLabel>
                            <Grid item container direction="row" spacing={2} gap={2} justifyContent={"center"} alignItems={"center"}>
                                <MapSelector icon={<MapIcon />} onMapChange={handlePlayerMapChange} helperText="Add a Map to Player's screen" />
                                <TextField
                                    id={'DMPlayerViewScaleViewScale'}
                                    type="number"
                                    value={playerViewScale}
                                    label="Map Scale"
                                    inputProps={{
                                        step: 0.1,
                                        min: 0.1,
                                        max: 5,
                                        type: 'number',
                                    }}
                                    onChange={playerViewScaleChangeHandler}
                                />
                                <LabeledToggleButton value="playerView" key="playerView" onClick={handlePlayerView} icon={<ControlCameraIcon />} label="Move" />
                            </Grid>
                        </Grid>
                        {/* <Grid item>
                    <InputLabel>Battle Tracker</InputLabel>
                    <Button variant="outlined" onClick={handleBattleTracker} aria-label="Show battle tracker" sx={{ flexWrap: "wrap" }}>
                        <SportsKabaddiIcon />
                    </Button>
                </Grid> */}
                        <Grid item container direction="column" spacing={2} justifyContent={"center"} alignItems={"center"}>
                            <InputLabel>Map Effects</InputLabel>
                            <Grid item container spacing={2} gap={2} justifyContent={"center"} alignItems={"center"}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: 1, borderColor: 'grey.800', padding: 1 }}>
                                    <Typography variant="subtitle1">Effect Color</Typography>
                                    <EffectColorPicker color={selectedEffectColor} handleColorChange={handleEffectColorChange} />
                                </Box>
                                <LabeledToggleButton value="areaEffect" key="areaEffect" onClick={handleEffects} icon={<FlareIcon />} label="Draw" />
                            </Grid>
                        </Grid>
                        {/* <Grid item container direction="column" spacing={2} justifyContent={"center"} alignItems={"center"}>
                    <InputLabel>Photo Libraries</InputLabel>
                    <Grid item container spacing={2} justifyContent={"center"} alignItems={"center"}>
                        <ToggleButton value="photoLibraries" key="photoLibraries" onClick={handlePhotoLibraries}>
                            <PhotoLibrary />
                        </ToggleButton>
                    </Grid>
                </Grid> */}
                    </Grid>
                </ToggleButtonGroup>
                <Grid item container direction="column" spacing={2} justifyContent={"center"} alignItems={"center"}>
                    <InputLabel>Save/Load</InputLabel>
                    <Grid item container spacing={2} gap={2} justifyContent={"center"} alignItems={"center"}>
                        <SaveButton getState={getState} />
                        <LoadButton handleLoad={handleLoad} />
                        <CompleteSessionButton />
                    </Grid>
                </Grid>
            </Grid>
        </Drawer>
    );
};

export default DMToolbox;