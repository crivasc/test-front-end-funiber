import React,{ useEffect, useState } from 'react'
import { users } from '../utils/HttpClient';
import Pagination from '@mui/material/Pagination';
import TablePagination from '@mui/material/TablePagination';
import Box from '@mui/material/Box';

const Footer = () => {
    const [Total, setTotal] = useState(0);
    const [page, setPage] = useState(0);

    const [rowsPerPage, setRowsPerPage] = useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
            
    useEffect(() => {
        users().then(response=>{
            setTotal(response.total)
            setPage(response.page)
            setRowsPerPage(response.per_page+4)
        });
    }, []);
  return (
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
      <Pagination count={Total} size="small" />
      <TablePagination
       size="small"
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </Box>
  )
}

export default Footer