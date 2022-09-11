import { TextField } from '@mui/material'
import React from 'react'

function MyInput(props) {
    return (
            <TextField sx={{
            width: 1000,
        }} {...props} type='text' placeholder='Send Email'/>
        
    )
}

export default MyInput
