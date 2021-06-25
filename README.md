# taste-adventure

## TasteAdventure

=====

## Summary

TasteAdventure is an app created for travel foodies. Due to the recent pandemic, traveling for leisure was no longer an option. With our app, you can experience new countries through food, trying exciting recipes, saving recipes to make in the future, and even get a random recipe from anywhere in the world.

## Auth/Auth-Specific Technologies Used

-[JSON Web Token](https://jwt.io/) (JWT) implementation via NPM package [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)

- NPM package [bcrypt](https://www.npmjs.com/package/bcrypt) for hashing passwords

## Installation

### 1. Install NPM Packages

Run `yarn` in both the project/repo directory as well as the `client` directory.(`npm` will work as well.)

### 2. Create and Configure Database

#### 2.1

Create a MySQL database via the MySQL CLI; we'll call our DB `tasteadventure`.
```
CREATE DATABASE tasteadventure;
```

#### 2.2

Initialize the DB via the shell:
```
node model/database.js
```
This creates the `users`, `meals`, `lovedmeals` tables and inserts data of all the recipes.

#### 2.3

Create an `.env` file in the project directory that contains connect information for the DB.
(Your details may differ.)
```
DB_HOST=localhost
DB_USER=root
DB_PASS=root
DB_NAME=tasteadventure
```

## Running the Demo

To run just the back-end, use Postman (or similar) and connect to `http://localhost:5000`.
To run both front- and back-ends, 
you'll need to run `yarn start` in two different shells, the first in the project
directory (the server) and the second in the `client` directory.