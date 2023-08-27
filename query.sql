
CREATE DATABASE IF NOT EXISTS todolist;

USE todolist;


CREATE TABLE IF NOT EXISTS tasks (
   id INT PRIMARY KEY AUTO_INCREMENT,
   title VARCHAR(100) NOT NULL,
   status VARCHAR(45) NOT NULL,
   created_at VARCHAR(45) NOT NULL
)
