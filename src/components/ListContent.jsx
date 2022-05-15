import React,{ useEffect, useState } from 'react'
import { users } from '../utils/HttpClient';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowSort from './ArrowSort';
import Avatar from '@mui/material/Avatar';

const FetchTest = ({counter}) => {

    const [List, setList] = useState([]);
    const [Sort, setSort] = useState('');
    const [Arrows, setArrows] = useState('');

    const tableHead = ['Photo','Name','Last name','Email'];

    useEffect(() => {
        let cosa = []
        Sort == 'Name' && (cosa = List.sort((a,b) => a.first_name > b.first_name ? 1 : a.first_name < b.first_name ? -1 : 0))
        Sort == 'Last name' && (cosa = List.sort((a,b) => a.last_name > b.last_name ? 1 : a.last_name < b.last_name ? -1 : 0))
        Sort == 'Email' && (cosa = List.sort((a,b) => a.email > b.email ? 1 : a.email < b.email ? -1 : 0))

        setTimeout(() => setSort(''), 100);
    }, [Sort]);

    useEffect(() => {
        users().then(response=>{
            setList(response.data)
            counter(response.data.length)
        });
    }, []);

    const gris = {
        color:'#717171',
        fontSize:'1rem'
    }
  return (
    <TableContainer sx={{
        border:'solid 1px rgba(0,0,0,.1)',
        borderRadius:'10px',
        boxShadow:'0px 0px 10px rgba(0,0,0,.2)',
        marginTop:'10px',
        marginBottom:'10px'
    }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                {tableHead.map(headItem=>(
                    headItem === 'Photo' || headItem === 'Email' 
                    ? (
                        <TableCell align="left" key={headItem} sx={{
                            color:'#607d8b',fontSize:'1rem'
                        }}>{headItem}</TableCell>
                    ) : (
                        <TableCell align="left" key={headItem} sx={{color:'#607d8b',fontSize:'1rem'}}>
                            <span onClick={()=>{setSort(headItem); setArrows(headItem);}}><ArrowSort direct={Arrows} ident={headItem}/></span>
                            <span>{headItem}</span>
                        </TableCell>
                    )
                ))}
            </TableRow>
        </TableHead>
        <TableBody>
            {List.map((item) => (
            <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    <Avatar alt={item.name} src={item.avatar} sx={{width:'80px',height:'80px'}}/>
                </TableCell>
                <TableCell align="left" sx={{color:'#0288d1', fontSize:'1rem'}}>{item.first_name}</TableCell>
                <TableCell align="left"sx={gris}>{item.last_name}</TableCell>
                <TableCell align="left" sx={gris}><MailOutlineIcon sx={{color:'#0288d1', fontSize:'1.5rem', float:'left', marginRight:2, cursor:'pointer'}}/>{item.email}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
  )
}

export default FetchTest