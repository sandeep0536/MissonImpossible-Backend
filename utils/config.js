const dotenv = require('dotenv');
dotenv.config();
if (process.env.ENVIRONMENT == "production") {
    module.exports = {

        "config": {
            "ENVIRONMENT": "Production",
            "DATABASE_HOST": "localhost",
            "DATABASE_USER": "root",
            "DATABASE_PASSWORD": "root",
            "DATABASE_NAME": "mi7",
            "SMTPHOST": process.env.SMTPHOST,
            "SMTPPORT": process.env.SMTPPORT,
            "SMTPFROM": process.env.SMTPFROM,
            "SMTPUSER":process.env.SMTPUSER,
            "SMTP_PASSWORD": process.env.SMTP_PASSWORD,
            "URL": process.env.URL,
            "WYRE_API_KEY": process.env.WYRE_API_KEY,
            "WYRE_SECRET_KEY": process.env.WYRE_SECRET_KEY,
            "REFERRERACCOUNTID":process.env.REFERRERACCOUNTID,
            "ENC_KEY" : "42a4f43bb43f3c83033626a76f7ace2479705ec7579e4c151f2e2196455be09b29bfc",
            "AZULE_SECRET_KEY": process.env.AZULE_SECRET_KEY,
            "AZULE_API_KEY":process.env.AZULE_API_KEY,
            "RPC_URL": process.env.RPC_URL
        }

    }

} else {
    module.exports = {
        "config": {
            "ENVIRONMENT": "Development",
            "DATABASE_HOST": "localhost",
            "DATABASE_USER": "root",
            "DATABASE_PASSWORD": "root",
            "DATABASE_NAME": "mi7",
            "SMTPHOST": process.env.TEST_SMTPHOST,
            "SMTPPORT": process.env.TEST_SMTPPORT,
            "SMTPFROM": process.env.TEST_SMTPFROM,
            "SMTPUSER":process.env.TEST_SMTPUSER,
            "SMTP_PASSWORD": process.env.TEST_SMTP_PASSWORD,
            "URL": process.env.TEST_URL,
            "WYRE_API_KEY": process.env.TEST_WYRE_API_KEY,
            "WYRE_SECRET_KEY": process.env.TEST_WYRE_SECRET_KEY,
            "REFERRERACCOUNTID":process.env.TEST_REFERRERACCOUNTID,
            "ENC_KEY" : "42a4f43bb43f3c83033626a76f7ace2479705ec7579e4c151f2e2196455be09b29bfc",
            "AZULE_SECRET_KEY": process.env.TEST_AZULE_SECRET_KEY,
            "AZULE_API_KEY":process.env.TEST_AZULE_API_KEY,
            "RPC_URL":process.env.TEST_RPC_URL
        }
    }
}
