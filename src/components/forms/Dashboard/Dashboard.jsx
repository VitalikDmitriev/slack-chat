import React from 'react'
import { useState } from 'react'
import { useAuth } from '../../../store/Auth'
import { useHistory } from 'react-router-dom'
import { observer } from "mobx-react-lite";
import { Typography, Grid, Button } from '@mui/material';

const Dashboard = observer(() => {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const router = useHistory()



  

    return (
        <Grid>
                <Typography component="h2" variant="h19">
                     Email: {currentUser.email}
                </Typography>
                <Button fullWidth type='submit'>
                Logout
            </Button>
        </Grid>
              
       
    )
}
)

export default Dashboard
