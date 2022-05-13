import React,{ useEffect, useState } from 'react'
import { users } from '../utils/HttpClient';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styles from '../styles/App.module.scss';

const FetchTest = () => {

    const [List, setList] = useState([]);
    const [Arrow, setArrow] = useState(false);

    const tableHead = ['Photo','Name','Last name','Email'];


    const handleArrow=(e)=>{
        !Arrow ? setArrow(true) : setArrow(false)
        List.reverse()
    }

    useEffect(() => {
        users().then(response=>setList(response.data));
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
                    headItem == 'Name' 
                    ? (
                        <TableCell align="left" key={headItem} sx={{
                            color:'#607d8b',
                            fontSize:'1rem',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'between'
                        }}>
                            <div className={styles.arrowIco} onClick={handleArrow}>
                                {!Arrow ? <ArrowDropUpIcon size={10}/>
                                : <ArrowDropDownIcon size={10}/>}
                            </div>
                        {headItem}</TableCell>
                    ) : (
                        <TableCell align="left" key={headItem} sx={{
                            color:'#607d8b',fontSize:'1rem'
                        }}>{headItem}</TableCell>
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
                    <img src={item.avatar} alt={item.name} style={{
                        borderRadius:'50%',
                        width:'100px',
                        height:'100px',
                        overflow:'hidden'
                    }}/>
                </TableCell>
                <TableCell align="left" sx={{color:'#0288d1', fontSize:'1rem'}}>{item.first_name}</TableCell>
                <TableCell align="left"sx={gris}>{item.last_name}</TableCell>
                <TableCell align="left" sx={gris}>{item.email}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
  )
}

export default FetchTest