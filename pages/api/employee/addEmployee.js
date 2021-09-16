
import { saveEmployee } from "../../../controller/employee/addEmployee";

export default function handler(req,res){
    //res.status(200).json({status:"wade hari"});
    saveEmployee(req,res);
}