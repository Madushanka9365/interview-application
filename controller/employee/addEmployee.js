import { executeQuery } from "../../config/db";

const saveEmployee=async(req,res)=>{
    console.log(req.body);

    const data=JSON.parse(req.body);
    
    const empName=data.emp_name;
    const empPhone=data.emp_phone;
    const empAddress=data.emp_address;
    const empEmail=data.emp_email;

    try {
        let saveEmp=await executeQuery(`insert into employee (emp_name,emp_phone,emp_address,emp_email) values(?,?,?,?)`,[empName,empPhone,empAddress,empEmail]);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

}

export {saveEmployee};
