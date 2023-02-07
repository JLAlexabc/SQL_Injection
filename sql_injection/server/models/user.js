const { Sequelize } = require('sequelize');
const db = require('../db_config/seq_db');

const User = db.define('user',{
    first_name:{
        type:Sequelize.STRING
    },
    last_name:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    }
},{
    freezeTableName:true,
    tableName: "users",
});

(async () => {
    // await User.sync({ force: false });
    // const test1 = await User.create({
    //     first_name:"test2",
    //     last_name: "AAvvv",
    //     email:"test2@sss.com",
    //     password:"123456"
    // });
    // User.findAll().then((data)=>{
    //     console.log(data);
    // })
})()


module.exports = User