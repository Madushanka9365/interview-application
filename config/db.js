
const {createPool} = require("mysql");

const pool=createPool({
    host:"localhost",
    user:"root",
    password:"",
    port:3306,
    database:"interview",
});


pool.getConnection((err)=>{

    if(err){
            console.log("Connection Error bosaa");
    }else{
        console.log("connected to db machan");
    }

});

const executeQuery=(query,arraParms)=>{
    return new Promise((resolve,reject)=>{
        try {
            pool.query(query,arraParms,(err,data)=>{
                if(err){
                   console.log("error in executed query"); 
                   console.log(err);    
                   reject(err);
                }
                resolve(data);
            });
        } catch (err) {
            reject(err);
        }
    });
}

module.exports ={executeQuery};