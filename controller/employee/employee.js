
import { executeQuery } from "../../config/db";

const getAllEmployees=async(req,res)=>{

    try {
        res.send(await executeQuery("SELECT * FROM employee",[]));
        
    } catch (err) {
        res.status(500).json(err);
        
    }
}

export {getAllEmployees};