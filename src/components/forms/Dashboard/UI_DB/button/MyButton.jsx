import { Button } from '@mui/material'
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';

const theme = createTheme({
  palette: {
    primary: {
      main: '#696969',
    },
    secondary: {
     main: '#f44336',

    },
  },
});

function MyButton({children, ...props}) {
    return (
        <ThemeProvider theme={theme}>
             <Button {...props} variant='contained' color='primary'>
                {children} <SendIcon/>
            </Button>
        </ThemeProvider>

      
    )
}

export default MyButton