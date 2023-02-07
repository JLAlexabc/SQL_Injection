create table user_device (
	device_id serial PRIMARY KEY,
	user_id INT,
	device_type varchar(50),
	os varchar(50),
	browser varchar(50),
	ip_address  VARCHAR(20),
	FOREIGN KEY(user_id) REFERENCES users(id)
);
insert into user_device (user_id,device_type, os, browser, ip_address) values (2,'phone', 'IOS', 'Edge', '192.168.1.2');
insert into user_device (user_id,device_type, os, browser, ip_address) values (1, 'computer', 'windows', 'Edge', '193.168.1.23');
insert into user_device (user_id,device_type, os, browser, ip_address) values (4, 'table', 'android', 'X-v', '193.188.12.23');
insert into user_device (user_id,device_type, os, browser, ip_address) values (5, 'computer', 'Mac', 'Safair', '123.138.25.28');
