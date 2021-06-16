var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");


router.use(bodyParser.json());

/* GET home page. */
router.get("/", (req, res) => {
  res.send({ message: 'Welcome to TasteAdventure!' });
});

//Login
router.post("/login", async (req, res) => {
  let {email, password} = req.body;

  try {
      let result = await db(`SELECT * FROM users where email = '${email}' and password = '${password}'`);
      let user = result.data;
      if (user.length === 0) {
          res.status(404).send({ error: 'User not found' });
      }
      else {
          res.send(user[0]);
      }
  }catch (err) {
      res.status(500).send({error: err.message});
  }
})

//Register
router.post("/register", async (req, res) => {
  let { email, password, firstname, lastname } = req.body;

  try {
      let sql =`
          INSERT INTO users (email, password, firstname, lastname)
          VALUES ('${email}','${password}','${firstname}','${lastname}')
      `;
      await db(sql);

      // return all users
      let result = await db('SELECT * FROM users');
      let users = result.data;
      res.status(201).send(users);
  } catch (err) {
      res.status(500).send({ error: err.message });
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

//GET lovedmeals for user

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
