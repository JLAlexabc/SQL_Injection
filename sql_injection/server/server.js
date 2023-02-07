//where the backend server begin
const express = require("express"); // a libray help quickly to set up backend server
const app = express(); // new obejct()
// const db = require('./db_config/db'); // db config file
const db = require('./db_config/seq_db');

app.use(express.json());//set send/recive data in json mode/file

db.authenticate()
    .then(()=>{
      console.log("DB Connection Successfully");
      // console.log(User === db.models.User);
    })
    .catch(err=>console.log(err))
  
//request by the CROS, check out this https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header({'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS'});
  res.header(//cors
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// In MVC desgin mode, controller only for handling data
//but in here use as set of routers, controllers will make different routers for backend server.
app.use('/api',require('./controllers')); //loading up all controllers

//test db connection 
// db.connect()
// db.query('SELECT NOW();', (err, res) => {
//   console.log(err, res)
//   db.end()
// });

//the backend server live on the port 8080
app.listen(8080, () => {
 console.log("Server running on port 8080");
});