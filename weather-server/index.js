// requiring all the packages I have installed
const express = require("express");
const index = express();
const cors = require("cors");
const models = require("./models");
const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const port = 3001;

index.use(cors()); // enable CORS
index.use(express.json()); // body parser

//route to get all the users
index.get("/users", async (req, res) => {
  const users = await models.Users.findAll();
  res.status(200).json(users);
});

//route to create a user
index.post("/register/user", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  
  //checking if user already exists
  models.Users.findOne({
    where: {
      username: username,
    },
  }).then((user) => {
    if (user) {
      res.status(500).send({ error: "user already exists" });
    } else {
      // if user doesn't exists, will
      // encrypt the password
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
          let user = models.Users.build({
            username: username,
            password: hash,
          });

          user
            .save()
            .then((savedUser) => {
              const user = savedUser.toJSON();
              delete user.password;
              res.status(200).json(user);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      });
    }
  });
});

// route to login in user (POST)
index.post("/login/user", (req, res) => {
  let username = req.body.username; // obtaining username from textbox
  let password = req.body.password; // obtaining password from textbox
  let userId = "";

  models.Users.findOne({
    where: {
      username: username,
    },
  }).then((user) => {
    if (user) {
      let storedPassword = user.password;
      userId = user.id;
      
      bcrypt.compare(password, storedPassword)
      .then((result) => {
        if (result) {
          const loggedInUser = user.toJSON()
          delete loggedInUser.password;
          const token = jwt.sign({ userId: userId }, "NIMBUSKEY");
          res.json({ token: token });
        } else {
          res.status(500).send({error: 'something went wrong'})
        }
      })
    } else {
      res.json({message: 'Incorrect username or password'})
    }
  });
});

// --------FAVORITES ROUTES-----------//
index.get("/users/:id/favorites", async (req, res) => {
  const userId = req.params.id
  const cities = await models.Favorites.findAll({
    where: {
      userId: userId
    }
  });
  res.status(200).json(cities);
});

// Route will be used to create favorites
index.post("/users/:id/favorites", async (req, res) => {
  const userId = req.params.id;
  const { city } = req.body;

  await models.Favorites.findOrCreate({ where: { userId, city } });
  //   const favorite = await models.Favorites.findAll({ where: { city } });

  res.status(200).json();
});

index.listen(port, () => {
  console.log(`server is running on ${port}...`);
});
