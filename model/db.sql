
CREATE DATABASE tasteadventure;

DROP TABLE IF EXISTS lovedmeals;
DROP TABLE IF EXISTS users;
-- DROP TABLE IF EXISTS meals;

CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(250) NOT NULL,
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
    url VARCHAR(500)
);

-- CREATE TABLE lovedmeals (
--     unique_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     userID INT NOT NULL,
--     mealID INT NOT NULL,
--     FOREIGN KEY(userID) REFERENCES users(id),
--     FOREIGN KEY(mealID) REFERENCES meals(mid)
-- );

-- Insert some test data

-- INSERT INTO users (email, password, firstname, lastname)
-- VALUES
--     ('michelle@gmail.com','hello123','Michelle', 'Bishop'),
--     ('apple@gmail.com','apple1','Sandy', 'Birch'),
--     ('banana@gmail.com','banana1','Lucy', 'Greene');

-- Recipe1
INSERT INTO meals 
(meal_name, country_name, mealtype, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, preparation1,  preparation2, preparation3, preparation4, preparation5, preparation6, preparation7, preparation8, preparation9, meal_time, url)
VALUES
    ('Homemade Pierogi- Polish Dumplings', 
    'Poland', 
    'Dinner', 
    'Dough: 241g Flour', '1/2 tsp salt', '1 large egg', '113g sour cream', '57g butter, room temperature', 'Filling: 227g warm mashed potatoes', '113g sharp cheddar cheese, shredded', 'To Finish: 57g butter, cold', '156g shallot or onion, sliced', 
    'To make the dough: Mix together the flour and salt. Add the egg to the flour and combine. The dough will be quite clumpy at this stage.',
    'Work in the sour cream and soft butter until the dough comes together in a slightly rough, slightly sticky ball.',
    'Using just your fingertips, knead and fold the dough without adding additional flour until the dough becomes less sticky but still quite moist.', 
    'Wrap the dough well in plastic wrap and refrigerate for 30 to 60 minutes, or up to 48 hours.',
    'To make the filling: Combine the warm mashed potato and cheese. Stir and mash until the cheese is melted and the filling is cool to the touch. Taste and adjust the seasonings with salt and pepper.',
    'To fill the pierogi: Roll half the dough 3mm thick. Use a 50 mm round cutter to cut circles of dough. Repeat with the other half of the dough. Save the scraps; these can be snipped into small pieces and added to simmering soups.',
    'Place 1 1/2 teaspoons of filling on each round of dough. Gently fold the dough over, forming a pocket around the filling. Pinch the edges of the pierogi to seal, then seal again with the tines of a fork.',
    'At this point the pierogi can be frozen for up to 4 weeks, or refrigerated overnight, or cooked in a large stockpot of boiling salted water. Only cook about 10 pierogi at a time, so that they have room to float without sticking. When the pierogi float, they are done. The time will vary depending on if they are fresh or frozen.',
    'Sauté the shallots or onion in the butter in a large skillet until the onion begins to brown. Add the drained pierogi and cook until browned and crisped. Serve hot with additional sour cream, applesauce, or other condiments.',
    '0', 
    'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/recipe_legacy/1750-3-large.jpg?itok=MwEaAU-G'
    );

--Recipe2
INSERT INTO meals 
(meal_name, country_name, mealtype, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, ingredient15, preparation1,  preparation2, preparation3, preparation4, preparation5, preparation6, preparation7, preparation8, preparation9, preparation10, meal_time, url)
VALUES
    ('Gulasz- polish stew', 
    'Poland', 
    'Lunch', 
    '110g bacon', '1kg beef chunk', 'salt and pepper to taste', '1 tbsp vegetable oil', '1 large onion', '2 medium red bell peppers', '230g mushrooms', '3 cloves garlic', '2 tbsp tomato paste', '2 tbsp smoked paprika', '1/4 tsp allspice', '700ml beef brooth', '1 tbsp cornstarch', '2 tbsp water', 'sour cream for serving',
    'Cut the speck into small cubes and fry in a large pot over medium heat. If using bacon, you can fry the slices and then crumble them after they cool. Set aside.',
    'Cut the beef into large cubes and generously season with salt and pepper.',
    'Add a little oil to the pot along with the fat rendered from the speck or bacon. Working in batches, brown the beef on all sides. Remove and set aside.', 
    'Roughly chop the onion, thinly slice the red bell peppers and quarter the mushrooms. Add the onion, bell peppers and mushrooms to the pot and saute for 10-12 minutes over medium heat. You can add a bit more vegetable oil if needed.',
    'Add the minced garlic and cook an additional minute.',
    'Return the beef and speck (or bacon) to the pot.',
    'Stir in the tomato paste, paprika and allspice.',
    'Add the beef broth. Bring the stew to a slight boil, reduce heat and cover. Simmer for 1.5 to 2 hours or until the meat can be easily shredded with a fork. If the stew looks like its getting too thick, you can add additional broth or water as necessary.',
    'Mix together the cornstarch and water in a small bowl. Stir until smooth.',
    'Stir the cornstarch mixture into the stew until fully incorporated. Simmer for an additional 10 minutes or until the stew has thickened.',
    '0', 
    'https://whiskedawaykitchen.com/wp-content/uploads/2020/10/polish-style-goulash-3.jpg'
    );



INSERT INTO lovedmeals (userID, mealID)
VALUES
    (1, 1),
    (1, 2),
    (2, 3);