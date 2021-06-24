require("dotenv").config();


// Required by bcrypt
const SECRET_KEY = process.env.SECRET_KEY || 'summertime';

module.exports = {
    SECRET_KEY
};