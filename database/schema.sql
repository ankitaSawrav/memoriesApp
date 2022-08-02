DROP TABLE IF EXISTS users Cascade;
DROP TABLE IF EXISTS memories_data Cascade;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR(255) ,
    email text UNIQUE,
    password_hash VARCHAR(255)  
);
CREATE TABLE memories_data (
    id serial PRIMARY KEY,
    userid integer REFERENCES users(id),
    title VARCHAR(255),
    cloudinary_public_id VARCHAR,
    cloudinary_secure_url VARCHAR,
    memory_description text,
    memory_date DATE NOT NULL DEFAULT CURRENT_DATE
);
