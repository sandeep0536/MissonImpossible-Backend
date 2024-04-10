const dbConnection = require("../utils/dbConnection")

exports.updateOne = async function(table,param) {
    //param={"key":value,"key":"value"}
    try {
        let key = Object.keys(param);
        let status = await dbConnection.execute(`UPDATE ${table} SET ${key[0]}=? where ${key[1]}=?`, [param[key[0]], param[key[1]]]);
        if (status[0]['affectedRows'] === 1) {
            return true;
        }
        //console.log("error in updating modal password try");
    } catch (e) {
        console.log("error in updating modal password ", e);
        return false;
    }
}

exports.updatetwo = async function(table,param) {
    //param={"key":value,"key":"value"}
    try {
        let key = Object.keys(param);
        let status = await dbConnection.execute(`UPDATE ${table} SET ${key[0]}=?,${key[1]}=? where ${key[2]}=?`, [param[key[0]], param[key[1]], param[key[2]]]);
        if (status[0]['affectedRows'] === 1) {
            return true;
        }
        //console.log("error in updating modal password try");
    } catch (e) {
        console.log("error in updating modal password ", e);
        return false;
    }
}

exports.updatethree = async function(table,param) {
    try {
        let key = Object.keys(param);
        let status = await dbConnection.execute(`UPDATE ${table} SET ${key[0]}=?,${key[1]}=?,${key[2]}=? where ${key[3]}=?`, [param[key[0]], param[key[1]], param[key[2]], param[key[3]]]);
        if (status[0]['affectedRows'] === 1) {
            return true;
        }
        //console.log("error in updating modal password try");
    } catch (e) {
        console.log("error in updating modal password ", e);
        return false;
    }
}