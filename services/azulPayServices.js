// const axios = require('axios').default;
// let configobj = require("../utils/config.js").config;
// const { v4: uuidv4 } = require('uuid');

// exports.azulePayment = async (body) => {
// 	try {

// 		const last_name = body.full_name.substring(body.full_name.indexOf(' ') + 1) != '' ? body.full_name.substring(body.full_name.indexOf(' ') + 1) : body.full_name;

// 		const temp_body = {};
// 		temp_body['first_name'] = body.full_name.split(" ")[0];
// 		temp_body['last_name'] = last_name;
// 		temp_body['email'] = body.email;
// 		temp_body['phone'] = body.phone_number;
// 		temp_body['address'] = body.full_address;
// 		temp_body['city'] = body.city;
// 		temp_body['state'] = body.state;
// 		temp_body['country'] = body.country;
// 		temp_body['zip_code'] = body.postal_code;
// 		temp_body['amount'] = body.source_amount;

// 		temp_body['api-key'] = configobj.AZULE_API_KEY;
// 		temp_body['currency'] = "USD";
// 		temp_body["orderid"] = uuidv4();
// 		temp_body["clientip"] = "0.0.0.0";
// 		temp_body["redirect_url"] = "https://etihad.arcube.io/azul-pay";
// 		temp_body['webhook_url'] = "https://etihad.arcube.io/azul-pay";
// 		// temp_body["redirect_url"] = "http://localhost:3001/azul-pay";
// 		// temp_body['webhook_url'] = "http://localhost:3001/azul-pay";

// 		console.log("tem ",temp_body)

// 		const options = {
// 			headers: {
// 				"secret": configobj.AZULE_SECRET_KEY,
// 				"Content-Type": "application/x-www-form-urlencoded"
// 			}
// 		}


// 		const response = await axios.post('https://azulpay.co/api/rest/payment', temp_body, options);
// 		console.log("reStructuredText ",response.data)
// 		if (Array.isArray(response.data.data)) {
// 			response.data['status'] = false;
// 			return response.data;
// 		} else {
// 			response.data['status'] = true;
// 			return response.data;
// 		}


// 	} catch (error) {
// 		console.log(error)
// 		error.response.data['status'] = false;
// 		return error.response.data;
// 	}
// }

// exports.azulePaymentStatus = async (body) => {
// 	try {

// 		const temp_body = {};
// 		temp_body['orderid'] = body.reservation_id;
// 		temp_body['paymentId'] = body.transaction_id;
// 		temp_body['api-key'] = configobj.AZULE_API_KEY;

// 		console.log("tem ",temp_body)

// 		const options = {
// 			headers: {
// 				"secret": configobj.AZULE_SECRET_KEY,
// 				"Content-Type": "application/x-www-form-urlencoded"
// 			}
// 		}


// 		const response = await axios.post('https://azulpay.co/api/rest/paymentStatus', temp_body, options);
// 		console.log("reStructuredText ",response.data)
// 		return response.data;


// 	} catch (error) {
// 		console.log(error)
// 		error.response.data['status'] = false;
// 		return error.response.data;
// 	}
// }