const dbConnection = require("../utils/dbConnection");

const decryptionService = require("../services/decryptionService");

exports.insert = async function (body) {
    try {
        console.log(body)
        const query = "INSERT INTO `whitelistorders`( `full_name`, `email`,`wallet_address`,`full_address`, `country`, `state`, `city`, `postal_code`, `quantity`, `source_amount`, `etihad_guest_number`, `phone_number`,`terms`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)";
        const values = [body.full_name, body.email, body.wallet_address, body.full_address, body.country, body.state, body.city, body.postal_code, body.quantity, body.source_amount, body.etihad_guest_number, body.phone_number, body.terms];
        const [row] = await dbConnection.execute(query, values);
        console.log("row is ", row)
        if (row['affectedRows'] === 1) {
            return { status: true, message: "successfully whitelist added", data: row };
        } else {
            return { status: false, message: "something went wrong", data: {} };
        }
    } catch (e) {
        //console.log(e);
        return { status: false, message: String(e), data: {} };
    }
}


exports.getWhitelistOrders = async function () {

    try {
        const query = "select * from buyers";
        const values = [];
        const [row] = await dbConnection.execute(query, values);
        if (row.length >= 1) {
            return { status: true, message: "get whitelistorders successfully", data: row };
        } else {
            return { status: false, message: "something went wrong", data: [] };
        }
    } catch (e) {
        //console.log(e);
        return { status: false, message: String(e), data: [] };
    }
}

exports.getWhitelistOrder = async function (id) {

    try {
        const query = `select o.*,t.order_id,t.transaction_id,t.reservation_id,t.transaction_details,t.status as tr_status from whitelistorders as o left join transaction as t on o.id=t.order_id and t.order_type='whitelist' WHERE o.id=?`;
        const values = [id];
        const [row] = await dbConnection.execute(query, values);
        if (row.length >= 1) {
            return { status: true, message: "get whitelistorders successfully", data: row };
        } else {
            return { status: false, message: "something went wrong", data: [] };
        }
    } catch (e) {
        //console.log(e);
        return { status: false, message: String(e), data: [] };
    }
}

exports.getWhitelistWalletAddress = async function (address) {

    try {
        let query = `select address from whitelistaddress where address=?`;
        let values = [address];
        const [row] = await dbConnection.execute(query, values);
        if (row.length >= 1) {
            return { status: true, message: "get whitelistorders wallet address", data: row };
        } else {
            return { status: false, message: "Sorry! this address is not whitelisted in our system", data: [] };
        }
    } catch (e) {
        console.log(e);
        return { status: false, message: String(e), data: [] };
    }
}

exports.getWhitelistWalletAddress1 = async function (address) {

    try {
        let query = `select address from whitelistaddress1 where address=?`;
        let values = [address];
        const [row] = await dbConnection.execute(query, values);
        if (row.length >= 1) {
            return { status: true, message: "get whitelistorders wallet address", data: row };
        } else {
            return { status: false, message: "Sorry! this address is not whitelisted in our system", data: [] };
        }
    } catch (e) {
        console.log(e);
        return { status: false, message: String(e), data: [] };
    }
}

exports.userDataInsert = async function (body) {
    try {
        const query = "INSERT INTO `buyers`( `full_name`, `email`,`Etihad_guest_number`) VALUES(?,?,?)";
        const values = [body.full_name, body.email, body.Etihad_guest_number];
        const [row] = await dbConnection.execute(query, values);
        if (row['affectedRows'] === 1) {
            return { status: true, message: "successfully UserData added", data: row };
        } else {
            return { status: false, message: "something went wrong", data: {} };
        }
    } catch (e) {
        //console.log(e);
        return { status: false, message: String(e), data: {} };
    }
}

exports.updateWhitelistWalletAddressStatus = async function (status, address) {

    try {
        const query = `update whitelistaddress set status=? where address=?`;
        const values = [status, address];
        const result = await dbConnection.execute(query, values);
        console.log(result)
        return { status: true, message: "status is updates" };
        // if (row.length >= 1) {
        //     return { status: true, message: "status is updates"};
        // } else {
        //     return { status: false, message: "Sorry! this address is not whitelisted in our system"};
        // }
    } catch (e) {
        //console.log(e);
        return { status: false, message: String(e) };
    }
}

exports.allWalletAddress1 = async function () {
    try {
        const query = `select * from whitelistaddress1`;
        const [row] = await dbConnection.execute(query)
        if (row.length >= 1) {
            //console.log ~ file: whitelistModel.js:117 ~ exports.allWalletAddress ~ row:", row)
            return { status: true, message: "get whitelistorders wallet address", data: row };
        } else {
            return { status: false, message: "Sorry! this address is not whitelisted in our system", data: [] };
        }
    } catch (error) {
        return { status: false, message: String(error) };
    }
}
exports.whiteListAddress = async function (walletAddress) {
    try {
        //console.log ~ file: whitelistModel.js:142 ~ walletAddress:", walletAddress)
        const query = `select IFNULL(GROUP_CONCAT(category),'[]') as category from whitelistaddress1 where address=? ORDER BY CASE WHEN category = 'holder' THEN 1 WHEN category = 'guaranteed' THEN 2 ELSE 3 END`;
        const values = [(walletAddress != undefined && walletAddress != null && walletAddress != "") ? walletAddress : ""]
        //console.log ~ file: whitelistModel.js:146 ~ values:", values)
        const [result] = await dbConnection.execute(query, values)
        //console.log ~ file: whitelistModel.js:145 ~ exports.whiteListAddress=function ~ result:", result.length)
        if (result.length >= 1) {
            return { status: true, message: "Category find", data: result }
        }
        else {
            return { status: false, message: "Sorry! this address is not whitelisted in our system", data: [] };
        }
    } catch (error) {
        return { status: false, message: String(error) };
    }

}


exports.getEmailByReservationId = async function (reservationid) {
    try {
        let [email] = await dbConnection.execute(`select o.email,t.status from whitelistorders as o join transaction as t on t.order_id=o.id where t.reservation_id=?`, [reservationid]);
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

exports.getWalletaddressbyid = async function (id) {
    try {
        let [[code]] = await dbConnection.execute(`select wallet_address from whitelistorders as o left join transaction as t on o.id=t.order_id and t.order_type='whitelist' WHERE o.id=?`, [id]);
        return { status: true, message: "update order table", data: code };
        //console.log("error in updating modal password try");
    } catch (e) {
        console.log("error in updating modal password ", e);
        return { status: false, message: String(e), data: '', transaction_status: 0 };
    }
}

exports.csvWalletAddressInsert = async function (body) {
    try {
        const arrayOfBody = body;
        const insertPromises = arrayOfBody.map(async (element) => {
            //console.log ~ file: whitelistModel.js:173 ~ insertPromises ~ element:", element.address);
            // const selectQuery = `SELECT 1 FROM whitelistaddress1 WHERE address = ?`;
            // const [rows] = await dbConnection.execute(selectQuery, [element.address]);

            // if (rows.length === 0) {
            const insertQuery = `INSERT INTO whitelistaddress1 (address, category) VALUES (?, ?)`;
            const [insertedData] = await dbConnection.execute(insertQuery, [element.address, element.category]);
            //console.log ~ insertedData:", insertedData['affectedRows']);
            if (insertedData['affectedRows'] === 1) {
                return { status: true, message: "Successfully WalletAddress added" };
            } else {
                return { status: false, message: "Something went wrong", data: {} };
            }
            // } else {
            //     return { status: false, message: "WalletAddress already exists", data: {} };
            // }
        });

        // Now you can use Promise.all to await all the insertPromises and get the results
        const insertResults = await Promise.all(insertPromises);

        // Do something with the insertResults if needed
        //console.log ~ insertResults:", insertResults);

        // Return any relevant response
        return insertResults;
    } catch (error) {
        // Handle the error, e.g., show an error message to the user or log it.
        //console.log ~ file: whitelistModel.js:173 ~ insertPromises ~ error:", error);
        return { status: false, message: "Something went wrong", data: {} };
    }
};

exports.addressDeletingFromDb = async function (body) {
    try {
        const objectOfBody = body;
        const deleteQuery = `DELETE FROM whitelistaddress1 WHERE address=?`;
        const [deleteData] = await dbConnection.execute(deleteQuery, [objectOfBody.address])
        //console.log ~ insertedData:", deleteData['affectedRows']);
        if (deleteData['affectedRows'] === 1) {
            return { status: true, message: "Successfully WalletAddress deleted" };
        }
        else {
            return { status: false, message: "Something went wrong", data: {} };
        }
    } catch (error) {
        //console.log ~ file: whitelistModel.js:210 ~ exports.addressDeletingFromDb ~ error:", error)
    }
}



