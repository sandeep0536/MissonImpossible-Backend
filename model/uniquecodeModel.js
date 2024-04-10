const dbConnection = require("../utils/dbConnection");

exports.isCodeValid = async function(code) {
    try {
        // console.log("modal get otp data ", param)
        // let key = Object.keys(param);
        const [row] = await dbConnection.execute(`select * from unique_codes where unique_code=? and status=1`, [code]);

        if (row.length >= 1) {
            return row;
        }else{
            return [];
        }

    } catch (e) {
        console.log(e)
        return [];
    }

}

exports.getCode = async function() {
    try {
        // console.log("modal get otp data ", param)
        // let key = Object.keys(param);
        const [row] = await dbConnection.execute(`select * from unique_codes where status=0 and used=0 limit 1`);

        if (row.length >= 1) {
            return row;
        }else{
            return [];
        }

    } catch (e) {
        console.log(e)
        return [];
    }

}
