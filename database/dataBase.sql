-- create a database and always terminate or end you command or query with semi clone
CREATE DATABASE userAuth;

-- delete a database
-- DROP DATABASE userAuth;

-- using a datbase/activate a database
USE userAuth;

-- create a table
CREATE TABLE signUp(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
password VARCHAR(50) NOT NULL
);

-- Update the table
INSERT INTO signUp(name,email,password)
VALUE("obi","obi@gmail.com","obi12345"),
("ubani","ubani@gmail.com","ubani12345"),
("obina","obina@gmail.com","obina12345"),
("ada","ada@gmail.com","ada12345"),
("loveth","loveth@gmail.com","loveth12345");

-- view the table
 SELECT * FROM signUp;
 
 -- viewing individual column
 SELECT name FROM signUp;
 
 -- updating record  in the table
  UPDATE signUp SET name = "ubanu" WHERE id=2;
  
  -- delete a record from in a table
  DELETE FROM signUp WHERE id=2;
 
 -- filtering date in a table
 SELECT * FROM signUp WHERE  name = "obina";
 
-- Sort data FROM A TABLE ASCENDING ORDER
SELECT * FROM signUp ORDER By name ASC; 
 
-- Sort data FROM A TABLE DESCENDING ORDER
SELECT * FROM signUp ORDER By name DESC; 