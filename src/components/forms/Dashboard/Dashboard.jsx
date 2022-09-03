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
    
    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          router.push("/signin")
        } catch {
          setError("Failed to log out")
        }
      }

    return (
        <Grid>
                <Typography component="h2" variant="h19">
                     Email: {currentUser.email}
                     Name: {currentUser.displayName}
                     {/* SeconName: {currentUser.display} */}

                </Typography>
                <Button fullWidth type='submit' onClick={handleLogout}>
                Logout
            </Button>
        </Grid>
              
       
    )
}
)

export default Dashboard
