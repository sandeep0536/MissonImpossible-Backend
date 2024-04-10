const dbConnection = require("../utils/dbConnection");

exports.insert = async function(body) {
    //param={"key":value,"key":"value"}
    try {
        let status = await dbConnection.execute(`insert into contactUS (name,email,subject,message) values(?,?,?,?)`, [body._name,body._email,body._subject,body._message]);
        if (status[0]['affectedRows'] === 1) {
            return true;
        }
        //console.log("error in updating modal password try");
    } catch (e) {
        console.log("error in updating modal password ", e);
        return false;
    }
}


exports.getContacts = async function() {

    try {
        const query = "select * from contactUS";
        const values = [];
        const [row] = await dbConnection.execute(query, values);
        if (row.length >= 1) {
            return { status: true, message: "get contactUS successfully", data: row };
        } else {
            return { status: false, message: "something went wrong", data: [] };
        }
    } catch (e) {
        //console.log(e);
        return { status: false, message: String(e), data: [] };
    }
}

exports.getChat = async function(id) {

    try {
        const query = "select * from contactUS where id=?";
        const values = [id];
        const [row] = await dbConnection.execute(query, values);
        if (row.length >= 1) {
            return { status: true, message: "get contactUS successfully", data: row };
        } else {
            return { status: false, message: "something went wrong", data: [] };
        }
    } catch (e) {
        //console.log(e);
        return { status: false, message: String(e), data: [] };
    }
}
