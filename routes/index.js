var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");
const bcrypt = require('bcrypt');
require("dotenv").config();


router.use(bodyParser.json());


/* GET home page. */
router.get("/", (req, res) => {
  res.send({ message: 'Welcome to TasteAdventure!' });
});

//Login 1
// router.post('/login', async (req, res, next) => {
//   let { email, password } = req.body;
//   let passwordHash = await bcrypt.hash(password, 10);

//   if (email && password)
//   try {
//       let sql = (`SELECT * FROM users WHERE email = '${email}'`);
//       await db(sql);
//       if (results.data.length == 0 || !(await bcrypt.compare(password, results[0].password))) {
//           // Username not found
//           res.status(401).send({ error: 'Login failed' });
//       } else {
//         res.send('Login successful');
//       }
//   } catch (err) {
//       next(err);
//   }
// });

//Login 2
// router.post('/login', async (req, res, next) => {
//   let { email, password } = req.body;

//   // if (email && password)
//   try {
//       let results = await db(`SELECT * FROM users WHERE email = '${email}'`);
//       if (results.data.length === 0) {
//           // Username not found
//           res.status(401).send({ error: 'Login failed' });
//       } else {
//           let user = results.data[0];  // the user's row/record from the DB
//           let passwordsEqual = await bcrypt.compare(password, user.password);
//           if (passwordsEqual) {
//               // Passwords match
//               res.send({
//                   message: 'Login succeeded',
//               });
//           } else {
//               // Passwords don't match
//               res.status(401).send({ error: 'Login failed' });
//           }
//       }
//   } catch (err) {
//       next(err);
//   }
// });

//Login 3
router.post('/login', async (req, res) => {
  let { email, password } = req.body;
  if (email == null) {
    return res.status(400).send('Cannot find user')
  }
  try {

     let sql =(`SELECT * FROM users WHERE email = '${email}'`);
      await db(sql);
         if(await bcrypt.compare(req.body.password, password)) {
      res.send('Success')
    } else {
      res.send('Not Allowed')
    }
  } catch {
    res.status(500).send()
  }
})



//Register
router.post("/register", async (req, res) => {
  let { email, password, firstname, lastname } = req.body;
  let passwordHash = await bcrypt.hash(password, 10);
    
    if (email && password && firstname && lastname)
    try {
          let sql =(`
              INSERT INTO users (email, password, firstname, lastname)
              VALUES ('${email}','${passwordHash}','${firstname}','${lastname}')
          `);
          await db(sql);
          res.send({ message: 'Registration succeeded' });
        } catch (err) {
            next(err);
        }
    });

//return all registered users
router.get("/users", async (req, res) => {
  try {
      let result = await db('SELECT * FROM users');
      let users = result.data;
      res.send(users);
  } catch (err) {
      res.status(500).send({error: err.message});
  }
});


//GET all meals
router.get("/meals", async (req, res) => {
  try {
      let result = await db('SELECT * FROM meals');
      let meals = result.data;
      res.send(meals);
  } catch (err) {
      res.status(500).send({error: err.message});
  }
});

//GET meal from specific country
// The country name will be defined using the MAP API?
// 1 fetch from the MAP API and another from our database to display recipes from country
router.get("/meals/country_name", async (req, res) => {
  try {
      let result = await db(`'SELECT * FROM meals WHERE country_name = '${country_name}'`);
      let meals = result.data;
      res.send(meals);
  } catch (err) {
      res.status(500).send({error: err.message});
  }
});

//GET lovedmeals for a user
// JOIN 
// This needs to be tested once we get frontend up and running

router.get("/getlovedmeals", async (req, res) => {
  try {
  let result = await db(`'SELECT * FROM meals WHERE
JOIN lovedmeals ON lovedmeals.mealID = meals.mid AND
JOIN users ON users.id = lovedmeals.userID AND
users.id = ${id}'`);
let getlovedmeals = result.data;
res.send(getlovedmeals);
} catch (err) {
res.status(500).send({error: err.message});
  }
});


//POST lovedmeals for user
// test this once we get front end up and running
router.post("/lovedmeals", async (req, res) => {
  let {mid, id} = req.body;  
  
  try {
    let sql =`
    Insert into lovedmeals(id, mid) VALUES ('${id}', '${mid}');`;
    await db(sql);    
    
    //return lovedmeals
    let result = await db('SELECT * FROM lovedmeals')
    let lovedmeals = result.data;
    res.status(201).send(lovedmeals);
  } catch (err) {
    res.status(500).send({error: err.message});
  }
})

//POST new meal
router.post("/meals", async (req, res) => {
  let {meal_name, country_name, mealtype, ingredients, preparation, meal_time} = req.body;  
  
  try {
    let sql =`
    INSERT INTO meals (meal_name, country_name, mealtype, ingredients, preparation, meal_time)
    VALUES ('${meal_name}', '${country_name}', '${mealtype}', '${ingredients}', '${preparation}', '${meal_time}')
    `;
    await db(sql);    
    
    //return all meals
    let result = await db('SELECT * FROM meals')
    let meals = result.data;
    res.status(201).send(meals);
  } catch (err) {
    res.status(500).send({error: err.message});
  }
})

module.exports = router;
