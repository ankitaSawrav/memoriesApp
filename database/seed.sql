INSERT INTO users (username, email, password_hash) VALUES ('chino','chino@example.com','password');
INSERT INTO users (username, email, password_hash) VALUES ('ba','ba@example.com','password');

-- id serial PRIMARY KEY,
--     userid integer REFERENCES users(id),
--     title VARCHAR(255),
--     cloudinary_public_id VARCHAR,
--     cloudinary_secure_url VARCHAR(255),
--     memory_description text,
--     memory_date DATE NOT NULL DEFAULT CURRENT_DATE


INSERT INTO memories_data (userid,title,cloudinary_public_id,cloudinary_secure_url,memory_description,memory_date)
                     VALUES ('1','My Cute Cat','anki/jqzwksap5hprkxulkpid','https://res.cloudinary.com/dmbyqfa3f/image/upload/v1659370367/anki/jqzwksap5hprkxulkpid.jpg','the first pet billy','2022-07-21');

