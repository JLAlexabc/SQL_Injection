# SQL400
SQL Injection Project for CSCI 400

	The main goal of our project is to find what is the best practice of preventing SQL injection.

# Getting Started with SQL Injection Project

### Pull the code..
	1.  git clone https://github.com/SQL400/SQL400.git

### Create your local Database
	1. open a Terminal in your computer
	2. In Terminal input: psql -h localhost -U postgres -p
	3. enter your postgres password
	4. In Terminal input: CREATE DATABASE CSCI400;
	5. In Terminal input: \c CSCI400
	6. In Terminal input: \i 'SQL400\\DBinit\\users.sql'   ---> find the file's path on your computer 
	7. In Terminal input: \i 'SQL400\\DBinit\\user_device.sql'  ---> find the file's path on your computer 
### How to start front-end
	0. open a new Terminal tab.
    1. cd sql_injection
    2. npm install
    3. npm start
### How to start back-end
	0. open a new Terminal tab.
	1. cd sql_injection/server
	2. npm install
	3. nodemon server.js
	PS: if there is a issues try to chanage the db connection config file(./db_config/db.js). 
