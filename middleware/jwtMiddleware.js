const { verifyToken } = require('../utils/jwt')
let transactionmodel = require('../model/transactionModel');
let presalemodel = require('../model/presaleModel');
let whitelistmodel = require('../model/whitelistModel');
const { validationResult } = require("express-validator");
const azulepaymentstatus = require("../services/azulPayServices").azulePaymentStatus;

module.exports = async (req, res, next) => {
  try {
    let token
    const errors = validationResult(req);
    const { body } = req;
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: errors.array()[0].msg,
        status: false
      });
    }
    // if (
    //   req.headers.authorization
    // ) {
    // token = req.headers.authorization
    // let decoded
    // try {
    //   decoded = verifyToken(token)
    // } catch (err) {
    //   console.log(err)
    //   return res.status(400).json({ status: false, message: "1Unauthorized access, provide the token" });
    // }
    console.log("decoded is ", body)
    const order = await transactionmodel.isOrderValid(req.body.reservation_id)
    console.log("order details is ", order)
    if (!order.length) {
      console.log("1 in next")
      return res.status(400).json({ status: false, message: "Unauthorized access,order not found" });
    }
    req.body['orderType'] = order[0].order_type; 
    if(order[0].order_type=="presale"){
      const code = await presalemodel.getUniquecodeById(order[0].order_id);
      console.log("code",code);
      req.body['unique_code']=code.data.unique_code;
    }

    if(order[0].order_type=="whitelist"){
      const address = await whitelistmodel.getWalletaddressbyid(order[0].order_id);
      console.log("code",address);
      req.body['wallet_address']=address.data.wallet_address;
    }
    // if (order[0].auth_token != req.headers.authorization) {
    //   console.log(" 2 in next")
    //   return res.status(400).json({ status: false, message: "token not found" });
    // }
    if (order[0].transaction_id != '') {
      return res.status(400).json({ status: false, message: "something went wrong,transaction had already happend by this transaction id" });
    }
    //https://azulpay.co/api/rest/paymentStatus
    const response = await azulepaymentstatus(body);
    console.log("response ", response)
    if (response.success) {
       if(response.message=="PENDING" || response.message=="INITIATED"){
         req.body.status = 0;
         req.body.transaction_details.message="Payment initiated";
         req.body.transaction_details.status=0;
       }
       if(response.message=="DECLINED" || response.message=="ERROR"){
         req.body.status = -1;
         req.body.transaction_details.message=response.message;
         req.body.transaction_details.status=response.message;
       }
      next()
    } else {
      return res.status(400).json(response);
    }


    // else {

    //   return res.status(400).json({ status: false, message: "2Unauthorized access, provide the token" });

    // }


  } catch (err) {
    console.log("jwt ", err)
    return res.status(400).json({ status: false, message: "something went wrong" });
  }
}