import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import styles from '../styles/App.module.scss';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ViewColumnOutlinedIcon from '@mui/icons-material/ViewColumnOutlined';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ApiIcon from '@mui/icons-material/Api';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Avatar from '@mui/material/Avatar';

const Header = ({count}) => {

    const btn = {
        textTransform:'capitalize',
        marginLeft:'10px',
        marginRight:'10px'
    }
    const btn2 = {
        textTransform:'capitalize',
        paddingTop:'2em',
    }
    const current = {
        textTransform:'capitalize',
        paddingTop:'1.9em',
        borderTop:'solid 3px #1976d2',
        color:'#1976d2'
    }

    const stringAvatar=(name)=> {
        return {
          sx: {
            bgcolor:'#1976d2',
          },
          children: `${name.split(' ')[0][0]}`,
        };
      }
  return (
  <Box sx={{paddingLeft:0}}>
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'space-between', marginBottom:'2em'}}>
        <ButtonGroup variant="string" aria-label="primary button group" className={styles.grouped}>
            <ApiIcon style={{marginTop:25, fontSize:'30px', color:'#1976d2'}}/>
            <Button sx={btn2}>Dashboard</Button>
            <Button sx={btn2}>Reports</Button>
            <Button sx={btn2}>Messages</Button>
            <Button sx={current}>Freelancers</Button>
            <Button sx={btn2}>Jobs</Button>
        </ButtonGroup>
        <Box
            component="form"
            sx={{display: 'flex', alignItems: 'center', width: 200 }}>
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
                size='small'
            />
        </Box>
        
        <Avatar {...stringAvatar('Crithian Vásconez')}/>
        <Typography variant="subtitle1" component="h2" sx={{color:'#37474f'}}>
            Cristhian Vásconez
        </Typography>
    </Box>
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'space-between', marginBottom:'1em'}}>
        <Typography variant="h5" component="h2" sx={{color:'#607d8b'}}>
            Freelancers <small>(<strong>{count}</strong>)</small>
        </Typography>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
            <Button variant="text" startIcon={<FilterAltIcon />} sx={btn}>
                Filters
            </Button>
            <Button variant="text" startIcon={<ViewColumnOutlinedIcon />} sx={btn}>
                Manage columns
            </Button>
            <Button variant="contained" startIcon={<GroupAddIcon />} sx={btn}>
                Send
            </Button>
            <Button variant="text">
                <MoreHorizIcon/>
            </Button>
        </Box>
    </Box>
  </Box>)
}

export default Header