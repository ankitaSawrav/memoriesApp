DROP TABLE IF EXISTS users Cascade;
DROP TABLE IF EXISTS memories Cascade;

CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR(255),
    email text UNIQUE,
    password_hash VARCHAR(255)  
);

CREATE TABLE memories (
    id serial PRIMARY KEY,
    name VARCHAR(255),
    image VARCHAR(255),
    description text 
);