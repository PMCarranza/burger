-- statement used to create a new database.
CREATE DATABASE burgers_DB;
-- Statement used to select a database and perform operations into that database.
USE burgers_DB;
-- statement used to create a new table in a database
CREATE TABLE burgers
-- creates table columns at their values
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);