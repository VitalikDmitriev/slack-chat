import { TextField } from '@mui/material'
import React from 'react'

function InputCanal(props) {
    return (
            <TextField sx={{
            width: 300,
        }} {...props} type='text'/>
        
    )
}

export default InputCanal
