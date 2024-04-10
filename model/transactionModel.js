const dbConnection = require("../utils/dbConnection");

exports.insert = async function (body) {
    try {
        console.log(body)
        const query = "INSERT INTO `transaction`(`order_id`,`reservation_id`,`order_type`) VALUES(?,?,?)";
        const values = [body.order_id, body.reservation_id, body.order_type];
        const [row] = await dbConnection.execute(query, values);
        //console.log("row is ",row)
        if (row['affectedRows'] === 1) {
            return { status: true, message: "successfully presale added buyer ", data: row };
        } else {
            return { status: false, message: "something went wrong", data: [] };
        }
    } catch (e) {
        console.log(e);
        return { status: false, message: String(e), data: [] };
    }
}

exports.transactionInsert = async function (body) {
    //console.log ~ file: transactionModel.js:22 ~ body:", body)
    try {
        const query = "INSERT INTO `transaction`(`name`,`email`,`Etihad_guest_number`,`order_id`,`order_type`,`transaction_id`,`reservation_id`,`status`) VALUES(?,?,?,?,?,?,?,?)";
        const values = [body.name, body.email, body.ethihadGuestNumber, body.tokenId, body.type, body.txId, body.clientId, "1"];
        const [row] = await dbConnection.execute(query, values);
        if (row['affectedRows'] === 1) {
            return { status: true, message: "Transaction successfull", data: row }
        } else {
            return { status: false, message: "something went wrong", data: [] };
        }
    } catch (error) {
        console.log(error);
        return { status: false, message: String(error), data: [] };

    }
    // //console.log ~ file: transactionModel.js:22 ~ exports.transactionInsert=function ~ body:", body)
    // return body;
}

exports.failedTransactionInsert = async function (body) {
    try {
        const query = "INSERT INTO `transaction`(`order_id`,`order_type`,`transaction_id`,`reservation_id`,`status`) VALUES(?,?,?,?,?)";
        const values = [body.tokenId, body.type, body.txId, body.clientId, "0"];
        const [row] = await dbConnection.execute(query, values);
        if (row['affectedRows'] === 1) {
            return { status: true, message: "Transaction Failed", data: row }
        } else {
            return { status: false, message: "something went wrong", data: [] };
        }
    } catch (error) {
        console.log(error);
        return { status: false, message: String(error), data: [] };

    }
    // //console.log ~ file: transactionModel.js:22 ~ exports.transactionInsert=function ~ body:", body)
    // return body;
}

exports.isOrderValid = async function (reservation_id) {
    try {
        let row;

        [row] = await dbConnection.execute(`select * from transaction as t where t.reservation_id=?`, [reservation_id]);
        // if(order_type=="presale"){
        //     [row]  = await dbConnection.execute(`select o.auth_token,t.reservation_id,t.order_id,t.transaction_id from presale as o join transaction as t on o.id=t.order_id where t.reservation_id=?`, [reservation_id]);
        // }else if(order_type=="normal"){
        //     [row]  = await dbConnection.execute(`select o.auth_token,t.reservation_id,t.order_id,t.transaction_id from orders as o join transaction as t on o.id=t.order_id where t.reservation_id=?`, [reservation_id]);
        // }else if(order_type=="whitelist"){
        //     [row]  = await dbConnection.execute(`select o.auth_token,t.reservation_id,t.order_id,t.transaction_id from whitelistorders as o join transaction as t on o.id=t.order_id where t.reservation_id=?`, [reservation_id]);
        // }else{
        //     return [];
        // }


        if (row.length >= 1) {
            return row;
        } else {
            return [];
        }

    } catch (e) {
        return [];
    }

}