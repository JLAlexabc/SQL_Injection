const express = require('express');
const router = express.Router();
const User = require('../models/user')
// const db = require('../db_config/seq_db');
//using sequlize model to query the DB
//GET       localhost:8080/api/loginEx/
router.post('/', async (req,res)=>{
    console.log(req.body.email);
    console.log(req.body.password);
    const email = req.body.email;
    const password = req.body.password;  
    //   User.findAll()//==> select * from users
    //dsdas@dsda.com' or ''='
      const result = await User.findOne({
        where: {
          "email": email,
          "password":password,
        }
      })
      
      if(result){
        res.status(200).json({result})
      }else{
        res.status(400).json({"msg":"no user found in database!"})
      }
});

module.exports = router;