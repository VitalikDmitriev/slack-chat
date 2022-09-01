import { Grid, Paper, Button, Typography, Container, Alert } from "@mui/material";
import { Box } from "@mui/material";
import signup  from '../../../store/Auth';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import LockIcon from '@mui/icons-material/Lock';
import { observer } from "mobx-react-lite";
import store from "../../../store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ControlledInput from "../../ui/ControlledInput";
import * as yup from "yup";
import { useHistory } from "react-router";
import { auth } from '../../../firebase';
import { useState } from "react";

const Schema = yup.object({
    firstname: yup.string().required('Введите имя пользователя').min(3, 'Слишком коротрое имя'),
    lastname: yup.string().required('Введите фамилию пользователя').min(3, 'Слишком коротрая фамилия'),
    email: yup.string().required('Введите email').email("Невалидный email"),
    password: yup.string().required('Введите пароль').min(6, 'Слишком короткий пароль'),
    confirmPassword: yup.string().required('Введите пароль').oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),  
});

const SignUpForm = observer(() => { 
    const { authStore }= store;
    const form = useForm({
        resolver: yupResolver(Schema),
    });
    const router = useHistory()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        try{
            setError('')
            setLoading(true)
            // Тут измени чутка я же функцию для того чтобы это не писать долго написал
            await auth.createUserWithEmailAndPassword(data.email, data.password)
            router.push('/')
        } catch {
            setError('Failed to log up')
        }
        
    } 

    const handleOnRedirect = () => {
        router.push('/signin')
    }

    return (
       
            <form sx={{ width: '100%' }} onSubmit={form.handleSubmit(onSubmit)}>
             <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff' }}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockIcon/>
                </Avatar>
                <Typography component="h1" variant="h7">
                  Registers
                </Typography>
                <Box sx={{ mt: 3 }}>
                <Grid container spacing={2}>

                <Grid item xs={12} sm={6}>
                    <ControlledInput
                        label="Firstname"
                        fullWidth
                        form={form}
                        name="firstname"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ControlledInput
                        label="Lastname"
                        fullWidth
                        form={form}
                        name="lastname"
                    />
                </Grid>
                <Grid item xs={12}>
                    <ControlledInput
                        label="Email"
                        type='email'
                        fullWidth
                        form={form}
                        name="email"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ControlledInput
                        label="Password"
                        fullWidth
                        form={form}
                        type="password"
                        name="password"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ControlledInput
                        label="Confirm password"
                        fullWidth
                        form={form}
                        type="password"
                        name="confirmPassword"
                    />
                 </Grid>
                 <Grid item xs={6}>
                    <Button fullWidth type='button' onClick={handleOnRedirect}>
                        SignIn
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant='contained' type='submit'>
                        SignUp
                    </Button>
                </Grid>
                <Grid item xs={18} sm={12}>
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

    
        
export default SignUpForm;
