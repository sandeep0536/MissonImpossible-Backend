const dbConnection = require("../utils/dbConnection");

exports.insert = async function(ip) {
    //param={"key":value,"key":"value"}
    try {
        let status = await dbConnection.execute(`insert into loginHistory (ip) values(?)`, [ip]);
        if (status[0]['affectedRows'] === 1) {
            return true;
        }
        //console.log("error in updating modal password try");
    } catch (e) {
        console.log("error in updating modal password ", e);
        return false;
    }
}
