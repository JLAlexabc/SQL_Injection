const express = require('express');
const { Client } = require('pg');
const router = express.Router();
const db_url = require('../db_config/db');


//1. add user input check on both frontend & backend
//1.1 the check can be "regExp" check, to block some special chars

//GET       localhost:8080/api/login/
router.post('/',async (req,respond)=>{
    const email = req.body.email;
    const password = req.body.password;  

    //we can add some code here to prevent sql injection, do check on uers input 
    const query = `select * from users where email='${email}' and password='${password}'`;

    console.log(query);
    const client = new Client(db_url);
    try{
        
        await client.connect();
        const result = await client.query(query);
        console.log(result);//if result >1  result[0].rows
        respond.status(200).json(result.rows);
        client.end();
    }catch(err){
        respond.status(400).json({"msg":"error happended in the server, try again"});
        client.end();
    }
});

module.exports = router;

//' or ''=''; DROP TABLE user_device; --
//' or ''=''; SELECT version(); --
// SELECT @@VERSION
// SELECT current_database();


//2. in DB user, it should never use the admin user to connect and create the db, tables,...
//      because of amdin user's rights, once been hacked DB system is in danger.
//      2.1 create a new user only for read & write data in the table, and not assign anyother rights.
//3. Never directly write plain sql query in the program, ex:
//      combine user input with sql query-->
//      "select * from table where name = ${input1}"
//      3.1 better to do use parmas--> "select * from table where name={$0}"
//          or use library like "sequelize" to aovid directly write sql query in the program.
//4. Never return query result driectly back to frontend, 
//      do return bool if return data is not necessary
//      if have to return data, frontend should never display all of the data, only part of it.
//5. Do not display srouce code in frontedn use "JShaman" tool to mix the code.