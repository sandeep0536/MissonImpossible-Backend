const { body, validationResult } = require('express-validator')
exports.loginValidation = () => {
    return [
        body("_email", "Invalid email address").isEmail()
            .notEmpty().withMessage("email is required")
            .escape()
            .trim(),
        body("_password", "The Password must be of minimum 8 characters length")
            .notEmpty().withMessage("Password is required")
            .trim()
            .isLength({
                min: 8
            }),
    ]
}

exports.otpValidation = () => {
    console.log("in otp check middle ware ")
    return [
        body('otp', 'Please enter OTP').notEmpty()
    ]
}

//address,quantity,price,referrence_no,buyer_id
exports.orderValidation = () => {
    return [
        body("_address", "please provide wallet address").notEmpty(),
        body("_quantity", "please provide quantity").notEmpty().isNumeric(),
        body("_price", "please provide price").notEmpty().isNumeric(),
        body("_referrence_no", "please provide payment referrence number").notEmpty(),
        body("_buyer_id", "please provide buyer id").notEmpty().isNumeric(),
    ]
}

// //Full name, billing address, country, Etihad guest number, phone number, email, Wallet address 
// //first_name`,`last_name`,`email
// exports.buyerValidation = () => {
//     return [
//         body("_name", "please provide first name").notEmpty(),
//         body("_billing_address", "please provide last name").notEmpty(),
//         body("_country", "please provide country").notEmpty(),
//         body("_Etihad_guest_number", "please provide Etihad guest number").notEmpty(),
//         body("_phone_number", "please provide phone number").notEmpty(),
//         body("_email", "Invalid email address").isEmail(),
//     ]
// }


exports.azulPayValidation = () => {
    return [
        body("full_name", "please provide first name").notEmpty(),
        body("email", "please provide valid email").isEmail(),
        body("phone_number", "The phone field must be at least 10 characters in length.").isLength({ min: 10 }),
        body("full_address", "please provide valid address").notEmpty(),
        body("wallet_address", "please provide wallet address").notEmpty(),
        body("city", "please provide city").notEmpty(),
        body("state", "please provide state").optional(),
        body("country", "please provide country").notEmpty(),
        body("source_amount", "please provide source_amount").notEmpty(),
        body("etihad_guest_number", "please provide Etihad guest number").notEmpty(),
        body("quantity", "maximum quantity is 4").notEmpty().custom((value, { req, loc, path }) => {
            if (value <= 4) {
                return value;
            } else {
                throw new Error("quantity should be less than 4");
            }
        }),
        body("postal_code", "please provide postal_code").notEmpty(),
        body("sourceCurrency", "Please provide source currency").default('USD'),
        body("terms", "Please accept term and condition").notEmpty().custom((value, { req, loc, path }) => {
            if (value === true) {
                return value;
            } else {
                throw new Error("Please accept term and condition");
            }
        }),
        body("orderType", "Please provide orderType").default('normal'),
    ]
}


exports.PresaleCheckoutValidation = () => {
    return [
        body("full_name", "please provide first name").notEmpty().trim(),
        body("email", "please provide valid email").isEmail().trim(),
        body("wallet_address", "please provide wallet address").notEmpty().trim(),
        body("full_address", "please provide full address").notEmpty().trim(),
        body("city", "please provide city").notEmpty().trim(),
        body("state", "please provide state").optional().trim(),
        body("postal_code", "please provide postalCode").notEmpty().trim(),
        body("country", "please provide country").notEmpty().trim(),
        body("etihad_guest_number", "please provide Etihad guest number").notEmpty().trim(),
        body("phone_number", "The phone field must be at least 10 characters in length.").isLength({ min: 10 }),
        body("unique_code", "please provide unique_Code").notEmpty().trim(),
        body("sourceCurrency", "Please provide source currency").default('USD'),
        body("quantity", "please provide quantity").notEmpty().custom((value, { req, loc, path }) => {
            if (value === 1) {
                return value;
            } else {
                throw new Error("quantity should be one only");
            }
        }),
        body("source_amount", "please provide sourceAmount").notEmpty(),
        body("terms", "Please accept term and condition").notEmpty().custom((value, { req, loc, path }) => {
            if (value === true) {
                return value;
            } else {
                throw new Error("Please accept term and condition");
            }
        }),
        body("orderType", "Please provide orderType").default('presale'),

    ]
}


exports.WhiteListCheckoutValidation = () => {
    return [
        body("wallet_address", "please provide wallet address").notEmpty().trim(),
    ]
}
exports.userDetailsValidation = () => {
    return [
        body("full_name", "please provide full_name").notEmpty().trim(),
        body("email", "please provide email").notEmpty().trim(),
        body("Etihad_guest_number", "please provide Etihad_guest_number").notEmpty().trim()
    ]
}

exports.rootHashValidation = () => {
    return [
        body("wallet_address", "please provide wallet address").notEmpty().trim(),
        body("category", "please", "please provide category").notEmpty().trim()
    ]
}

exports.contractIswhiteListedValidation = () => {
    return [
        body("proof", "please provide proof").notEmpty().trim(),
        body("leaf", "please provide leaf").notEmpty().trim(),
    ]
}
exports.updatetransaction = () => {
    return [
        body("transaction_id", "please provide transaction_id").notEmpty(),
        body("reservation_id", "please provide reservation_id").notEmpty(),
        body("status", "please provide status").notEmpty().isNumeric(),
        body("orderType", "please provide orderType").notEmpty(),
        body("transaction_details", "please provide transaction_details").custom((value, { req, loc, path }) => {
            console.log(typeof (value))
            if (typeof (value) === "object") {
                return value;
            } else {
                throw new Error("Please send transaction_details");
            }
        }),

    ]
}



exports.emailValidation = () => {
    return [
        body("_sender", "Invalid email address").isEmail(),
        body('_receivers', "please enter a valid email address").isEmail(),
        body("_subject", "please provide subject").optional()
    ]
}

exports.bulkemailValidation = () => {
    return [
        body("_sender", "Invalid email address").isEmail(),
        body('_receivers', "please enter a valid email address").custom((value, { req, loc, path }) => {
            try {
                if (value == '') {
                    throw new Error("please enter a valid reciver email addresses");
                }
                value.split(',').forEach(function (element, index) {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(element) == false) {
                        throw new Error(`${element} is not a valid email address`);
                    }
                });
                return true

            } catch (e) {
                throw new Error(String(e));
            }

        }),
        body("_subject", "please provide subject").optional(),
        body("_message", "please provide message").notEmpty(),
    ]
}

exports.contactValidation = () => {
    return [
        body("_name", "please enter name").notEmpty(),
        body("_email", "Invalid email address").isEmail(),
        body("_subject", "please enter name").notEmpty(),
        body("_message", "please send some text").notEmpty(),
    ]
}

exports.CheckNewsLetterValidation = () => {
    return [
        body("_email", "Invalid email address").isEmail()
    ]
}

exports.CheckAuthCodeRequirementsValidation = () => {
    return [
        body("order_id", "please provide order id,example-: WO_7Z4X6C3LLL").notEmpty()
    ]
}

exports.TrackWalletOrderValidation = () => {
    return [
        body("transfer_id", "please provide transfer id,example-: TF_G9W6B42Z7W9").notEmpty()
    ]
}


exports.validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({
        [err.param]: err.msg
    }))

    return res.status(422).json({
        errors: extractedErrors,
    })
}