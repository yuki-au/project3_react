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





 function User() {
    
    const classes = useStyles();
    const [items, setItems] = useState([]);

    useEffect(() =>{
      showUsers();
    },[]);

    function showUsers(){
     
      fetch('http://localhost/match/admin/admin-api.php?action=callUser', {
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

  function deleteRow(uid) {

    var fd = new FormData();
    fd.append('userID', JSON.stringify(uid));
    
    fetch('http://localhost/match/admin/admin-api.php?action=deleteUser', {
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
                window.location.reload(hist.push("/user"));
              }
            });
  }

  // *********delete row part ends***********
    
  
    return (
      <>
      <AdminMenu />
      <TableContainer component={Paper}>
      <h2>Users panel</h2>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">UserName</TableCell>
              <TableCell align="center">password</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.userID}>
                <TableCell align="center">{item.userID}</TableCell>
                <TableCell align="center">{item.username}</TableCell>
                <TableCell align="center">{item.password}</TableCell>
                <TableCell id="delete" allign="right">
                  <Button id ="deletebutton" onClick={() => deleteRow(item.userID)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </>
    );
    
    }

export default User
