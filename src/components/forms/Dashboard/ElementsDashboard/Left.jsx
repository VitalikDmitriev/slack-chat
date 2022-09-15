import { ListItem, Grid, ListItemText, Chip, List, Button, Alert } from '@mui/material';
import React from 'react';
import { Stack } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LockIcon from '@mui/icons-material/Lock';
import { useState } from 'react';
import Collapse from "@mui/material/Collapse";
// import CanalItem from './CanalItem';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CanalsList from './CanalList';
import InputCanal from '../UI_DB/input/InputCanal';

 
  

const Left = () => {    
  const [open, setOpen] = React.useState(true);
  const [canals, setCanals] = useState([
  ])
  const [nameCanals, setNameCanal]= useState('')

  const addNewCanals = (e) => {
    e.preventDefault()
    const newCanal = {
      id: Date.now(),
      nameCanals,
    }
    if (nameCanals.length > 1){
      setCanals([...canals, newCanal])
      setNameCanal('')
    } 
    
  }
   
  const removeCanal = (nameCanals) => {
    setCanals(canals.filter(p => p.id !== nameCanals.id))
  }

  const handleClick = () => {
    setOpen(!open);
  };

    return (
      
        <Grid sx={{backgroundColor: '#434B4D'}} flex={1} p={2}>
            <Stack direction='column'>
            <Chip onClick={handleClick} label="Canals" variant="outlined" sx={{color: 'white'}}/>
            <List sx={{color: 'white'}} disablePadding>
            <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
             {/* {сюда добавить хуйню которая будет открываться} */}
        
                <ListItem button sx={{ pl: 8, mt: 2}}>
                <ListItemText primary="Canal 1" />
                <LockIcon/>
                </ListItem>
              
                <ListItem button sx={{ pl: 8, mt: 1 }}>
                <ListItemText  primary="Canal 2" />
                <LockIcon/>
                </ListItem>

                <ListItem button sx={{ pl: 8, mt: 1 }}>
                <ListItemText primary="Canal 3" />
                <LockIcon/>
                </ListItem>
             <CanalsList remove={removeCanal} canals={canals}/>

             <form>
             <Stack direction='row' p={1}>
             <InputCanal 
             sx={{backgroundColor: 'white',
             }} 
             value={nameCanals}
             onChange={e => setNameCanal(e.target.value)}
             type='text'
             />
             <Button onClick={addNewCanals} sx={{backgroundColor: '#A5A5A5,', color: 'white'}}><AddCircleOutlineIcon/></Button>
             </Stack>
             </form>
            </List>
            </Collapse>
            </List>
          </Stack>
          <ListItem button sx={{backgroundColor: '#A5A5A5,', color: 'white'}}>
                <ListItemText primary="Setting" />
                <SettingsIcon/>
                </ListItem>
      </Grid>
      
      
      
  );
}

export default Left;



