CREATE DATABASE reviews;

USE reviews;

CREATE TABLE orders(
orders_id INT NOT NULL,
orders_date VARCHAR(50) NOT NULL);

CREATE TABLE orders_items(
order_items_id INT NOT NULL,
order_id INT AUTO_INCREMENT PRIMARY KEY,
product_name VARCHAR(50) NOT NULL,
quantity INT NOT NULL,
price INT NOT NULL);

INSERT INTO orders(orders_id,orders_date)
VALUE(),
();

INSERT INTO orders_items(orders_items_id,orders_id,product_name,quantity,price)
VALUE(),
();