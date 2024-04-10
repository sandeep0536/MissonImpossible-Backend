const Cryptr = require('cryptr');
let configobj = require("../utils/config.js").config;
const cryptrObject = new Cryptr(configobj.ENC_KEY);

// decrypt data for given data and keys
exports.decryptData = (data, keys) => {
	data.forEach(function(element1, index1) {
		keys.forEach(function(element2, index2) {
			element1[element2] = cryptrObject.decrypt(element1[element2]);
		});

		data[index1] = element1;
	});

	return data;
}
