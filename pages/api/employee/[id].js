import {getEmployeeById} from "../../../controller/employee/searchEmployee";
import { deleteEmployeeById } from "../../../controller/employee/deleteEmployee";
import nc from "next-connect";

const handler=nc();
handler.get(getEmployeeById);
handler.delete(deleteEmployeeById);

export default handler;