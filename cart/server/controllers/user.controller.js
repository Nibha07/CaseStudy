const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.Name = req.body.Name;
    user.email = req.body.email;
    user.username = req.body.username;
    user.password = req.body.password;
    user.cpassword= req.body.cpassword;

    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}