import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useState } from "react";


export const getStaticProps=async()=>{

    const res=await fetch("http://localhost:3000/api/employee/allusers");
    const ud=await res.json();

    return{
        props:{returnUsers:ud}
    }
}


const AllUsers = ({returnUsers}) => {

    


    return ( 
        <div>
            <h1>All Employees</h1>
            
            
            <TableContainer component={Paper}>
                <Table aria-label="simple table" >
                    <TableHead>
                    <TableRow>
                        <TableCell>User Id</TableCell>
                        <TableCell align="right">Employee Name</TableCell>
                        <TableCell align="right">Employee Phone Number&nbsp;</TableCell>
                        <TableCell align="right">Employee Address&nbsp;</TableCell>
                        <TableCell align="right">Employee Email&nbsp;</TableCell>
                        <TableCell align="right">Action&nbsp;</TableCell>

                      
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {returnUsers.map((emp) => (
                        <TableRow key={emp.id}>
                        <TableCell component="th" scope="row">
                            {emp.id}
                        </TableCell>
                        <TableCell align="right">{emp.emp_name}</TableCell>
                        <TableCell align="right">{emp.emp_phone}</TableCell>
                        <TableCell align="right">{emp.emp_address}</TableCell>
                        <TableCell align="right">{emp.emp_email}</TableCell>
                        <TableCell align="right">
                            <Button 
                                    variant="contained" 
                                    color="primary"
                                    
                                    > 
                                 View                           
                            </Button>
                            
                        </TableCell>
                        
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
     );
}
 
export default AllUsers;