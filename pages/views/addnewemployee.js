import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from "react";

export default function addNewEmployee(){

    const [emp_name,setName]=useState('');
    const[emp_phone,setPhone]=useState('');
    const[emp_address,setAddress]=useState('');
    const[emp_email,setEmail]=useState('');

    const cancelCourse = () => { 
        document.getElementById("create-course-form").reset();
      }

    const handleSubmit=e=>{
        e.preventDefault();
        const data={
            emp_name,
            emp_phone,
            emp_address,
            emp_email,
        }

        fetch('http://localhost:3000/api/employee/addEmployee',{
            method:'post',
            body:JSON.stringify(data)
        });

        console.log(data);
        cancelCourse();
    }

     
    
    return ( 
        <div>
            
           <fieldset style = {{width: 600}}> <legend>Add New Employee</legend>
                <form onSubmit={handleSubmit} id="create-course-form">
                
                    
                    <TextField 
                            id="e_name" 
                            label="Employee Name " 
                            style = {{width: 600}} 
                            required
                            onChange={e => setName(e.target.value)}        
                    />
                    <br/>
                    <TextField 
                            id="e_phone" 
                            label="Epmloyee Phone" 
                            style = {{width: 600}}
                            required
                            onChange={e=>setPhone(e.target.value)}
                    />
                    <br/>
                    <TextField 
                            id="e_address" 
                            label="Employee Address" 
                            required
                            style = {{width: 600}}
                            onChange={e=>setAddress(e.target.value)}        
                    />
                    <br/>
                    <TextField 
                            id="e_email" 
                            label="Employee Email" 
                            style = {{width: 600}}
                            required
                            onChange={e=>setEmail(e.target.value)}        
                    />
                    <br/><br/>
                     
                    <Button variant="contained" color="primary" type="submit" > 
                        Add Employee                           
                    </Button>
                 

                </form>
            </fieldset>

        </div>
     );
}
 
