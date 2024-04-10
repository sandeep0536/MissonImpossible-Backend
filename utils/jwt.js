const jwt = require('jsonwebtoken')
let configobj = require("./config").config;
const jwtSecret = configobj.WYRE_SECRET_KEY;

const createToken = payload => {
  return jwt.sign(payload, jwtSecret,{expiresIn: "1h"})
}

const verifyToken = token => {
  return jwt.verify(token, jwtSecret)
}

module.exports = { createToken, verifyToken }
