import { Grid, TextField, Button, Typography, AlertTitle } from "@mui/material";
import { Paper } from "@mui/material";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import { observer } from "mobx-react-lite";
import store from "../../../store";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ControlledInput from "../../ui/ControlledInput";
import { useHistory } from 'react-router'
import { auth } from '../../../firebase'
import { useState } from "react";
import { Alert } from "@mui/material";


const Schema = yup.object({
    email: yup.string().required('Введите email').email("Невалидный email"),
    password: yup.string().required('Введите пароль').min(6, 'Слишком короткий пароль'),  
});

const SignInForm = observer(() => {
    const { authStore }= store;
    const router = useHistory()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
  

    const form = useForm({
        resolver: yupResolver(Schema),
    })


    const onSubmit = async (data) => {
        try{
          setError('')
          setLoading(true)
           // Тут измени чутка я же функцию для того чтобы это не писать долго написал
          await auth.signInWithEmailAndPassword(data.email, data.password)
          router.push('/')
        } catch {
          setError('Failed to log in')
        }
    }

    const handleOnRedirect = () => {
        router.push('/signup')
    }

    return (
        <form sx={{ width: '100%' }} onSubmit={form.handleSubmit(onSubmit)}>
             <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff' }}>
        <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                </Avatar>
                <Typography component="h1" variant="h7">
                  Log In
                </Typography>
                <Box sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <ControlledInput
                        label="Email"
                        name="email"
                        form={form}
                        fullWidth
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <ControlledInput
                        label="Password"
                        name="password"
                        form={form}
                        fullWidth
                        type="password"
                    />
                    </Grid>
                    <Grid item xs={18} sm={6}>
                    <Button fullWidth onClick={handleOnRedirect}>
                        SignUp
                    </Button>
                    </Grid>
                    <Grid item xs={18} sm={6}>
                    <Button fullWidth variant='contained' type='submit'>
                         SignIn
                        </Button>
                    </Grid>
                    <Grid item xs={18} sm={18}>
                       {error && <Alert severity="error">{error}</Alert>} 
                    </Grid>                
                  </Grid>
                </Box> 
              </Box>
            </Container>
        </Paper>
        </form>
    )
})

export default SignInForm;




