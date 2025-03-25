import { LocalHotel } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

const CompleteSessionButton = () => {
const handleCompleteSession = () => {
    if (window.confirm("Are you sure you want to complete the session? This action cannot be undone.")) {
        localStorage.removeItem('DandDSession');
    }
};
    return (
        <Button variant="contained" color="primary" onClick={handleCompleteSession}>
            <Box display="flex" flexDirection="column" alignItems="center">
            <Typography>
                Complete
            </Typography>
                <LocalHotel />
            </Box></Button>
    );
};

export default CompleteSessionButton;