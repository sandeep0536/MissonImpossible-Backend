const dbConnection = require("../utils/dbConnection");
const decryptionService = require("../services/decryptionService");
exports.insert = async function(body) {
    try {
        console.log(body)
        const query = "INSERT INTO `presale`( `full_name`, `email`,`wallet_address`,`full_address`, `country`, `state`, `city`, `postal_code`, `quantity`, `source_amount`, `unique_Code`, `etihad_guest_number`, `phone_number`,`terms`,`auth_token`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        const values = [body.full_name,body.email,body.wallet_address,body.full_address, body.country, body.state,body.city,body.postal_code,body.quantity,body.source_amount,body.unique_code,body.etihad_guest_number,body.phone_number,body.terms,body.auth_token];
        const [row] = await dbConnection.execute(query, values);
        console.log("row is ",row)
        if (row['affectedRows'] === 1) {
            return { status: true, message: "successfully presale added buyer ", data: row };
        } else {
            return { status: false, message: "something went wrong", data: {} };
        }
    } catch (e) {
        //console.log(e);
        return { status: false, message: String(e), data: {} };
    }
}


exports.getPreSaleOrders = async function() {
	console.log(">>>>>>>>>>>>>>>>>>>1.1");
    try {
        const query = "select p.id,p.full_name,p.etihad_guest_number,p.unique_code,p.status,IFNULL(t.status,0) as tr_status from presale as p left join transaction as t on t.order_id=p.id and t.order_type='presale'";
        const values = [];
        const [row] = await dbConnection.execute(query, values);
	console.log(">>>>>>>>>>>>>>>>>>>1.2");
        if (row.length >= 1) {
            return { status: true, message: "get presale orders successfully", data: row };
        } else {
            return { status: false, message: "something went wrong", data: [] };
        }
    } catch (e) {
        //console.log(e);
        return { status: false, message: String(e), data: [] };
    }
}

exports.getPreSaleOrder = async function(id) {

    try {
        const query = `select o.*,t.order_id,t.transaction_id,t.reservation_id,t.transaction_details,t.status as tr_status from presale as o left join transaction as t on o.id=t.order_id and t.order_type='presale' WHERE o.id=?`;
        const values = [id];
        const [row] = await dbConnection.execute(query, values);
        if (row.length >= 1) {
            return { status: true, message: "get presale orders successfully", data: row };
        } else {
            return { status: false, message: "something went wrong", data: [] };
        }
    } catch (e) {
        //console.log(e);
        return { status: false, message: String(e), data: [] };
    }
}

exports.getEmailByReservationId = async function(reservationid) {
    try {
        let [email] = await dbConnection.execute(`select o.email,t.status from presale as o join transaction as t on t.order_id=o.id where t.reservation_id=?`,[reservationid]);
        if (email.length) {
            const eml = decryptionService.decryptData(email, ["email"])[0].email;
            console.log("eml ",eml)
            return { status: true, message: "update order table", data: eml,transaction_status:email[0].status };
        }
        //console.log("error in updating modal password try");
    } catch (e) {
        console.log("error in updating modal password ", e);
        return { status: false, message: String(e), data: '' ,transaction_status:0 };
    }
}

exports.getUniquecodeById = async function(id) {
    try {
        let [[code]] = await dbConnection.execute(`select unique_code from presale as o left join transaction as t on o.id=t.order_id and t.order_type='presale' WHERE o.id=?`,[id]);
       return { status: true, message: "update order table", data: code };
        //console.log("error in updating modal password try");
    } catch (e) {
        console.log("error in updating modal password ", e);
        return { status: false, message: String(e), data: '' ,transaction_status:0 };
    }
}
