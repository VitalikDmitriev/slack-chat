import { Grid, TextField, Button, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import store from "../../../store";
import { Paper } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';

const theme = createTheme();

const SignUpForm = observer(() => {
    const [wasSubmit, setWasSubmit] = useState(false); 
    const { authStore }= store;

    const isFormValid = 
        !authStore.isPasswordNotCorrect && !authStore.isConfirmPasswordNotCorrect 
        && !authStore.isFirstNameNotValid && !authStore.isLastNameNotValid && !authStore.isEmailNotValid

    const onSubmit = async (e) => {
        e.preventDefault();
        setWasSubmit(true);
        if (isFormValid) {
            console.log('form calling');
            await authStore.signUp()
        }
    }

    const handleInputChange = (key, e) => {
        const value = e.target.value;
        authStore.updateFormValue(key, value);
    }

    return (
        <form sx={{ width: '100%' }} onSubmit={onSubmit}>
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff' }}>
 <ThemeProvider theme={theme}>
   <Container component="main" maxWidth="xs">
     <CssBaseline />
      <Box
       sx={{
         marginTop: 8,
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
       }}
     >
       <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
       <LockIcon/>
       </Avatar>
       <Typography component="h1" variant="h7">
         Register
       </Typography>
       <Box sx={{ mt: 3 }}>
         <Grid container spacing={2}>
           <Grid item xs={12} sm={6}>
             <TextField
                label="Firstname"
                fullWidth
                value={authStore.firstName}
                onChange={(e) => handleInputChange('firstName', e)}
                error={wasSubmit && !!authStore.isFirstNameNotValid}
                helperText={(wasSubmit && authStore.isFirstNameNotValid) || ''}
             />
           </Grid>
           <Grid item xs={12} sm={6}>
             <TextField
                label="Lastname"
                fullWidth
                value={authStore.lastName}
                onChange={(e) => handleInputChange('lastName', e)}
                error={wasSubmit && !!authStore.isLastNameNotValid}
                helperText={(wasSubmit && authStore.isLastNameNotValid) || ''}
             />
           </Grid>
           <Grid item xs={12}>
             <TextField
               label="Email"
               fullWidth 
               type="email"
               value={authStore.email}
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
             <TextField
              label="Confirm password"
              type='password'
              fullWidth
              value={authStore.passwordConfirm}
              onChange={(e) => handleInputChange('passwordConfirm', e)}
              error={wasSubmit && !!authStore.isConfirmPasswordNotCorrect}
              helperText={(wasSubmit && authStore.isConfirmPasswordNotCorrect) || ''}
             />
           </Grid>
           <Grid item xs={12}>
             <FormControlLabel
               control={<Checkbox value="allowExtraEmails" color="primary" />}
               label="I agree with the community rules"
             />
           </Grid>
         </Grid>
         <Button fullWidth variant='contained' type='button'>
                     SignUp
                 </Button>
         <Grid container justifyContent="flex-end">
           <Grid item>
             <Link href="/signin" variant="body2">
               Already have an account? Sign in
             </Link>
           </Grid>
         </Grid>
       </Box> 
     </Box>
   </Container>
 </ThemeProvider>
 </Paper>
 </form>
    )
})

export default SignUpForm;
