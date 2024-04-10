const dbConnection = require("../utils/dbConnection");
const decryptionService = require("../services/decryptionService");

exports.insert = async function (body) {
    try {
        console.log(body)
        const query = "INSERT INTO `orders`(`full_name`, `email`, `wallet_address`, `full_address`, `city`, `state`, `country`, `postal_code`, `etihad_guest_number`, `phone_number`, `quantity`, `source_amount`,`auth_token`,`terms`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        const values = [body.full_name, body.email, body.wallet_address, body.full_address, body.city, body.state, body.country, body.postal_code, body.etihad_guest_number.toString(), body.phone_number, body.quantity, body.source_amount, body.auth_token, body.terms];
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

exports.getOrders = async function () {

    try {

        const query = "select name,email,Etihad_guest_number,order_id,order_type,transaction_id,reservation_id,created_at from transaction";
        const values = [];
        const [row] = await dbConnection.execute(query, values);
        //console.log(row)
        if (row.length >= 1) {
            return { status: true, message: "get orders successfully", data: row };
        } else {
            return { status: false, message: "something went wrong", data: [] };
        }
    } catch (e) {
        //console.log(e);
        return { status: false, message: String(e), data: [] };
    }
}

exports.getOrdersForCron = async function () {

    try {
        const [row] = await dbConnection.execute(`select id,order_id from orders where transfer_id='' and not status=''`);
        if (row.length >= 1) {
            return { status: true, message: "get orders successfully", data: row };
        } else {
            return { status: false, message: "something went wrong", data: [] };
        }
    } catch (e) {
        //console.log(e);
        return { status: false, message: String(e), data: [] };
    }
}

exports.getOrder = async function (id) {

    try {
        const query = `select o.*,t.order_id,t.transaction_id,t.reservation_id,t.transaction_details,t.status as tr_status from orders as o left join transaction as t on o.id=t.order_id and t.order_type='normal' WHERE o.id=?`;
        const values = [id];
        const [row] = await dbConnection.execute(query, values);
        if (row.length >= 1) {
            return { status: true, message: "get orders successfully", data: row };
        } else {
            return { status: false, message: "something went wrong", data: [] };
        }
    } catch (e) {
        console.log(e);
        return { status: false, message: String(e), data: [] };
    }
}




exports.updateOne = async function (param) {
    //param={"key":value,"key":"value"}
    try {
        let key = Object.keys(param);
        let status = await dbConnection.execute(`UPDATE orders SET ${key[0]}=? where ${key[1]}=?`, [param[key[0]], param[key[1]]]);
        if (status[0]['affectedRows'] === 1) {
            return { status: true, message: "update order table", data: status };
        }
        //console.log("error in updating modal password try");
    } catch (e) {
        console.log("error in updating order modal ", e);
        return { status: false, message: String(e), data: [] };
    }
}

exports.updatetwo = async function (param) {
    try {
        let key = Object.keys(param);
        let status = await dbConnection.execute(`UPDATE orders SET ${key[0]}=?,${key[1]}=? where ${key[2]}=?`, [param[key[0]], param[key[1]], param[key[2]]]);
        if (status[0]['affectedRows'] === 1) {
            return { status: true, message: "update order table", data: status };
        }
        //console.log("error in updating modal password try");
    } catch (e) {
        console.log("error in updating modal password ", e);
        return { status: false, message: String(e), data: [] };
    }
}


exports.updatethree = async function (param) {
    try {
        let key = Object.keys(param);
        let status = await dbConnection.execute(`UPDATE orders SET ${key[0]}=?,${key[1]}=?,${key[2]}=? where ${key[3]}=?`, [param[key[0]], param[key[1]], param[key[2]], param[key[3]]]);
        if (status[0]['affectedRows'] === 1) {
            return { status: true, message: "update order table", data: status };
        }
        //console.log("error in updating modal password try");
    } catch (e) {
        console.log("error in updating modal password ", e);
        return { status: false, message: String(e), data: [] };
    }
}

exports.getEmailByReservationId = async function (reservationid) {
    try {
        let [email] = await dbConnection.execute(`select o.email,t.status from orders as o join transaction as t on t.order_id=o.id where t.reservation_id=?`, [reservationid]);
        if (email.length) {
            const eml = decryptionService.decryptData(email, ["email"])[0].email;
            console.log("eml ", eml)
            return { status: true, message: "update order table", data: eml, transaction_status: email[0].status };
        }
        //console.log("error in updating modal password try");
    } catch (e) {
        console.log("error in updating modal password ", e);
        return { status: false, message: String(e), data: '', transaction_status: 0 };
    }
}

