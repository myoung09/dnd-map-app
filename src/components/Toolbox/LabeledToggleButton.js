import { Box, ToggleButton, Tooltip, Typography } from '@mui/material';

const LabeledToggleButton = ({value, key, icon, onClick, helperText, label }) => {
    return (
        <Tooltip title={helperText}>
            <ToggleButton value={value} key={key} onClick={onClick}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="subtitle1">{label}</Typography>
                    {icon}
                </Box>
            </ToggleButton>
        </Tooltip>
    );
};

export default LabeledToggleButton;