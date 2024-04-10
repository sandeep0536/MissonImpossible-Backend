// const dbConnection = require("./utils/dbConnection");


// // try {
// //         const query = `select o.email,t.status from orders as o join transaction as t on t.order_id=o.id where t.reservation_id=?`;
// //         const values = ['64127SaiF94941cblGH96712'];
// //         dbConnection.execute(query, values).then(([[data]])=>{
// //             console.log(data)
// //         })

// //     } catch (e) {
// //         console.log(e);

// //     }
// async function run(argument) {
//     try {
// <<<<<<< Updated upstream
// 	function generate_code(length) {
// =======

//         function generate_code(length) {
// >>>>>>> Stashed changes

//             var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//             var charactersLength = characters.length;
//             var codes = [];
//             for (var i = 1; i <= 50; i++) {
//                 let result = '';
//                 for (var j = 0; j < length; j++) {
//                     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//                 }
//                 codes.push([result])
//             }
//             return codes;
//         }

//         const query = `insert into unique_codes (unique_code) VALUES ?`;
//     const values = [generate_code(20)];
//     dbConnection.query(query, values, function(err) {
//         if (err) throw err;
//         console.log("code inserted");
//         dbConnection.end();
//     });
// <<<<<<< Updated upstream
//         // function generate_code(length) {

//         //     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//         //     var charactersLength = characters.length;
//         //     var codes = [];
//         //     for (var i = 1; i <= 200; i++) {
//         //         let result = '';
//         //         for (var j = 0; j < length; j++) {
//         //             result += characters.charAt(Math.floor(Math.random() * charactersLength));
//         //         }
//         //         codes.push([result])
//         //     }
//         //     return codes;
//         // }
// =======
// >>>>>>> Stashed changes


//         //     function generate_code(length) {

//         //     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//         //     var charactersLength = characters.length;
//         //     let result = '';
//         //     for (var j = 0; j < length; j++) {
//         //         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//         //     }
//         //     return result;
//         // }

// <<<<<<< Updated upstream
//         //let [[code]] = await dbConnection.execute(`select unique_code from presale as o left join transaction as t on o.id=t.order_id and t.order_type='presale' WHERE o.id=?`, [2]);
//         //console.log(code);
// =======

//         // let [[code]] = await dbConnection.execute(`select unique_code from presale as o left join transaction as t on o.id=t.order_id and t.order_type='presale' WHERE o.id=?`, [2]);
//         // console.log(code);
// >>>>>>> Stashed changes
//     } catch (e) {
//         console.log(e);

//     }

// }

// run()
// // const ejs = require('ejs');

// // var nodemailer = require('nodemailer');
// // let configobj = require("/home/cis/ARCUBE/arcube-nft-admin/utils/config.js").config;

// // async function SendEmail(email, message, subject){
// //     console.log("stard mail sending ")
// //     var transporter = nodemailer.createTransport({
// //         host: configobj.SMTPHOST,
// //         port: configobj.SMTPPORT,
// //         secure: true,
// //         auth: {
// //             user: configobj.SMTPUSER,
// //             pass: configobj.SMTP_PASSWORD
// //         },
// //         tls: {
// //             // do not fail on invalid certs
// //             rejectUnauthorized: false,
// //         },
// //     });

// //     var mailOptions = {
// //         from: configobj.SMTPFROM,
// //         to: email,
// //         subject: subject,
// //         html: message

// //     };

// //     await transporter.sendMail(mailOptions, async function(error, info) {
// //         //console.log("mail is sent");
// //         if (error) {
// //             console.log(`errors in email ${error}`);
// //             return false;
// //         } else {
// //             console.log("mail is sent");

// //         }
// //     });
// //     return true;
// // }


// // ejs.renderFile(`/home/cis/ARCUBE/arcube-nft-admin/views/common/paymentsuccessTemplate.ejs`).then(async (result) => {

// //     const response = await SendEmail("harvey@arcube.org", result, 'Payment status');
// //     console.log("paymentsuccessTemplate response is ",response)
// //     //const encypted_otp = await bcrypt.hash(otp, 12)

// // })

// // ejs.renderFile(`/home/cis/ARCUBE/arcube-nft-admin/views/common/paymentfailTemplate.ejs`, {}).then(async (result) => {

// //     const response = await SendEmail("harvey@arcube.org", result, 'Payment status');
// //     console.log("paymentfailTemplate response is ",response)
// //     //console.log("response is ",response)
// //     //const encypted_otp = await bcrypt.hash(otp, 12)

// // })


// // const email_data = { message: `Congratulations! please click here https://mumbai.polygonscan.com/tx/0xe775f4c1ae17cf2905b71eac7213a769ecb4be0749a2eb4b30be3c1b0b562dbd to see the transaction on Polygon scan` }
// // ejs.renderFile(`/home/cis/ARCUBE/arcube-nft-admin/views/common/otheremailtemplate.ejs`, email_data).then(async (result) => {

// //     const response = await SendEmail("harvey@arcube.org", result, 'Arcube NFT');
// //     console.log("otheremailtemplate response is ",response)
// //     //const encypted_otp = await bcrypt.hash(otp, 12)

// // })
