import { ListItem, Grid, ListItemText, Chip, Divider, List } from '@mui/material';
import React from 'react';
import { Stack } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SettingsIcon from '@mui/icons-material/Settings';
import LockIcon from '@mui/icons-material/Lock';
import Collapse from "@mui/material/Collapse";
import DeleteIcon from '@mui/icons-material/Delete';

 
  

const Left = () => {    
  const [open, setOpen] = React.useState(true);
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
                <ListItem button sx={{ pl: 8 }}>
                <ListItemText primary="Canal 1" />
                <LockIcon/>
                </ListItem>

                <ListItem button sx={{ pl: 8 }}>
                <ListItemText  primary="Canal 2" />
                <LockIcon/>
                </ListItem>

                <ListItem button sx={{ pl: 8 }}>
                <ListItemText primary="Canal 3" />
                <LockIcon/>
                </ListItem>

                <ListItem button sx={{ pl: 8 }}>
                <ListItemText primary="Canal 4" />
                <DeleteIcon/>
                </ListItem>

                <ListItem button>
                <ListItemText primary="Add new Canal" />
                <ControlPointIcon/>
                </ListItem>
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



