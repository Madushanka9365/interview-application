import { executeQuery } from "../../config/db";

const getEmployeeById=async(req,res)=>{

    try {
        let id=req.query.id;
        let userData=await executeQuery(`select * from employee where id=${id}`,[]);
        res.send(userData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
        
    }
}

export {getEmployeeById};