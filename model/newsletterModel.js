const dbConnection = require("../utils/dbConnection");

exports.insert = async function(body) {

    try {
        const query = "INSERT INTO `newsletter`(`email`) VALUES(?)";
        const values = [body._email];
        const [row] = await dbConnection.execute(query, values);
        if (row['affectedRows'] === 1) {
            return { status: true, message: "Subscription Confirmed. We'll email you with the latest drops.", data: row };
        } else {
            return { status: false, message: "Something went wrong", data: [] };
        }
    } catch (e) {
        console.log("modal catch ", e)
        return { status: false, message: String(e), data: [] };
    }
}

exports.getSubscribers = async function() {

    try {
        const query = "select * from newsletter";
        const values = [];
        const [row] = await dbConnection.execute(query, values);
        if (row.length >= 1) {
            return { status: true, message: "get Subscribers successfully", data: row };
        } else {
            return { status: false, message: "something went wrong", data: [] };
        }
    } catch (e) {
        //console.log(e);
        return { status: false, message: String(e), data: [] };
    }
}