var nodemailer = require('nodemailer');
let configobj = require("../utils/config.js").config;
var adminmodel = require('../model/adminModel');
const bcrypt = require('bcryptjs');

// var transporter = nodemailer.createTransport({
//     host: configobj.SMTPHOST,
//     port: configobj.SMTPPORT,
//     secure: true,
//     auth: {
//         user: configobj.SMTPUSER,
//         pass: configobj.SMTP_PASSWORD
//     },
//     tls: {
//         rejectUnauthorized: false,
//     },
// });


// transporter.verify(function(error, success) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Server is ready to take our messages");
//     }
// });

exports.SendEmail = async(email, message, subject) => {
    console.log("stard mail sending ")
    var transporter = nodemailer.createTransport({
        host: configobj.SMTPHOST,
        port: configobj.SMTPPORT,
        secure: true,
        auth: {
            user: configobj.SMTPUSER,
            pass: configobj.SMTP_PASSWORD
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false,
        },
    });

    var mailOptions = {
        from: `Etihad Airways NFT <${configobj.SMTPFROM}>`,
        to: email,
        subject: subject,
        html: message

    };

    await transporter.sendMail(mailOptions, async function(error, info) {
        //console.log("mail is sent");
        if (error) {
            console.log(`errors in email ${error}`);
            return false;
        } else {
            console.log("mail is sent");

        }
    });
    return true;
}