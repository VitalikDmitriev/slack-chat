import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { Grid } from '@mui/material';


const Center = () => {
    return (
        <Grid
        sx={{
          backgroundColor: 'gray'
        }}
        flex={5}
        p={2}
        >
          <Paper sx={{Width: '100%'}}>
              s
          </Paper>
        </Grid>
        
    );
}

export default Center;
