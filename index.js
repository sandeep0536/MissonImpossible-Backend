const express = require('express');
const session = require('express-session');
const path = require('path');
const routes = require('./routes/routes');
const apiroutes = require('./routes/apiRoutes');
const app = express();
const favicon = require('serve-favicon');
const server = require('http').createServer(app)
const bodyparser = require('body-parser');
const cron = require("node-cron");
const encryptionService = require("./services/encryptionService");
const decryptionService = require("./services/decryptionService");
const morgan = require('morgan');

// app settings
app.use(bodyparser.json());
app.use(morgan('dev'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(favicon(__dirname + '/favicon.ico'));
app.use(session({
    name: 'session',
    secret: 'SQE85eXazq9wLJ7',
    resave: false,
    saveUninitialized: false,
    // cookie: {
    //     maxAge: 3600 * 1000, // 1hr
    // }
}));
const cors = require('cors');
require('dotenv').config();

// Access the environment variables
// Your application code follows...

app.use(cors({
    origin: '*'
}));
//disable cache
app.disable('etag');
app.use(routes);
app.use('/api', apiroutes);
app.use(express.static(path.join(__dirname, 'public')));
// app.get('*', function(req, res) {
//     res.render("common/404");
// });

app.use((err, req, res, next) => {
    //console.log(err);
});

//--------------------------------ENCRYPTION--------------------------------

// pass array of keys which needs to be encrypted
app.post("/encrypt", encryptionService.encryptData(["email", "address"]), function (req, res) {
    res.send(req.body);
});

// decryption example
// const data = {
//     email : "a57199fe3b675f437c66f59f87c0c327d6ede91a09f867fad4d9f8deb94ea5e193b2f00a190071349139f758518487a6503a88e71dab6ca1bcfdb7f36eadbe6232ae5c714d9e62766ef9a6fface345f9fef46a5f0cf90804729bd840ec98e5b00603c870bcfd6015918b864588",
//     address : "31461a15e21b813e690015f3b8bdc1a677846858dc38b6f901fe04d5ed3f8d8d8bcc9a0f320f245b63ef44e339f64847344a4a7a32f5776ff186a31db8dd8b1e4f05c3c21e00f9f119d08e4f7831894b51cb55b156b233b94cfbdec61e8f63f42fa5f3435b906b576f738845379b334f94fa633fb67c3f53b4117b62faba1f86b90c6964fd4bc54b21e8942ccb1b58d9717fc86a8f906716f15a1ba4a72de458d8a42cc898eb98f16ec13c4182ead7"
// }
// console.log("decryted data" , decryptionService.decryptData(data , ["email" , "address"]));

//--------------------------------DECRYPTION --------------------------------

// function myFunction() {
//     // Your function code goes here
//     console.log('Function executed!');
// }

// const task = cron.schedule('*/1 * * * *', () => {
//     myFunction();
//     task.destroy();
// }, {
//     scheduled: true,
//     timezone: 'Asia/Kolkata',
//     once: true
// });

// cron.schedule("0 */1 * * * *", function () {
//     console.log("running a task every 1 hour");

// });

server.listen(process.env.PORT || 3000, () => console.log(`Server is runngin on port 3000`));
