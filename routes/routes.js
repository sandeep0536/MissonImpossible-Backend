const router = require("express").Router();
const path = require('path');
const middlewares = require("../middleware/middleware");
const validationMiddleware = require("../middleware/validationMiddleware");
const { replyGet, loginGet, bulkEmailGet, bulkEmailPost, loginPost, otpGet, otpPost, readMessageGet, dashboardGet, whitelistOrdersGet, whitelistOrderGet, logoutGet, ordersGet, orderGet, emailGet, replyPost, emailPost, subscribersGet, contactsGet, presaleOrdersGet, presaleOrderGet, whitelistAddress, uploadCsv } = require("../controllers/web/adminController");

// router.get('/', (req, res, next) => {
//     res.render(`index`, {
//         session: req.session.username
//     });
// });

//get
router.get("/", middlewares.ifLoggedin, loginGet);
router.get("/otp", middlewares.ifNotLoggedin, otpGet);
router.get("/dashboard", middlewares.ifNotLoggedin, dashboardGet);
router.get('/logout', middlewares.ifNotLoggedin, logoutGet);
router.get('/orders', middlewares.ifNotLoggedin, ordersGet);
// router.get('/email', middlewares.ifNotLoggedin, emailGet);
router.get('/bulk-email', middlewares.ifNotLoggedin, bulkEmailGet);
// router.get('/orders/:id', middlewares.ifNotLoggedin, orderGet);
router.get('/subscribers', middlewares.ifNotLoggedin, subscribersGet);
// router.get('/contacts',middlewares.ifNotLoggedin, contactsGet);
// router.get('/read/:id',middlewares.ifNotLoggedin, readMessageGet);
// router.get('/reply/:email',middlewares.ifNotLoggedin, replyGet);
// router.post('/reply/:email',middlewares.ifNotLoggedin, replyPost);
// router.get('/presale-orders',middlewares.ifNotLoggedin, presaleOrdersGet);
// router.get('/presale-orders/:id',middlewares.ifNotLoggedin, presaleOrderGet);
router.get('/whitelist-orders', middlewares.ifNotLoggedin, whitelistOrdersGet);
router.get('/whitelist-address', middlewares.ifNotLoggedin, whitelistAddress);
// router.get('/whitelist-orders/:id',middlewares.ifNotLoggedin, whitelistOrderGet);
//post
router.post("/otp", middlewares.ifNotLoggedin, validationMiddleware.otpValidation(), otpPost);
router.post("/login", middlewares.ifLoggedin, validationMiddleware.loginValidation(), loginPost);
router.post("/email", middlewares.ifNotLoggedin, validationMiddleware.emailValidation(), emailPost);
router.post('/bulk-email', middlewares.ifNotLoggedin,validationMiddleware.bulkemailValidation(), bulkEmailPost);
module.exports = router;
