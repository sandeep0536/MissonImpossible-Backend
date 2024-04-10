const router = require("express").Router();
const path = require('path');
const validationMiddleware = require("../middleware/validationMiddleware");
const { addNewsLetterPost, orderSavePost, contactUsPost, presaleCheckout, updateOrderStatus, updateTransactionStatus, azulPaymentPost, whitelistaddress1, whitelistaddress, successTransaction, preSaleOrderSavePost, whitelistorderSavePost, failedTransaction, allWalletAddress, userDetails, rootHash, uploadCsv, rootHashForFront, deleteAddress, checkWhiteListDB, contractIswhiteListed } = require("../controllers/api/apiController");
const encryptionService = require("../services/encryptionService");

const auth = require('../middleware/jwtMiddleware');
const ratesMiddleware = require("../middleware/applyRatesMiddleware");

//const { createReservationPost, createOrderPost, submitAuthorizationPost, verifyOrderAuthorizationPost, trackWalletOrderPost } = require("../controllers/wyre/wyreController");
//router.post("/save-buyer", validationMiddleware.buyerValidation(), buyerSavePost);
//const { wyrePaymentPost, checkAuthCodeRequirementsPost, submitOTPPost } = require("../controllers/wyre/wyreController2");

// router.post("/save-order", validationMiddleware.orderValidation(), orderSavePost);


// router.post("/save-order", wyrePaymentPost);

// router.post("/submit-otp", submitOTPPost);


// //wyre APIs
// //post
// router.post("/create-reservation",createReservationPost);
// router.post("/create-order", createOrderPost);
// router.post("/submit-authorization", submitAuthorizationPost);
// router.post("/verify-order-authorization",  verifyOrderAuthorizationPost);
// router.post("/track-wallet-order", trackWalletOrderPost);
// router.post("/check-auth-code-requirements", validationMiddleware.CheckAuthCodeRequirementsValidation(), checkAuthCodeRequirementsPost);

//used APIS
// router.post("/create-order-api",validationMiddleware.orderCheckoutValidation(),ratesMiddleware.ifRatesApplied,encryptionService.encryptData(["full_name","email","full_address","phone_number"]), createReservationPost);

// router.post("/subscribe", validationMiddleware.CheckNewsLetterValidation(), encryptionService.encryptData(["_email"]), addNewsLetterPost);
// router.post("/contact-us", validationMiddleware.contactValidation(), encryptionService.encryptData(["_name", "_email"]), contactUsPost);
// router.post("/presale-checkout",validationMiddleware.PresaleCheckoutValidation(),ratesMiddleware.ifRatesApplied,presaleCheckout,encryptionService.encryptData(["full_name","email","full_address","phone_number"]),preSaleOrderSavePost);

//azul payment order

//(wyre)reservation_id = (azul) orderid

//(wyre)transaction_id = (azul) payment_id

// router.post("/create-order-api",validationMiddleware.azulPayValidation(),ratesMiddleware.ifRatesApplied,azulPaymentPost,encryptionService.encryptData(["full_name","email","full_address","phone_number"]),orderSavePost);
// router.post("/whitelist-checkout",validationMiddleware.WhiteListCheckoutValidation(),ratesMiddleware.ifRatesApplied,whiteListPaymentPost,encryptionService.encryptData(["full_name","email","full_address","phone_number"]),whitelistorderSavePost);
router.post("/whitelist-checkout", validationMiddleware.WhiteListCheckoutValidation(), whitelistaddress);
router.post("/whitelist-checkout1", validationMiddleware.WhiteListCheckoutValidation(), whitelistaddress1);

//ajax via ejs
// router.post("/update-order-status",updateOrderStatus);
//via react
// router.post("/update-transaction-status", validationMiddleware.updatetransaction(), auth, updateTransactionStatus);
router.post("/user-details", userDetails)
router.post("/success-transaction", successTransaction);
router.post("/failed-transaction", failedTransaction);
router.post("/csvInsert", uploadCsv);
router.delete("/delete-address", deleteAddress)
router.get("/wallet-address", allWalletAddress);
router.get("/root-hash-front", rootHashForFront)
router.post("/root-hash", rootHash)
router.post("/checkWhitelistDB", checkWhiteListDB)
router.post("/contractMethodIswhiteListed", contractIswhiteListed)
module.exports = router;
