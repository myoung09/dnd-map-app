import { Save } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

const SaveButton = ({ getState, filename }) => {
    const downloadJSON = () => {
        const data = getState();
        const jsonData = new Blob([JSON.stringify(data)], { type: 'application/json' });
        localStorage.setItem('DandDSession', JSON.stringify(data));
        const jsonURL = URL.createObjectURL(jsonData);
        const link = document.createElement('a');
        link.href = jsonURL;
        link.download = `${filename}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Button variant="contained" color="primary" onClick={downloadJSON}>
            <Box display="flex" flexDirection="column" alignItems="center">
            <Typography>
                Save
            </Typography>
                <Save />
            </Box></Button>
    );
};

export default SaveButton;