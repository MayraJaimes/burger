CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id (40) AUTO-INCREMENT PRIMARY KEY,
    burger_name (40) VARCHAR NOT NULL,
    devoured BOOLEAN NOT NULL
)