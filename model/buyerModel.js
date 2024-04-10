const dbConnection = require("../utils/dbConnection");

exports.insert = async function(body) {
    try {
        console.log(body)
        const query = "INSERT INTO `buyers`(`full_name`, `email`, `full_address`, `country`, `state`, `city`, `postalCode`, `comment`, `Etihad_guest_number`,`phone_no`) VALUES(?,?,?,?,?,?,?,?,?,?)";
        const values = [body.full_name,body.email,body.street1, body.country, body.state,body.city,body.postalCode,body.comment,body.Etihad_guest_number,body.phone_number ];
        const [row] = await dbConnection.execute(query, values);
        console.log("row is ",row)
        if (row['affectedRows'] === 1) {
            return { status: true, message: "successfully added buyer ", data: row };
        } else {
            return { status: false, message: "something went wrong", data: {} };
        }
    } catch (e) {
        //console.log(e);
        return { status: false, message: String(e), data: {} };
    }
}