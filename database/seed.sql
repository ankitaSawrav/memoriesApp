INSERT INTO users (username, email, password_hash) VALUES ('chino','chino@example.com','password');
INSERT INTO users (username, email, password_hash) VALUES ('ba','ba@example.com','password');

-- id serial PRIMARY KEY, userid integer REFERENCES users(id),title VARCHAR(255),memory_file VARCHAR(255),memory_description text,memory_date DATE NOT NULL DEFAULT CURRENT_DATE


INSERT INTO memories_data (userid,title,memory_file,memory_description,memory_date) VALUES ('25','My Cute Cat','/images/cat.jpg','the first pet billy','2022-07-21');
INSERT INTO memories_data (userid,title,memory_file,memory_description,memory_date) VALUES ('25','the carefree','/images/child.jpg','Kids visit to farm','2022-07-29');
INSERT INTO memories_data (userid,title,memory_file,memory_description,memory_date) VALUES ('25','Mornings likes this','/images/coast.jpg','Kids visit to farm','2020-09-19');

INSERT INTO memories_data (userid,title,memory_file,memory_description,memory_date) VALUES ('25','the carefree','/images/toddlerplaysand.jpg','Kids visit to farm','2022-07-29');