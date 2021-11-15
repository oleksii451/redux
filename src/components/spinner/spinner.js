import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = () => {
    return (
        <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
            <CircularProgress color="secondary" />
        </Stack>
    )
}

export default Spinner;
