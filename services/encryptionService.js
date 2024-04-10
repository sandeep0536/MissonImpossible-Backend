const Cryptr = require('cryptr');
let configobj = require("../utils/config.js").config;
const cryptrObject = new Cryptr(configobj.ENC_KEY);

// encrypt data for given keys
exports.encryptData = (keys) => {
  return (req, res, next) => {
  	keys.forEach(function(key , value){
  		req.body[key] = cryptrObject.encrypt(req.body[key]);
  	})
  	next();
  }
}