import UploadIcon from '@mui/icons-material/Upload';
import { useRef } from 'react';
import { Box, Button, Typography } from '@mui/material';

const LoadButton = ({ handleStateLoad }) => {
    const fileUploadRef = useRef();

    const handleClick = () => {
        const localStorageData = localStorage.getItem('DandDSession');
        if (localStorageData) {
            handleStateLoad(JSON.parse(localStorageData));
        } else {
            fileUploadRef.current.click();
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                handleStateLoad(JSON.parse(reader.result));
            }
            reader.readAsText(file);
        }
    };

    return (
        <Button variant="contained" color="error" onClick={handleClick}>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Typography>Load</Typography>
                <UploadIcon />
                <input ref={fileUploadRef} hidden={true} type="file" onChange={handleFileChange} />
            </Box>
        </Button>
    );
};

export default LoadButton;