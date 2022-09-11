import React from 'react'
import { useState } from 'react'
import { useAuth } from '../../../store/Auth'
import { useHistory } from 'react-router-dom'
import { observer } from "mobx-react-lite";
import { Typography, Grid, Button } from '@mui/material';
import Panel from './ElementsDashboard/Panel'
import Left from './ElementsDashboard/Left';
import { Box, Stack } from '@mui/system';
import Center from './ElementsDashboard/Center';

const Dashboard = observer(() => {
    return (
        <Box spacing={1}>
            <Panel/>  
             <Stack direction='row'>
                 <Left/>
                 <Center/>
             </Stack>
        </Box>
              
       
    )
}
)

export default Dashboard
