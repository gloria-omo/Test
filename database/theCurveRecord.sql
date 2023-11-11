-- create a DB
CREATE DATABASE theCurve;


USE theCurve;

-- create table
CREATE TABLE theCurveStudent(
id INT AUTO_INCREMENT PRIMARY KEY ,
name VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
departmentId INT NOt null);


CREATE TABLE department(
id INT NOT NULL,
departmentName VARCHAR(50) NOT NULL);

INSERT INTO theCurveStudent( name,email,departmentId)
VALUE("john","john@gmail.com","1"),
("gloria","gloria@gmail.com","2"),
("favour","favour@gmail.com","1"),
("david","david@gmail.com","1"),
("ben","ben@gmail.com","2");

INSERT INTO department(id,departmentName)
VALUE(1,"BACKEND"),
(2,"FRONTEND");

SELECT * FROM department;
SELECT * FROM theCurveStudent;

-- join table
SELECT thecurvestudent.id,theCurveStudent.name,department.departmentName FROM theCurveStudent
INNER JOIN department ON theCurveStudent.departmentId = department.id
