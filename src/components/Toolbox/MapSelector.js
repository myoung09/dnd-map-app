import React, { useRef } from "react";

import { Box, ToggleButton, Tooltip, Typography } from '@mui/material';

const MapSelector = ({ icon, onMapChange, helperText }) => {
    const fileUploadRef = useRef();

    const handleClick = () => {
        fileUploadRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onMapChange(reader.result);
            }
            reader.readAsDataURL(file);
        }
    };

    return (
        <Tooltip title={helperText}>
            <ToggleButton value="changeMap" key="changeMap" onClick={handleClick}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="subtitle1">Change Map</Typography>
                    {icon}
                    <input ref={fileUploadRef} hidden={true} type="file" onChange={handleFileChange} />
                </Box>
            </ToggleButton>
        </Tooltip>
    );
};

export default MapSelector;