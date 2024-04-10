const { validationResult } = require("express-validator");
const { MerkleTree } = require('merkletreejs');
const ethers = require('ethers');
const keccak256 = require("keccak256");
const configobj = require('../../utils/config.js').config;
const ABI = require("../../contracts/abi.json")
const Web3 = require("web3")
let transactionmodel = require('../../model/transactionModel');
let whitelistmodel = require('../../model/whitelistModel')
const RPC_URL = configobj.RPC_URL;
const contract_address = process.env.CONTRACT_ADDRESS;
const web3 = new Web3(RPC_URL);

// Create an instance of the contract
const contractInstance = new web3.eth.Contract(ABI, contract_address);
// ////console.log ~ file: apiController.js:15 ~ contractInstance:", contractInstance.methods)

// ////console.log ~ file: apiController.js:15 ~ contract:", contract.methods)


exports.whitelistaddress = async (req, res, next) => {
    //(wyre)reservation_id = (azul) paymentId
    try {
        const errors = validationResult(req);
        const { body } = req;
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: errors.array()[0].msg,
                status: false
            });
        } else {
            const { body } = req;

            //wallet address is present in db 
            //console.log("response ")
            //console.log("response ")
            const wallet_address_status = await whitelistmodel.getWhitelistWalletAddress(body.wallet_address);
            //console.log("wallet_address_status", wallet_address_status)
            return res.status(200).json(wallet_address_status);
        }
    } catch (e) {
        //console.log(e)
        return res.status(400).json({ status: false, message: String(e) });
    }
}
exports.whitelistaddress1 = async (req, res, next) => {
    ////console.log ~ file: apiController.js:48 ~ exports.whitelistaddress1= ~ req:", req.body)
    try {
        const errors = validationResult(req);
        const { body } = req;
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: errors.array()[0].msg,
                status: false
            });
        } else {
            const { body } = req;
            ////console.log ~ file: apiController.js:58 ~ exports.whitelistaddress1= ~ body:", body)

            //wallet address is present in db 
            //console.log("response ")
            //console.log("response ")
            const wallet_address_status = await whitelistmodel.getWhitelistWalletAddress1(body.wallet_address);
            //console.log("wallet_address_status", wallet_address_status)
            return res.status(200).json(wallet_address_status);
        }
    } catch (e) {
        //console.log(e)
        return res.status(400).json({ status: false, message: String(e) });
    }
}

exports.successTransaction = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        const { body } = req;
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: errors.array()[0].msg,
                status: false
            });
        } else {
            const { body } = req;
            //console.log("response ")
            //console.log("response ")
            const transactionInsert = await transactionmodel.transactionInsert(body);
            return res.status(200).json(transactionInsert);
        }
    } catch (e) {
        //console.log(e)
        return res.status(400).json({ status: false, message: String(e) });
    }
}

exports.userDetails = async (req, res, next) => {
    try {
        const userData = await whitelistmodel.userDataInsert(req.body);
        ////console.log ~ file: apiController.js:98 ~ exports.userDetails= ~ userData:", userData)
    } catch (error) {

    }

}

exports.rootHashForFront = async (req, res, next) => {
    try {

        const wallet_address_status = await whitelistmodel.allWalletAddress1();
        //console.log("wallet_address_status", wallet_address_status)
        const merkledatas = wallet_address_status.data;
        let leaves = merkledatas.map((data, index) => {
            return ethers.utils.solidityKeccak256(['address', 'string'], [data.address, data.category]);
        });
        let merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true });
        ////console.log ~ file: apiController.js:110 ~ exports.allWalletAddress ~ merkleTree:", merkleTree)


        let rootHash = merkleTree.getRoot().toString('hex');
        rootHash = "0x" + rootHash;

        // const merklerootHash = await contract.methods.setMerkleRoot(rootHash).send({from:});
        // return res.status(200).json({ status: true, message: "get whitelistorders wallet address", data: wallet_address_status, rootHash: rootHash, merkleTree: merkleTree });
        return res.status(200).json({ status: true, message: "get Address successfully", data: wallet_address_status, rootHash: rootHash });

        // return res.status(200).json({ status: true, merkleTree: merkleTree, rootHash: rootHash });

    } catch (e) {
        ////console.log ~ file: apiController.js:114 ~ exports.allWalletAddress ~ e:", e)
        // //console.log(e)
        return res.status(400).json({ status: false, message: String(e) });
    }
}

exports.allWalletAddress = async (req, res, next) => {
    try {

        const wallet_address_status = await whitelistmodel.allWalletAddress1();
        //console.log("wallet_address_status", wallet_address_status)
        const merkledatas = wallet_address_status.data;
        let leaves = merkledatas.map((data, index) => {
            return ethers.utils.solidityKeccak256(['address'], [data.address]);
        });
        let merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true });
        ////console.log ~ file: apiController.js:110 ~ exports.allWalletAddress ~ merkleTree:", merkleTree)


        let rootHash = merkleTree.getRoot().toString('hex');
        rootHash = "0x" + rootHash;

        // const merklerootHash = await contract.methods.setMerkleRoot(rootHash).send({from:});
        // return res.status(200).json({ status: true, message: "get whitelistorders wallet address", data: wallet_address_status, rootHash: rootHash, merkleTree: merkleTree });
        return { status: true, message: "get Address successfully", data: wallet_address_status, rootHash: rootHash, merkleTree: merkleTree };

        // return res.status(200).json({ status: true, merkleTree: merkleTree, rootHash: rootHash });

    } catch (e) {
        ////console.log ~ file: apiController.js:114 ~ exports.allWalletAddress ~ e:", e)
        // //console.log(e)
        return res.status(400).json({ status: false, message: String(e) });
    }
}

exports.checkWhiteListDB = async (req, res, next) => {
    // req.body.wallet_address
    ////console.log ~ file: apiController.js:164 ~ exports.checkWhiteListDB= ~ req.body.wallet_address:", req.body.wallet_address)
    try {
        const walletAddressChecker = await whitelistmodel.whiteListAddress(req.body.wallet_address);
        //console.log("^^^^^^^^^^ ", walletAddressChecker.data)
        if (walletAddressChecker.status) {
            return res.status(200).json({ status: true, message: "WalletAddress category find", data: walletAddressChecker.data[0].category.split(",") });
        } else {
            return res.status(200).json({ status: false, message: "Wallet Address not present", data: [] });
        }
    } catch (e) {
        return res.status(400).json({ status: false, message: String(e) });
    }
}

exports.rootHash = async (req, res, next) => {
    ////console.log ~ file: apiController.js:134 ~ exports.rootHash= ~ req.body:", req.body)

    try {
        const wallet_address_status = await whitelistmodel.allWalletAddress1();
        //console.log("wallet_address_status", wallet_address_status)
        const merkledatas = wallet_address_status.data;
        let leaves = merkledatas.map((data, index) => {
            //console.log(data.address)
            return ethers.utils.solidityKeccak256(['address', 'string'], [data.address, data.category]);
        });
        let merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true });
        let rootHash = merkleTree.getRoot().toString('hex');
        rootHash = "0x" + rootHash;
        const leaf = ethers.utils.solidityKeccak256(['address', 'string'], [req.body.wallet_address, req.body.category])

        const proof = merkleTree.getHexProof(
            leaf
        );
        // const merklerootHash = await contract.methods.setMerkleRoot(rootHash).send({from:});
        // return res.status(200).json({ status: true, message: "get whitelistorders wallet address", data: wallet_address_status, rootHash: rootHash, merkleTree: merkleTree });
        return res.status(200).json({ status: true, message: "get Address successfully", data: wallet_address_status, rootHash: rootHash, proof: proof, leaf: leaf });

        // return res.status(200).json({ status: true, merkleTree: merkleTree, rootHash: rootHash });

    } catch (e) {
        ////console.log ~ file: apiController.js:114 ~ exports.allWalletAddress ~ e:", e)
        // //console.log(e)
        return res.status(400).json({ status: false, message: String(e) });
    }
}

exports.failedTransaction = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        const { body } = req;
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: errors.array()[0].msg,
                status: false
            });
        } else {
            const { body } = req;
            //console.log("response ")
            //console.log("response ")
            const failedTransaction = await transactionmodel.failedTransactionInsert(body);
            //console.log("wallet_address_status", wallet_address_status)
            return res.status(200).json(failedTransaction);
        }
    } catch (e) {
        //console.log(e)
        return res.status(400).json({ status: false, message: String(e) });
    }
}

exports.uploadCsv = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        const { body } = req;
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: errors.array()[0].msg,
                status: false
            });
        } else {
            const { body } = req;
            ////console.log ~ file: apiController.js:228 ~ exports.uploadCsv= ~ body:", body)
            const csvInsertWallet = await whitelistmodel.csvWalletAddressInsert(body);
            ////console.log ~ file: apiController.js:197 ~ exports.uploadCsv= ~ csvInsertWallet:", csvInsertWallet)
            return res.status(200).json(csvInsertWallet);
        }
        // return res.status(200).json(csvInsertWallet);
    } catch (error) {
        return res.status(400).json({ status: false, message: String(e) });
    }

}
exports.deleteAddress = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        const { body } = req;
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: errors.array()[0].msg,
                status: false
            });
        } else {
            const { body } = req;
            ////console.log ~ file: apiController.js:228 ~ exports.uploadCsv= ~ body:", body)
            const deletedAddress = await whitelistmodel.addressDeletingFromDb(body)
            ////console.log ~ file: apiController.js:252 ~ exports.deleteAddress ~ deletedAddress:", deletedAddress)
            return res.status(200).json(deletedAddress)
            // const csvInsertWallet = await whitelistmodel.csvWalletAddressInsert(body);
            // ////console.log ~ file: apiController.js:197 ~ exports.uploadCsv= ~ csvInsertWallet:", csvInsertWallet)
            // return res.status(200).json(csvInsertWallet);
        }
    } catch (error) {
        ////console.log ~ file: apiController.js:243 ~ exports.deleteAddress ~ error:", error)
    }
}
exports.contractIswhiteListed = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        //const { body } = req;
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: errors.array()[0].msg,
                status: false
            });
        } else {
            const { body } = req;

            ////console.log ~ file: apiController.js:289 ~ exports.contractIswhiteListed= ~ body.proof,body.leaf:", body.proof, body.leaf)
            const contractIsWhiteListedCalling = await contractInstance.methods.isWhiteListed(body.proof, body.leaf).call();
            ////console.log ~ file: apiController.js:289 ~ exports.contractIswhiteListed= ~ contractIsWhiteListedCalling:", contractIsWhiteListedCalling)
            return res.status(200).json(contractIsWhiteListedCalling)

        }
    } catch (error) {
        ////console.log ~ file: apiController.js:243 ~ exports.deleteAddress ~ error:", error)
    }

}
// exports.azulPaymentPost = async (req, res, next) => {

//     //(wyre)reservation_id = (azul) paymentId
//     try {
//         const errors = validationResult(req);
//         const { body } = req;
//         if (!errors.isEmpty()) {
//             return res.status(400).json({
//                 message: errors.array()[0].msg,
//                 status: false
//             });
//         } else {
//             const { body } = req;
//             const orders_count_status = await ordercountHelper.getOrdersCount(body.quantity);
//             if (orders_count_status.status) {
//                 const response = await azul(body);
//                 if (response.status) {
//                     res['azule_response'] = response;
//                     next()
//                 } else {
//                     return res.status(400).json(response);
//                 }

//             } else {
//                 return res.status(400).json(orders_count_status);
//             }

//         }
//     } catch (e) {
//         return res.status(400).json({ status: false, message: String(e) });
//     }
// }

// exports.updateTransactionStatus = async (req, res, next) => {
//     try {

//         const errors = validationResult(req);
//         const { body } = req;
//         if (!errors.isEmpty()) {
//             return res.status(400).json({
//                 message: errors.array()[0].msg,
//                 status: false
//             });
//         } else {
//             let receiver;
//             if (body.orderType == "presale") {
//                 receiver = await presalemodel.getEmailByReservationId(body.reservation_id);
//                 await commonmodel.updateOne("unique_codes", { used: body.status, unique_code: body.unique_code });
//             } else if (body.orderType == "normal") {
//                 receiver = await ordermodel.getEmailByReservationId(body.reservation_id);
//             } else if (body.orderType == "whitelist") {
//                 await whitelistmodel.updateWhitelistWalletAddressStatus(body.status, body.wallet_address);
//                 receiver = await whitelistmodel.getEmailByReservationId(body.reservation_id);
//             }

//             //console.log("updateTransactionStatus body ", body)
//             if (receiver != undefined && receiver.transaction_status >= 0) {
//                 ////console.log("receiver is ", receiver)

//                 body['transaction_id'] = body.transaction_id ? body.transaction_id : '';
//                 ////console.log("updateTransactionStatus body ", body)
//                 body.transaction_details = JSON.stringify(body.transaction_details);
//                 const status = body.status ? body.status : 0;
//                 if (status == 1) {

//                     ejs.renderFile(path.join(__dirname, `../../views/common/paymentsuccessTemplate.ejs`), {}).then(async (result) => {

//                         await SendEmail(receiver.data, result, 'Payment status');
//                         ////console.log("response is ",response)
//                         //const encypted_otp = await bcrypt.hash(otp, 12)

//                     })
//                 } else {
//                     ejs.renderFile(path.join(__dirname, `../../views/common/paymentfailTemplate.ejs`), {}).then(async (result) => {

//                         await SendEmail(receiver.data, result, 'Payment status');
//                         ////console.log("response is ",response)
//                         //const encypted_otp = await bcrypt.hash(otp, 12)

//                     })

//                 }
//                 commonmodel.updatethree("transaction", { transaction_id: body.transaction_id, transaction_details: body.transaction_details, status: status, reservation_id: body.reservation_id }).then(async (result) => {
//                     if (result) {
//                         return res.status(200).json({ status: true, message: "Transaction status update successfully", orderType: body.orderType });
//                     } else {
//                         return res.status(400).json({ status: false, message: "something went wrong", orderType: body.orderType });
//                     }
//                 }).catch((e) => {
//                     return res.status(400).json({ status: false, message: String(e), orderType: body.orderType });
//                 });
//             } else {
//                 return res.status(400).json({ status: false, message: "Something went wrong,Please try again", orderType: body.orderType });
//             }
//         }

//     } catch (e) {
//         //console.log(e)
//         return res.json({ status: false, message: String(e) })
//     }
// }

//via dist/js/payment.js
// exports.updateOrderStatus = async (req, res, next) => {
//     try {
//         //console.log(" updateOrderStatus ")
//         let txhashURL;
//         let email_data;
//         if (configobj.ENVIRONMENT == 'Production') {
//             txhashURL = `https://polygonscan.com/tx/${req.body.transaction_hash}`;
//             email_data = { message: `Congratulations! please click here ${txhashURL} to see the transaction on polygon scan` }
//         } else {
//             txhashURL = `https://mumbai.polygonscan.com/tx/${req.body.transaction_hash}`;
//             email_data = { message: `Congratulations! please click here ${txhashURL} to see the transaction on polygon scan` }
//         }
//         commonmodel.updatetwo(req.body.orderType, { status: 1, transaction_hash: txhashURL, id: req.body.id }).then(async (result) => {
//             if (result) {
//                 ejs.renderFile(path.join(__dirname, `../../views/common/otheremailtemplate.ejs`), email_data).then(async (result) => {

//                     await SendEmail(req.body.email, result, 'Arcube NFT');
//                     ////console.log("response is ",response)
//                     //const encypted_otp = await bcrypt.hash(otp, 12)

//                 })

//                 return res.status(200).json({ status: result, message: "status update successfully" });
//             } else {
//                 return res.status(400).json({ status: result, message: "something went wrong" });
//             }
//         }).catch((e) => {
//             return res.status(400).json({ status: false, message: String(e) });
//         });
//     } catch (e) {
//         //console.log(e)
//         return res.json({ status: false, message: String(e) })
//     }
// }


// exports.addNewsLetterPost = async (req, res, next) => {
//     try {
//         const errors = validationResult(req);
//         const { body } = req;
//         if (!errors.isEmpty()) {
//             return res.status(400).json({
//                 error: errors.array()[0].msg,
//                 status: false
//             });
//         } else {
//             const result = await newslettermodel.insert(body);
//             return res.status(200).json(result);
//         }
//     } catch (e) {
//         //console.log("error is ", e)
//         return res.status(e.response.status).json(e.response.data);
//     }
// }

// exports.contactUsPost = async (req, res, next) => {
//     try {
//         const errors = validationResult(req);
//         const { body } = req;
//         //console.log(body)
//         if (!errors.isEmpty()) {
//             return res.status(400).json({
//                 msg: errors.array()[0].msg,
//                 status: false
//             });
//         } else {
//             contactmodel.insert(body).then(async (result) => {
//                 if (result) {
//                     const receipient = decryptionService.decryptData([{ email: body._email }], ["email"])[0].email;
//                     await SendEmail('info@arcube.org', body._message, body._subject + ` by ${receipient}`);
//                     return res.status(200).json({ status: result, message: "Thank you for your message. We will get back to you within 24 hours." });
//                 } else {
//                     return res.status(400).json({ status: result, message: "something went wrong" });
//                 }
//             }).catch((e) => {
//                 return res.status(400).json({ status: false, message: String(e) });
//             });
//         }
//     } catch (e) {
//         return res.status(400).json({ status: false, message: String(e) });
//     }
// }

// function generate_code(length) {

//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     let result = '';
//     for (var j = 0; j < length; j++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }

// exports.presaleCheckout = async (req, res, next) => {
//     try {
//         const errors = validationResult(req);
//         const { body } = req;
//         ////console.log(body)
//         if (!errors.isEmpty()) {

//             //console.log(errors.array())
//             return res.status(400).json({
//                 message: errors.array()[0].msg,
//                 status: false
//             });
//         } else {
//             //console.log("azule calling 2")
//             uniquecodemodel.isCodeValid(body.unique_code).then(async (code_data) => {
//                 //console.log("azule calling 3")
//                 if (code_data.length) {
//                     if (code_data[0].used <= 0) {
//                         const orders_count_status = await ordercountHelper.getPreSaleOrdersCount(body.quantity);
//                         //console.log("azule calling 1")
//                         if (orders_count_status.status) {

//                             if (body.source_amount < 1) {
//                                 next()
//                             } else {
//                                 //console.log("azule calling ")
//                                 const response = await azul(body);
//                                 //console.log("response ^^^^^^^^^ ", response)
//                                 if (response.status) {
//                                     res['azule_response'] = response;
//                                     next()
//                                 } else {
//                                     return res.status(400).json(response);
//                                 }
//                             }

//                         } else {
//                             return res.status(400).json(orders_count_status);
//                         }
//                     } else {
//                         return res.status(400).json({ status: false, message: "The unique code you entered while checkout is already used, Please use another code or contact with Support" });
//                     }

//                 } else {
//                     return res.status(400).json({ status: false, message: "Please enter correct unique code" });
//                 }
//             })

//         }
//     } catch (e) {
//         //console.log(e)
//         return res.status(400).json({ status: false, message: String(e) });
//     }
// }

// exports.orderSavePost = async (req, res, next) => {

//     const response = res['azule_response'];
//     const { body } = req;
//     try {
//         response.data['auth_token'] = body['auth_token'] = createToken({ reservation_id: response.data.orderid })
//         if (response.status == true) {
//             ordermodel.insert(body).then(async (ordermodel_res) => {
//                 if (ordermodel_res.status) {
//                     await transactionmodel.insert({ order_id: ordermodel_res.data.insertId, reservation_id: response.data.orderid, order_type: "normal" });
//                     const receipient = decryptionService.decryptData([{ email: body.email }], ["email"])[0].email;
//                     // ejs.renderFile(path.join(__dirname, `../../views/common/paymentsuccessTemplate.ejs`), {}).then(async(result) => {

//                     //     await SendEmail(receipient, result, 'Payment status');

//                     // })
//                     return res.status(200).json(response);
//                 } else {
//                     return res.status(400).json(ordermodel_res);
//                 }
//             });
//         } else {
//             return res.status(400).json(response)
//         }
//     } catch (e) {
//         return res.status(400).json({ status: false, message: String(e) });
//     }
// }

// exports.whitelistorderSavePost = async (req, res, next) => {

//     const response = res['azule_response'];
//     const { body } = req;
//     try {
//         response.data['auth_token'] = body['auth_token'] = createToken({ reservation_id: response.data.orderid })
//         if (response.status == true) {
//             whitelistmodel.insert(body).then(async (ordermodel_res) => {
//                 if (ordermodel_res.status) {
//                     await transactionmodel.insert({ order_id: ordermodel_res.data.insertId, reservation_id: response.data.orderid, order_type: "whitelist" });
//                     const receipient = decryptionService.decryptData([{ email: body.email }], ["email"])[0].email;
//                     // ejs.renderFile(path.join(__dirname, `../../views/common/paymentsuccessTemplate.ejs`), {}).then(async(result) => {

//                     //     await SendEmail(receipient, result, 'Payment status');

//                     // })
//                     return res.status(200).json(response);
//                 } else {
//                     return res.status(400).json(ordermodel_res);
//                 }
//             });
//         } else {
//             return res.status(400).json(response)
//         }
//     } catch (e) {
//         return res.status(400).json({ status: false, message: String(e) });
//     }
// }

// exports.preSaleOrderSavePost = async (req, res, next) => {
//     const { body } = req;
//     try {

//         if (body.source_amount < 1) {
//             const reservation_id = uuidv4();
//             body['auth_token'] = createToken({ reservation_id: reservation_id })
//             presalemodel.insert(body).then(async (ordermodel_res) => {
//                 if (ordermodel_res.status) {
//                     //console.log("reservation_id ", reservation_id)
//                     await transactionmodel.insert({ order_id: ordermodel_res.data.insertId, reservation_id: reservation_id, order_type: "presale" });
//                     await commonmodel.updateOne("unique_codes", { used: 1, unique_code: body.unique_code });

//                     const receipient = decryptionService.decryptData([{ email: body.email }], ["email"])[0].email;
//                     ejs.renderFile(path.join(__dirname, `../../views/common/paymentsuccessTemplate.ejs`), {}).then(async (result) => {

//                         await SendEmail(receipient, result, 'Presale Order Payment Status');

//                     })

//                     commonmodel.updatethree("transaction", { transaction_id: uuidv4(), transaction_details: JSON.stringify({ message: "Approved", status: "APPROVED" }), status: 1, reservation_id: reservation_id }).then(async (result) => {
//                         return res.status(200).json({ status: true, message: "Presale payment success", data: { redirectUrl: "https://etihad.arcube.io/success?auth_token=" + body['auth_token'] } });
//                     }).catch((e) => {
//                         return res.status(400).json({ status: false, message: String(e) });
//                     });


//                 } else {
//                     return res.status(400).json(ordermodel_res);
//                 }
//             }).catch((err) => {
//                 return res.status(400).json({ status: false, message: String(err) });
//             });
//         } else {
//             const response = res['azule_response'];
//             //console.log("response%%%%%%% ", response)
//             if (response != undefined && response.status == true) {
//                 //console.log("response.data ", response)
//                 response.data['auth_token'] = body['auth_token'] = createToken({ reservation_id: response.data.orderid })
//                 presalemodel.insert(body).then(async (ordermodel_res) => {
//                     if (ordermodel_res.status) {
//                         await transactionmodel.insert({ order_id: ordermodel_res.data.insertId, reservation_id: response.data.orderid, order_type: "presale" });

//                         const receipient = decryptionService.decryptData([{ email: body.email }], ["email"])[0].email;
//                         // ejs.renderFile(path.join(__dirname, `../../views/common/paymentsuccessTemplate.ejs`), {}).then(async(result) => {

//                         //     await SendEmail(receipient, result, 'Presale Order Payment Status');

//                         // })
//                         return res.status(200).json(response);
//                     } else {
//                         return res.status(400).json(ordermodel_res);
//                     }
//                 }).catch((err) => {
//                     return res.status(400).json({ status: false, message: String(err) });
//                 });
//             } else {
//                 return res.status(400).json({ status: false, message: "Something went wrong" })
//                 //return res.status(400).json(response)
//             }
//         }


//     } catch (e) {
//         //console.log(e)
//         return res.status(400).json({ status: false, message: String(e) });
//     }
// }