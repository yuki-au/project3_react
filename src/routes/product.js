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
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

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

  // *********delete row part starts***********

  let hist = useHistory();

  function removeRow(id) {

    var fd = new FormData();
    fd.append('productID', JSON.stringify(id));
    
    fetch('http://localhost/match/admin/admin-api.php?action=deletePro', {
            mode:'cors',
            method: "POST",
            referrerPolicy: 'no-referrer',
            body:fd
            })
            .then((response) => {
              
              if (response.status === 400) {
                alert("Fail to delete");
                return
                
              } else if (response.status === 200) {
                console.log("successful");
                window.location.reload(hist.push("/product"));

              }
            });
  }

    // *********delete row part ends***********
    
    return (
     <>
      <AdminMenu />
    
      <TableContainer component={Paper}>
      <h2>Product panel</h2>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.productID}>
                <TableCell align="center">{item.productID}</TableCell>
                <TableCell align="center">{item.productName}</TableCell>
                <TableCell align="center">{item.productPrice}</TableCell>
                <TableCell id="delete" allign="right">
                  <Button id ="deletebutton" onClick={() => removeRow(item.productID)}>Delete</Button>
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </>
    );
    
    }

export default Product

