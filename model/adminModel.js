const dbConnection = require("../utils/dbConnection")

exports.login = async function (body) {
    try {
        const [
            [data]
        ] = await dbConnection.execute("SELECT * FROM `admin` where email=?", [body._email]);
        if (([data].length != 1) || (data === undefined)) {
            body = { status: false }
            return body;
        } else {
            body = { status: true, data: data }
            return body;
        }
    } catch (error) {
        console.log("ERROR IN ADMIN MODEL ", error)
    }
}

exports.updateOne = async function (param) {
    //param={"key":value,"key":"value"}
    try {
        let key = Object.keys(param);
        let status = await dbConnection.execute(`UPDATE admin SET ${key[0]}=? where ${key[1]}=?`, [param[key[0]], param[key[1]]]);
        if (status[0]['affectedRows'] === 1) {
            return true;
        }
        //console.log("error in updating modal password try");
    } catch (e) {
        console.log("error in updating modal password ", e);
        return e;
    }
}

exports.updatetwo = async function (param) {
    //param={"key":value,"key":"value"}
    try {
        let key = Object.keys(param);
        let status = await dbConnection.execute(`UPDATE admin SET ${key[0]}=?,${key[1]}=? where ${key[2]}=?`, [param[key[0]], param[key[1]], param[key[2]]]);
        if (status[0]['affectedRows'] === 1) {
            return true;
        }
        //console.log("error in updating modal password try");
    } catch (e) {
        console.log("error in updating modal password ", e);
        return false;
    }
}

exports.updatethree = async function (param) {
    try {
        let key = Object.keys(param);
        let status = await dbConnection.execute(`UPDATE admin SET ${key[0]}=?,${key[1]}=?,${key[2]}=? where ${key[3]}=?`, [param[key[0]], param[key[1]], param[key[2]], param[key[3]]]);
        if (status[0]['affectedRows'] === 1) {
            return true;
        }
        //console.log("error in updating modal password try");
    } catch (e) {
        console.log("error in updating modal password ", e);
        return false;
    }
}

exports.isValid = async function (param) {
    try {
        console.log("modal get otp data ", param)
        let key = Object.keys(param);
        const [row] = await dbConnection.execute(`select ${key[0]} from admin where ${key[1]}=?`, [param[key[1]]]);

        //console.log ~ file: adminModel.js:70 ~ exports.isValid=function ~ row:", row)
        if (row.length >= 1) {
            return row;
        }

    } catch (e) {
        return e;
    }

}

exports.checkUser = async function (email) {
    try {
        const [row] = await dbConnection.execute(`select * from admin where email= ?`, [email]);
        if (row.length >= 1) {
            return row;
        } else {
            return [];
        }
    } catch (e) {
        return e;
    }

}

exports.getUsersEmails = async function () {

    try {
        const query = "select email from orders UNION select email from newsletter UNION SELECT email from contactUS UNION select email from presale";
        const values = [];
        const [row] = await dbConnection.execute(query, values);
        if (row.length >= 1) {
            console.log("all emails is ", row)
            return { status: true, message: "get emails successfully", data: row };
        } else {
            return { status: false, message: "something went wrong", data: [] };
        }
    } catch (e) {
        //console.log(e);
        return { status: false, message: String(e), data: [] };
    }
}



exports.getDashBoardDetails = async function () {

    try {
        const query = "SELECT count(id) as orders from transaction";
        const values = [];
        const [row] = await dbConnection.execute(query, values);
        if (row.length >= 1) {
            console.log("all emails is ", row)
            return { status: true, message: "get DashBoard Details successfully", data: row[0] };
        } else {
            return { status: false, message: "something went wrong", data: [] };
        }
    } catch (e) {
        //console.log(e);
        return { status: false, message: String(e), data: [] };
    }
}

//

exports.getNormalOrderedQuantity = async function () {

    try {
        const query = "select COALESCE(SUM(p.quantity),0) AS total_ordered_quantity from `orders` as p left join transaction as t on p.id=t.order_id and t.order_type='normal' where not t.transaction_id='' and t.status=1";
        const values = [];
        const [[row]] = await dbConnection.execute(query, values);
        return { status: true, data: row };
    } catch (e) {
        console.log(e);
        return { status: false, data: {} };
    }
}

exports.getPreSaleOrderedQuantity = async function () {

    try {
        const query = "select COALESCE(SUM(p.quantity),0) AS total_ordered_quantity from `presale` as p left join transaction as t on p.id=t.order_id and t.order_type='presale' where not t.transaction_id='' and t.status=1";
        const values = [];
        const [[row]] = await dbConnection.execute(query, values);
        console.log("getPreSaleOrderedQuantity ", { status: true, data: row });
        return { status: true, data: row };
    } catch (e) {
        console.log(e);
        return { status: false, data: {} };
    }
}


exports.getWhiteListOrderedQuantity = async function () {

    try {
        const query = "select COALESCE(SUM(p.quantity),0) AS total_ordered_quantity from `whitelistorders` as p left join transaction as t on p.id=t.order_id and t.order_type='whitelist' where not t.transaction_id='' and t.status=1";
        const values = [];
        const [[row]] = await dbConnection.execute(query, values);
        console.log("getWhiteListOrderedQuantity ", { status: true, data: row });
        return { status: true, data: row };
    } catch (e) {
        console.log(e);
        return { status: false, data: {} };
    }
}
