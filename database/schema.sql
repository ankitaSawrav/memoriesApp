DROP TABLE IF EXISTS users Cascade;
DROP TABLE IF EXISTS memories Cascade;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR(255),
    email text ,
    password_hash VARCHAR(255)  
);
CREATE TABLE memories_data (
    id serial PRIMARY KEY,
    userid integer REFERENCES users(id),
    title VARCHAR(255),
    memory_file VARCHAR(255),
    memory_description text,
    memory_date DATE NOT NULL DEFAULT CURRENT_DATE
);
