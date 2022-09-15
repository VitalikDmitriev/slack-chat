import { Button, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import Delete from '../UI_DB/button/Delete'

const CanalItem = (props)=>{
    return (
            <Stack direction='row' sx={{mt:1, pl: 6}}>
                <ListItem button>
                    <ListItemText>
                        <Typography>{props.canal.nameCanals}</Typography>
                    </ListItemText>
                </ListItem>
                <Button onClick={()=>props.remove(props.canal)}><Delete/></Button>
            </Stack>
        
    )
}

export default CanalItem
