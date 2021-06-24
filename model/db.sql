
CREATE DATABASE tasteadventure;

DROP TABLE IF EXISTS lovedmeals;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS meals;

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
    ingredient1 TEXT(250),
    ingredient2 TEXT(250),
    ingredient3 TEXT(250),
    ingredient4 TEXT(250),
    ingredient5 TEXT(250),
    ingredient6 TEXT(250),
    ingredient7 TEXT(250),
    ingredient8 TEXT(250),
    ingredient9 TEXT(250),
    ingredient10 TEXT(250),
    ingredient11 TEXT(250),
    ingredient12 TEXT(250),
    ingredient13 TEXT(250),
    ingredient14 TEXT(250),
    ingredient15 TEXT(250),
    ingredient16 TEXT(250),
    ingredient17 TEXT(250),
    ingredient18 TEXT(250),
    ingredient20 TEXT(250),
    preparation1 TEXT(500),
    preparation2 TEXT(500),
    preparation3 TEXT(500),
    preparation4 TEXT(500),
    preparation5 TEXT(500),
    preparation6 TEXT(500),
    preparation7 TEXT(500),
    preparation8 TEXT(500),
    preparation9 TEXT(500),
    preparation10 TEXT(500),
    preparation11 TEXT(500),
    preparation12 TEXT(500),
    preparation13 TEXT(500),
    preparation14 TEXT(500),
    preparation15 TEXT(500),
    preparation16 TEXT(500),
    preparation17 TEXT(500),
    preparation18 TEXT(500),
    preparation19 TEXT(500),
    preparation20 TEXT(500),
    meal_time TIME NOT NULL
    url VARCHAR(500)
);

CREATE TABLE lovedmeals (
    unique_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    userID INT NOT NULL,
    mealID INT NOT NULL,
    FOREIGN KEY(userID) REFERENCES users(id),
    FOREIGN KEY(mealID) REFERENCES meals(mid)
);

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
    '00:00:00', 
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
    '00:00:00', 
    'https://whiskedawaykitchen.com/wp-content/uploads/2020/10/polish-style-goulash-3.jpg'
    );

    --Recipe3
INSERT INTO meals 
(meal_name, country_name, mealtype, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, preparation1,  preparation2, preparation3, preparation4, preparation5, preparation6, preparation7, preparation8, preparation9, preparation10, preparation11, meal_time, url)
VALUES
    ('Grochowka: Split Pea Soup with Ham Hock', 
    'Poland', 
    'Lunch', 
    '500g ham hock, fresh or smoked', '3-4 bay leaves, optional', '4-5 allspice berries, optional ', '280-300 g smoked bacon in a slab, unsliced ', '300 g split peas, dried, yellow ', '300 g whole peas, dried, yellow', '2 medium carrots', '1 parsley root', '100g celery', '2 medium potatoes', '1 tsp marjoram', 'salt and pepper to taste',
    'Place the ham hock in a large cooking pot. Pour in enough water to cover the knuckle completely. ',
    'Add in a few bay leaves and allspice berries. Cook on a low-medium heat, partially covering with a lid. If the water evaporates too quickly in the process, and it does not cover the meat anymore - pour in some H2O. Cook until the meat is soft and falls off the bone. The exact cooking time will depend on the size of the hock, meat-to-bone ratio, the size of the pot… so you’ll have to test its doneness empirically,just poke it with a fork. In my case, it took 2.5 hours.',
    'Fish the ham hock out, leave it on a plate to chill. Once the hock is cool enough to handle, remove the meat from the bones, shred, and set aside to stir back into the soup at the very end, discard the bones and any skin.', 
    'Peel the carrots, parsley and celery root, chop them into small cubes. Add the chopped veggies into the broth. Optional- Cut the smoked skin off the bacon slab and add it into the cooking pot.',
    'Chop the bacon slab into cubes and fry them in a frying pan. There is no need to add any more fat for frying - enough should render from the bacon itself. When the bacon cubes turn lightly golden, add them into the cooking pot, laving the excess fat behind.',
    'Add split peas and whole peas to the broth. Cook for 40-60 minutes on medium-low, stirring occasionally. If you feel like the soup gets too thick, add some water or chicken broth.',
    'When the time is up, add the potatoes: peel them, chop into cubes and drop into the soup.',
    'Season with marjoram, salt and pepper. Check the flavour, add more seasoning if needed. Cook for another 20 minutes, until potatoes turn soft.',
    'We are nearly done. Split peas turned mushy, thickening the soup. Whole peas softened, but remained whole.',
    'Retrieve the bacon skin from the pot, discard it. Add in shredded ham hock meat and cook the soup for another 3-5 minutes to warm the meat up.',
    'Serve hot with a slice of rye bread.',
    '00:00:00', 
    'https://www.polonist.com/wp-content/uploads/2021/02/Grochowka-1-1600x2400-1.jpg'
    );

    --Recipe4
INSERT INTO meals 
(meal_name, country_name, mealtype, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, preparation1,  preparation2, preparation3, preparation4, preparation5, meal_time, url)
VALUES
    ('Bigos- Polish cabbage stew', 
    'Poland', 
    'Dinner', 
    'In a large pot heat up 3 tablespoons of the oil, add the caraway seeds, juniper and allspice berries, bay leaf and onion and gently fry for 3 minutes stirring often',
    'Push the onion mixture to the side and add the chicken thighs. Fry for 2 minutes on each side.',
    'Add the sauerkraut, cabbage, prunes, tomato paste, mushrooms, marjoram, paprika, pepper to taste and half of the water and stir to combine. Close the lid, bring to the boil then simmer for 1 hour.',
    'In a frying pan heat up the remaining oil -1-2 tablespoons- and fry the chopped sausage until crispy stirring often. Add the sausage -not the fat- into the stew and continue cooking gently for another hour. Add a little more water at this point if you like.', 
    'Remove the chicken from the pot, separate the meat from the bone and put the meat pieces back into the pot. Serve with mashed potatoes or rye/pumpernickel bread.',
    '00:00:00', 
    'https://i1.wp.com/www.everydayhealthyrecipes.com/wp-content/uploads/2019/10/Polish-Bigos.jpg?resize=720%2C658&ssl=1'
    );

    --Recipe5
INSERT INTO meals 
(meal_name, country_name, mealtype, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, preparation1,  preparation2, preparation3, preparation4, preparation5, preparation6, preparation7, preparation8, preparation9, preparation10, preparation11, preparation12, preparation13, preparation14, meal_time, url)
VALUES
    ('Grochowka: Split Pea Soup with Ham Hock', 
    'Poland', 
    'Lunch', 
    '500g ham hock, fresh or smoked', '3-4 bay leaves, optional', '4-5 allspice berries, optional ', '280-300 g smoked bacon in a slab, unsliced ', '300 g split peas, dried, yellow ', '300 g whole peas, dried, yellow', '2 medium carrots', '1 parsley root', '100g celery', '2 medium potatoes', '1 tsp marjoram', 'salt and pepper to taste',
    'Place the ham hock in a large cooking pot. Pour in enough water to cover the knuckle completely. ',
    'Add in a few bay leaves and allspice berries. Cook on a low-medium heat, partially covering with a lid. If the water evaporates too quickly in the process, and it does not cover the meat anymore - pour in some H2O. Cook until the meat is soft and falls off the bone. The exact cooking time will depend on the size of the hock, meat-to-bone ratio, the size of the pot… so you’ll have to test its doneness empirically,just poke it with a fork. In my case, it took 2.5 hours.',
    'Fish the ham hock out, leave it on a plate to chill. Once the hock is cool enough to handle, remove the meat from the bones, shred, and set aside to stir back into the soup at the very end, discard the bones and any skin.', 
    'Peel the carrots, parsley and celery root, chop them into small cubes. Add the chopped veggies into the broth. Optional- Cut the smoked skin off the bacon slab and add it into the cooking pot.',
    'Chop the bacon slab into cubes and fry them in a frying pan. There is no need to add any more fat for frying - enough should render from the bacon itself. When the bacon cubes turn lightly golden, add them into the cooking pot, laving the excess fat behind.',
    'Add split peas and whole peas to the broth. Cook for 40-60 minutes on medium-low, stirring occasionally. If you feel like the soup gets too thick, add some water or chicken broth.',
    'When the time is up, add the potatoes: peel them, chop into cubes and drop into the soup.',
    'Season with marjoram, salt and pepper. Check the flavour, add more seasoning if needed. Cook for another 20 minutes, until potatoes turn soft.',
    'We are nearly done. Split peas turned mushy, thickening the soup. Whole peas softened, but remained whole.',
    'Retrieve the bacon skin from the pot, discard it. Add in shredded ham hock meat and cook the soup for another 3-5 minutes to warm the meat up.',
    'Serve hot with a slice of rye bread.',
    '00:00:00', 
    'https://www.polonist.com/wp-content/uploads/2021/02/Grochowka-1-1600x2400-1.jpg'
    );



INSERT INTO lovedmeals (userID, mealID)
VALUES
    (1, 1),
    (1, 2),
    (2, 3);