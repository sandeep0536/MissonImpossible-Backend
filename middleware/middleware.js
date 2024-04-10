exports.ifNotLoggedin = (req, res, next) => {
    console.log("req.session.userID ", req.session.userID)
    if (!req.session.userID) {
        return res.redirect('/');
    }
    next();
}

exports.ifLoggedin = (req, res, next) => {
    if (req.session.userID) {
        return res.redirect('/dashboard');
    }
    next();
}