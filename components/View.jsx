import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const View = () => {
  return (
                <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" sx={{width:1800,minHeight:50,backgroundColor:'transparent',boxShadow:'none'}}> 
                    <Toolbar sx={{justifyContent:'space-between'}}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ textAlign:'center',flexGrow: 1 }}>
                        Your journey to space awaits.
                    </Typography>
                    <Button color="inherit">View</Button>
                    <Button color="inherit">Add</Button>
                    </Toolbar>
                </AppBar>
                </Box>
        
    //     <div>
    //     <table>
    //     <tr>
    //         <th>Company</th>
    //         <th>Contact</th>
    //         <th>Country</th>
    //     </tr>
    //     <tr>
    //         <td>Alfreds Futterkiste</td>
    //         <td>Maria Anders</td>
    //         <td>Germany</td>
    //     </tr>
    //     <tr>
    //         <td>Centro comercial Moctezuma</td>
    //         <td>Francisco Chang</td>
    //         <td>Mexico</td>
    //     </tr>
    //     </table>
    // </div>
  )
}

export default View