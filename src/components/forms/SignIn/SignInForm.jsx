import { observer } from "mobx-react-lite"
import { useState } from "react";
import { Container, CssBaseline, Paper, TextField, Typography, Grid, Button, Link } from "@mui/material"
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import store from "../../../store"
import AuthStore from "../../../store/Auth";

const theme = createTheme();
const SignInForm = observer(() => {
    const [wasSubmit] = useState(false); 
    const { authStore }= store;

    // const isFormValid = 
    // !authStore.isPasswordNotCorrect && !authStore.isConfirmPasswordNotCorrect 
    // && !authStore.isFirstNameNotValid && !authStore.isLastNameNotValid && !authStore.isEmailNotValid

    const handleInputChange = (key, e) => {
        const value = e.target.value;
        authStore.updateFormValue(key, value);
    }
    return(
        <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff' }}>
        <ThemeProvider theme={theme}>
        <Container>
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    
                    </Avatar> 
        <Typography component='h1' variant='h7'>
            SignIn
        </Typography>
        <Box sx={{ mt: 3}}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                label='Email'
                fullWidth
                type='email'
                value={AuthStore.email}
                onChange={(e) => handleInputChange('email', e)}
                error={wasSubmit && !!authStore.isEmailNotValid}
                helperText={(wasSubmit && authStore.isEmailNotValid) || ''}
                />
            </Grid>
            <Grid item xs={12}>
             <TextField
                label="Password"
                type='password'
                fullWidth
                error={wasSubmit && !!authStore.isPasswordNotCorrect}
                helperText={(wasSubmit && authStore.isPasswordNotCorrect) || ''}
                value={authStore.password}
                onChange={(e) => handleInputChange('password', e)}
             />
           </Grid>
           <Grid item xs={12}>
           <Button fullWidth variant='contained' type='submit' size="large">
        SignIn
        </Button>
           </Grid>
        </Grid>
        <Link href="/signup" variant="body2">Register</Link>
        </Box>
    </Box>
        </Container>
        </ThemeProvider>
        </Paper>
          
        )
    })

export default SignInForm