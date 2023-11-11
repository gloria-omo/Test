CREATE DATABASE home;

USE home;

CREATE TABLE info_table(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
password VARCHAR(50) NOT NULL,
class_id INT NOT NULL);

CREATE TABLE department(
department_id INT NOT NULL,
stack VARCHAR(50) NOT NULL
);

INSERT INTO info_table(name,email,password,class_id)
VALUE("john","john@gmail.com","12345",1),
("obi","obi@gmail.com","12345",1),
("faith","faith@gmail.com","12345",2),
("mary","mary@gmail.com","12345",1),
("emma","emma@gmail.com","12345",2);

INSERT INTO department(department_id,stack)
VALUE(1,"FRONTEND"),
(2,"BACKEND");

SELECT * FROM info_table;
SELECT * FROM department;

SELECT info_table.name,info_table.password,department.stack FROM info_table
LEFT JOIN department ON info_table.class_id = department.department_id;


SELECT info_table.name,info_table.password,department.stack FROM info_table
RIGHT JOIN department ON info_table.class_id = department.department_id;

SELECT AVG(password)
FROM info_table;

SELECT SUM(password)
FROM info_table
-- WHERE id = 5