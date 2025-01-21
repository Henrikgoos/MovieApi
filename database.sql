CREATE TABLE Movie (
    movie_id INT PRIMARY KEY NOT NULL,
    movie_name CHAR(50) NOT NULL,
    yearr INT NOT NULL,
    genre CHAR(50) NOT NULL,
    keywords CHAR(50) NOT NULL,
    review_id INT
);
CREATE TABLE Userr (
    customer_id INT PRIMARY KEY NOT NULL,
    name CHAR(50) NOT NULL,
    username CHAR(50) NOT NULL,
    password CHAR(50) NOT NULL,
    birth_date DATE,
    favourite_movies JSON
);
