INSERT INTO users (username, email, password_hash) VALUES ('chino','chino@example.com','password'),
INSERT INTO users (username, email, password_hash) VALUES ('ba','ba@example.com','password')



-- id serial PRIMARY KEY, userid integer REFERENCES users(id),title VARCHAR(255),memory_file VARCHAR(255),memory_description text,memory_date DATE NOT NULL DEFAULT CURRENT_DATE
INSERT INTO memories (userid,title,memory_file,memory_description,memory_date) VALUES ('1','first rain in','','this is te first rain in mel','2021-10-02')
INSERT INTO memories (userid,title,memory_file,memory_description,memory_date) VALUES ('2','mountBuller','','tthis was first home trip','2021-10-02')