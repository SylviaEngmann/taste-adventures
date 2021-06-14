CREATE DATABASE tasteadventure;

DROP TABLE IF EXISTS lovedmeals;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS meals;


CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(20) NOT NULL,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL
);

CREATE TABLE meals (
    mid INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    meal_name VARCHAR(40) NOT NULL,
    country_name VARCHAR(40) NOT NULL,
    mealtype VARCHAR(20) NOT NULL,
    ingredients TEXT NOT NULL,
    preparation TEXT NOT NULL,
    meal_time TIME NOT NULL
);

CREATE TABLE lovedmeals (
    unique_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    userID INT NOT NULL,
    mealID INT NOT NULL,
    FOREIGN KEY(userID) REFERENCES users(id),
    FOREIGN KEY(mealID) REFERENCES meals(mid)
);

-- Insert some test data

INSERT INTO users (email, password, firstname, lastname)
VALUES
    ('michelle@gmail.com','hello123','Michelle', 'Bishop'),
    ('apple@gmail.com','apple1','Sandy', 'Birch'),
    ('banana@gmail.com','banana1','Lucy', 'Greene');

INSERT INTO meals (meal_name, country_name, mealtype, ingredients, preparation, meal_time)
VALUES
    ('Pasta', 'Italy', 'Dinner', 'Olive oil, sauce', 'Cut the tomatos', '08:00:00'),
    ('Croissant', 'France', 'Breakfast', 'Butter', 'Make the pastry', '08:00:00'),
    ('Spanish omelette', 'Spain', 'Lunch', 'Eggs, olive oil', 'Cut potatoes', '08:00:00');


// this has a foreign key child/parent problem we need to solve
INSERT INTO lovedmeals (userID, mealID)
VALUES
    (1, 1),
    (1, 2),
   	(2, 3);