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


module.exports = router;
