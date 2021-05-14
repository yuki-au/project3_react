import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AdminMenu from '../components/adminMenu';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});





 function Product() {
    
    const classes = useStyles();
    const [items, setItems] = useState([]);

    useEffect(() =>{
      showProduct();
    },[]);

    function showProduct(){
     
      fetch('http://localhost/match/admin/admin-api.php?action=callProduct', {
        mode:'cors',
        method: "GET",
        referrerPolicy: 'no-referrer',
        })
        .then((response) => {
          if (response.status === 400) {
            alert("error");
            return;
  
          
          } else if (response.status === 200) {
            response.json().then((data) =>{
              setItems(data);
              console.log(data);
            })
         
          }
        });
    
  
  }

    return (
     <>
      <AdminMenu />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.productID}>
                <TableCell align="center">{item.productID}</TableCell>
                <TableCell align="center">{item.productName}</TableCell>
                <TableCell align="center">{item.productPrice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </>
    );
    
    }

export default Product
