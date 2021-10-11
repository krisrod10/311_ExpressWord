-- users table 
create table users2 (
id INT NOT NULL AUTO_INCREMENT,
username VARCHAR(100) NOT NULL UNIQUE,
fullname VARCHAR(100),
email VARCHAR(100) NOT NULL UNIQUE,
password VARCHAR(100),
PRIMARY KEY (id)
)ENGINE=Innodb;