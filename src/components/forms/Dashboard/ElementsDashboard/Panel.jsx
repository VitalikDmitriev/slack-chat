import {
    AppBar,
    Box,
    Button,
    Menu,
    MenuItem,
    Stack,
    styled,
    Toolbar,
    Typography
} from '@mui/material';
import React, {useState} from 'react'
import { LoginOutlined } from '@mui/icons-material';
import { Diversity2TwoTone } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useAuth } from '../../../../store/Auth';
import { useHistory } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#6a5acd'
        }
    }
})

const Panel = () => {

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

    const StyleTools = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'space-between',
    });

        return (
            <ThemeProvider theme={darkTheme}>
                <AppBar color='primary' position='sticky'>
                    <StyleTools>
                        <Typography variant='h4'>
                            <Diversity2TwoTone/>
                             Slack-Vitality
                        </Typography>
                        <Stack>
                        <Button 
                        sx={{
                            backgroundColor: '#293133',
                            color:'white',
                            '&:hover': {
                            backgroundColor: '#7D7F7D',
                            color: 'white'
                            }
                        }}
                        variant='contained' 
                        startIcon={<ExitToAppIcon/>}  
                        type='submit' 
                        onClick={handleLogout}>
                            Log Out
                            </Button>
                        </Stack>  
                    </StyleTools>
                </AppBar>
            </ThemeProvider>
          
        );
}

export default Panel;
