const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');

let adminmodel = require('../../model/adminModel');
let commonmodel = require('../../model/commonModel');
let presalemodel = require('../../model/presaleModel');
let ordermodel = require('../../model/orderModel');
let whitelistmodel = require('../../model/whitelistModel');
let buyermodel = require('../../model/buyerModel');
let loginHistoryModal = require('../../model/loginHistoryModal');
let newslettermodel = require('../../model/newsletterModel')
let contactmodel = require("../../model/contactModel")
let uniquecodemodel = require("../../model/uniquecodeModel")
var async = require('async');
const path = require('path');
const { SendEmail } = require("../../services/emailServices");
const decryptionService = require("../../services/decryptionService");
const ejs = require('ejs');
const { allWalletAddress } = require("../api/apiController");

// Login Get
exports.loginGet = (req, res, next) => {
    res.render("login", {
        session: req.session.useremail,
    });
};

//Login Post
exports.loginPost = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        const { body } = req;
        //console.log(body)
        if (!errors.isEmpty()) {
            return res.render('login', {
                error: errors.array()[0].msg,
                session: req.session.useremail
            });
        } else {
            adminmodel.login(body).then(async (result) => {
                if (result.status) {
                    const checkPass = await bcrypt.compare(body._password, result.data.password);

                    if (checkPass === true) {

                        req.session.userID = result.data.id;
                        req.session.useremail = body._email;
                        if (req.session.useremail == 'pawan.t@cisinlabs.com') {
                            return res.redirect("/dashboard");
                        }

                        const otp = Math.random().toString(36).substr(2, 7);
                        const email_data = { message: `Your OTP is: ${otp}` }
                        ejs.renderFile(path.join(__dirname, `../../views/common/OTPTemplate.ejs`), email_data).then(async (result) => {

                            await SendEmail(body._email, result, 'OTP verification');
                            //console.log("response is ",response)
                            //const encypted_otp = await bcrypt.hash(otp, 12)

                        })

                        const expiry = new Date(Date.now() + 15 * 60000)

                        await commonmodel.updatethree("admin", { islogin: 0, otp: otp, expiry: expiry, email: body._email });

                        // console.log(response)
                        // if (response) {
                        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || "";
                        await loginHistoryModal.insert(ip);
                        return res.redirect("/otp");
                        //  }
                        // console.log("req.headers['x-forwarded-for'] ",req.headers['x-forwarded-for'])
                        // console.log('req.connection.remoteAddress ',req.connection.remoteAddress)
                        //  else {

                        // res.render('login', {
                        //     error: 'unable to send email',
                        //     session: req.session.useremail
                        // });
                        //  }


                    } else {
                        console.log("Invalid Credentials")
                        res.render('login', {
                            error: 'Invalid Credentials.',
                            session: req.session.useremail
                        });
                    }
                } else {
                    console.log("user not found")
                    return res.render('login', {
                        error: "user not found",
                        session: req.session.useremail
                    });
                }
            }).catch((e) => {
                console.log(e)
                next(e);
            });
        }
    } catch (e) {
        console.log(e)
        next(e);
    }
}

//otp Get
exports.otpGet = (req, res, next) => {
    console.log("in otp")
    return res.render("otp", {});
};

//otp Post
exports.otpPost = async (req, res, next) => {

    try {
        const errors = validationResult(req);
        const { body } = req;
        console.log(body)
        if (!errors.isEmpty()) {
            return res.render('otp', {
                error: errors.array()[0].msg,
            });
        } else {
            adminmodel.checkUser(req.session.useremail).then(async (result) => {
                console.log("get otp data ", result)
                const otp = result[0].otp;
                const expiry = result[0].expiry;
                if (Date.now() <= expiry) {
                    if (body.otp == otp) {
                        console.log("oto is verified")
                        commonmodel.updateOne("admin", { islogin: 1, email: req.session.useremail }).then((resp) => {
                            return res.redirect("/dashboard");
                        })
                    } else {
                        return res.render('otp', {
                            error: "OTP is wrong",
                        });
                    }
                    // const checkPass = await bcrypt.compare(body.otp, otp);
                    // if (checkPass === true) {
                    //     console.log("oto is verified")
                    //     adminmodel.updateOne({ islogin: 1, email: req.session.useremail }).then((resp) => {
                    //         return res.redirect("/dashboard");
                    //     })

                    // } else {
                    //     return res.render('otp', {
                    //         error: "OTP is wrong",
                    //     });
                    // }
                } else {
                    return res.render('otp', {
                        error: `OTP is expire,Please login again`,
                    });
                }

            }).catch((e) => {
                next(e)
            })
            console.log("data dashboard^^^^^^^^^^^^^^^^")
        }
    } catch (e) {
        console.log(e)
        next(e);
    }
}



exports.bulkEmailGet = (req, res, next) => {
    console.log("in bulkEmailGet")
    adminmodel.isValid({
        islogin: "",
        email: req.session.useremail
    }).then(async (result) => {

        if (result[0].islogin != 0) {
            return res.render("bulkEmail", {
                session: req.session.useremail,
                data: ''
            });

        } else {
            return res.redirect('/')
        }

    }).catch((e) => {
        console.log(e)
        return res.render("bulkEmail", {
            session: req.session.useremail,
            error: String(e)
        });
    });
    //console.log("in otp")
};

exports.emailGet = (req, res, next) => {
    console.log("in email")
    adminmodel.isValid({
        islogin: "",
        email: req.session.useremail
    }).then(async (result) => {

        if (result[0].islogin != 0) {
            uniquecodemodel.getCode().then((code) => {
                if (code.length >= 1) {
                    console.log(code)
                    return res.render("email", {
                        session: req.session.useremail,
                        data: '',
                        unique_code: code[0].unique_code
                    });
                } else {
                    return res.render("email", {
                        session: req.session.useremail,
                        data: '',
                        error: "no unique codes available",
                    });
                }
            })

        } else {
            return res.redirect('/')
        }

    }).catch((e) => {
        console.log(e)
        next(e);
    });
    //console.log("in otp")
};



exports.bulkEmailPost = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        const { body } = req;
        console.log("in bulkEmail post", body)

        if (!errors.isEmpty()) {
            return res.render('bulkEmail', {
                error: errors.array()[0].msg,
                data: [],
                session: req.session.useremail
            });

        } else {

            body._receivers.split(',').forEach(async function (element, index) {
                console.log(element)
                await SendEmail(element, body._message, body._subject);
                if (index + 1 == body._receivers.length) {
                    console.log("all email sent")
                }
            });

            return res.render("bulkEmail", {
                session: req.session.useremail,
                message: "email has been sent successfully"
            });

        }
    } catch (e) {
        console.log(e)
        return res.render("bulkEmail", {
            session: req.session.useremail,
            error: String(e)
        });
    }
}

exports.emailPost = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        const { body } = req;
        console.log("in email post", body)

        if (!errors.isEmpty()) {
            return res.render('email', {
                error: errors.array()[0].msg,
                data: [],
                session: req.session.useremail
            });

        } else {
            uniquecodemodel.getCode().then((code) => {
                if (code.length >= 1) {
                    console.log(code)
                    ejs.renderFile(path.join(__dirname, `../../views/common/presaleTemplate.ejs`), code[0]).then(async (emailtemp) => {
                        const result = await SendEmail(body._receivers, emailtemp, body._subject);
                        if (result) {
                            await commonmodel.updateOne("unique_codes", { status: 1, id: code[0].id });
                            uniquecodemodel.getCode().then((code) => {
                                if (code.length >= 1) {
                                    return res.render("email", {
                                        session: req.session.useremail,
                                        data: '',
                                        message: "email has been sent successfully",
                                        unique_code: code[0].unique_code
                                    });
                                } else {
                                    return res.render("email", {
                                        session: req.session.useremail,
                                        data: '',
                                        message: "email has been sent successfully",
                                        error: "no unique codes available",
                                    });
                                }
                            })

                        } else {

                            uniquecodemodel.getCode().then((code) => {
                                if (code.length >= 1) {
                                    return res.render("email", {
                                        session: req.session.useremail,
                                        data: '',
                                        error: "email is not sent,something went wrong",
                                        unique_code: code[0].unique_code
                                    });
                                } else {
                                    return res.render("email", {
                                        session: req.session.useremail,
                                        data: '',
                                        error: "email is not sent,something went wrong",
                                    });
                                }
                            })


                        }
                    });
                } else {
                    return res.render("email", {
                        session: req.session.useremail,
                        data: '',
                        error: "no unique codes available",
                    });
                }
            })

            // adminmodel.getUsersEmails().then((row_data) => {
            //     const all_emails = new Set(decryptionService.decryptData(row_data.data, ["email"]).map((e) => { return e.email }));
            //     return res.render("email", {
            //         session: req.session.useremail,
            //         data: all_emails,
            //         message: "email has been sent successfully"
            //     });
            // })
            // body._receivers.forEach(async function(element, index) {
            //     await SendEmail(element, body._message, body._subject);
            //     if (index + 1 == body._receivers.length) {
            //         adminmodel.getUsersEmails().then((row_data) => {
            //             const all_emails = new Set(decryptionService.decryptData(row_data.data, ["email"]).map((e) => { return e.email }));
            //             return res.render("email", {
            //                 session: req.session.useremail,
            //                 data: all_emails,
            //                 message: "email has been sent successfully"
            //             });
            //         })
            //     }
            // });

        }
    } catch (e) {
        console.log(e)
        //next(e);
    }
}


exports.subscribersGet = (req, res, next) => {
    console.log("in email")
    adminmodel.isValid({
        islogin: "",
        email: req.session.useremail
    }).then(async (result) => {

        if (result[0].islogin != 0) {
            newslettermodel.getSubscribers().then((row_data) => {
                //console.log("row_data is ", row_data)
                return res.render("subscribers", {
                    session: req.session.useremail,
                    data: decryptionService.decryptData(row_data.data, ["email"])
                });
            })
        } else {
            return res.redirect('/')
        }

    }).catch((e) => {
        next(e);
    });
    //console.log("in otp")
};

exports.presaleOrdersGet = (req, res, next) => {
    console.log("in presaleGet")
    adminmodel.isValid({
        islogin: "",
        email: req.session.useremail
    }).then(async (result) => {
        console.log(">>>>>>>>>>>>>>>>>>>1");
        if (result[0].islogin != 0) {
            presalemodel.getPreSaleOrders().then((row_data) => {
                console.log(">>>>>>>>>>>>>>>>>>>2");
                //console.log("row_data is ", row_data)
                return res.render("presale", {
                    session: req.session.useremail,
                    data: row_data.data //decryptionService.decryptData(row_data.data, ["full_name"])
                });
            })
        } else {
            return res.redirect('/')
        }

    }).catch((e) => {
        next(e);
    });
    //console.log("in otp")
};

exports.presaleOrderGet = (req, res, next) => {
    console.log("in orders")
    adminmodel.isValid({
        islogin: "",
        email: req.session.useremail
    }).then(async (result) => {

        if (result[0].islogin != 0) {
            console.log("req.params.id ", req.params.id)
            presalemodel.getPreSaleOrder(req.params.id).then((row_data) => {
                //console.log("row_data is ", row_data)

                const order_details = decryptionService.decryptData(row_data.data, ["full_name", "email", "full_address", "phone_number"])[0]
                console.log("order_details is ", order_details)
                const transaction_details = JSON.parse(order_details.transaction_details);
                console.log("transaction_details", transaction_details)
                delete order_details.transaction_details;
                console.log("order_details is ", order_details)
                return res.render("presaleorderdetails", {
                    session: req.session.useremail,
                    data: { transaction_details: transaction_details, order_details: order_details }
                });




                // return res.render("presaleorderdetails", {
                //     session: req.session.useremail,
                //     data: decryptionService.decryptData(row_data.data, ["full_name", "email", "full_address", "phone_number"])[0]
                // });
            })
        } else {
            return res.redirect('/')
        }

    }).catch((e) => {
        next(e);
    });
};




exports.contactsGet = (req, res, next) => {
    console.log("in email")
    adminmodel.isValid({
        islogin: "",
        email: req.session.useremail
    }).then(async (result) => {

        if (result[0].islogin != 0) {
            contactmodel.getContacts().then((row_data) => {
                //console.log("row_data is ", row_data)
                //decrypt decryptData
                return res.render("contacts", {
                    session: req.session.useremail,
                    data: decryptionService.decryptData(row_data.data, ["name", "email"])
                });
            })
        } else {
            return res.redirect('/')
        }

    }).catch((e) => {
        next(e);
    });
    //console.log("in otp")
};

exports.readMessageGet = (req, res, next) => {
    console.log("in readMessageGet")
    adminmodel.isValid({
        islogin: "",
        email: req.session.useremail
    }).then(async (result) => {
        if (req.params.id) {

            if (result[0].islogin != 0) {
                contactmodel.getChat(req.params.id).then((chat) => {
                    if (chat.status) {
                        console.log("chat ", chat)
                        console.log("chat",)
                        return res.render("readMessage", {
                            session: req.session.useremail,
                            data: decryptionService.decryptData(chat.data, ["email"])[0],
                            message: "found chat"
                        });
                    } else {
                        return res.render("readMessage", {
                            session: req.session.useremail,
                            data: {},
                            error: "no chat found",
                        });
                    }
                })

            } else {
                return res.redirect('/')
            }
        } else {
            return res.redirect('/')
        }


    }).catch((e) => {
        console.log(e)
        next(e);
    });
    //console.log("in otp")
};


exports.logoutGet = async (req, res, next) => {
    try {
        if (req.session.useremail == 'pawan.t@cisinlabs.com') {
            req.session.destroy((err) => {
                res.redirect('/');
            });
        } else {
            await commonmodel.updatetwo("admin", {
                otp: 0,
                islogin: 0,
                email: req.session.useremail
            })
            req.session.destroy((err) => {
                res.redirect('/');
            });
        }

    } catch (e) {
        next(e);
    }
};

exports.dashboardGet = (req, res, next) => {
    console.log("in dashboard")
    adminmodel.isValid({
        islogin: "",
        email: req.session.useremail
    }).then(async (result) => {
        console.log("data os ", result, result[0].islogin)
        if (result[0].islogin != 0) {
            console.log("result[0].islogin ", result[0].islogin)
            //
            adminmodel.getDashBoardDetails().then((res_data) => {
                console.log(res_data)
                return res.render("index", {
                    session: req.session.useremail,
                    data: res_data.data
                });
            })

        } else {

            req.session.destroy((err) => {
                res.redirect('/');
            });
        }

    }).catch((e) => {
        next(e);
    });
};

exports.ordersGet = (req, res, next) => {
    console.log("in orders")
    adminmodel.isValid({
        islogin: "",
        email: req.session.useremail
    }).then(async (result) => {

        if (result[0].islogin != 0) {
            ordermodel.getOrders().then((row_data) => {
                //console.log("row_data is ", row_data)
                return res.render("orders", {
                    session: req.session.useremail,
                    data: row_data.data //decryptionService.decryptData(row_data.data, ["full_name"])
                });
            })
        } else {
            return res.redirect('/')
        }

    }).catch((e) => {
        next(e);
    });
};

exports.orderGet = (req, res, next) => {
    try {
        console.log("in orders")
        adminmodel.isValid({
            islogin: "",
            email: req.session.useremail
        }).then(async (result) => {

            if (result[0].islogin != 0) {
                console.log("req.params.id ", req.params.id)
                ordermodel.getOrder(req.params.id).then((row_data) => {

                    const order_details = decryptionService.decryptData(row_data.data, ["full_name", "email", "full_address", "phone_number"])[0]
                    console.log("order_details is ", order_details)
                    const transaction_details = JSON.parse(order_details.transaction_details);
                    console.log("transaction_details", transaction_details)
                    delete order_details.transaction_details;
                    console.log("order_details is ", order_details)
                    return res.render("ordersdetails", {
                        session: req.session.useremail,
                        data: { transaction_details: transaction_details, order_details: order_details }
                    });
                })
            } else {
                return res.redirect('/')
            }

        }).catch((e) => {
            console.log(e)
        });
    } catch (e) {
        console.log(e)
    }
};


exports.whitelistOrdersGet = (req, res, next) => {
    console.log("in whitelistOrdersGet")
    adminmodel.isValid({
        islogin: "",
        email: req.session.useremail
    }).then(async (result) => {

        if (result[0].islogin != 0) {
            whitelistmodel.getWhitelistOrders().then((row_data) => {
                //console.log ~ file: adminController.js:658 ~ whitelistmodel.getWhitelistOrders ~ row_data:", row_data)
                //console.log("row_data is ", row_data)
                return res.render("whitelist", {
                    session: req.session.useremail,
                    data: row_data.data //decryptionService.decryptData(row_data.data, ["full_name"])
                });
            })
        } else {
            return res.redirect('/')
        }

    }).catch((e) => {
        next(e);
    });
};

exports.whitelistAddress = (req, res, next) => {
    console.log("in whitelistAddress")
    adminmodel.isValid({
        islogin: "",
        email: req.session.useremail
    }).then(async (result) => {
        //console.log ~ file: adminController.js:680 ~ result:", result)
        if (result[0].islogin != 0) {
            allWalletAddress().then((row_data) => {
                //console.log ~ file: adminController.js:684 ~ allWalletAddress ~ row_datasssss:", req.session.useremail, row_data.data.data, row_data.rootHash, row_data.merkleTree)
                return res.render("whitelistaddress", {
                    session: req.session.useremail,
                    data: row_data.data.data
                })
            })
        }
        else {
            return res.redirect('/')
        }
    }).catch((e) => {
        next(e);
    })
}



exports.whitelistOrderGet = (req, res, next) => {
    try {
        console.log("in whitelistOrderGet")
        adminmodel.isValid({
            islogin: "",
            email: req.session.useremail
        }).then(async (result) => {

            if (result[0].islogin != 0) {
                console.log("req.params.id ", req.params.id)
                whitelistmodel.getWhitelistOrder(req.params.id).then((row_data) => {

                    const order_details = decryptionService.decryptData(row_data.data, ["full_name", "email", "full_address", "phone_number"])[0]
                    console.log("order_details is ", order_details)
                    const transaction_details = JSON.parse(order_details.transaction_details);
                    console.log("transaction_details", transaction_details)
                    delete order_details.transaction_details;
                    console.log("order_details is ", order_details)
                    return res.render("whitelistdetails", {
                        session: req.session.useremail,
                        data: { transaction_details: transaction_details, order_details: order_details }
                    });
                })
            } else {
                return res.redirect('/')
            }

        }).catch((e) => {
            console.log(e)
        });
    } catch (e) {
        console.log(e)
    }
};


exports.replyGet = (req, res, next) => {
    console.log("in replyGet")
    adminmodel.isValid({
        islogin: "",
        email: req.session.useremail
    }).then(async (result) => {

        if (result[0].islogin != 0) {
            console.log("req.params.id ", req.params.email)

            return res.render("reply", {
                session: req.session.useremail,
                receiver: req.params.email
            });

        } else {
            return res.redirect('/')
        }

    }).catch((e) => {
        console.log(e)
    });
};


exports.replyPost = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        const { body } = req;
        console.log("in email post", body)

        if (!errors.isEmpty()) {
            return res.render('reply', {
                error: errors.array()[0].msg,
                data: [],
                session: req.session.useremail
            });

        } else {

            const result = await SendEmail(body._receivers, body._message, body._subject);
            if (result) {
                return res.render("reply", {
                    session: req.session.useremail,
                    receiver: body._receivers,
                    message: "email has been sent successfully"
                });
            } else {
                return res.render("reply", {
                    session: req.session.useremail,
                    receiver: body._receivers,
                    error: "email not sent",
                });
            }

        }

    } catch (e) {
        console.log(e)
        //next(e);
    }
}