
var User = require('../../models/user.js');
var Joi = require('joi');

var userSchema = Joi.object().keys({
            first_name: Joi.string().trim().min(1).max(10).required(),
            last_name: Joi.string().trim().min(1).max(50).required(),
            is_compliant: Joi.boolean()
    });

module.exports = function(app) {

    app.get('/api/users', function(req, res){
        User.find({}, function(err, results) {
            if ( err ) {
                return console.error(err);
            } else {
                res.status(200).json(results);
            }
        });
    });

    app.post('/api/users', function(req, res){
        // this is super raw, but no worries, we'll be adding joi to the mix soon enough
        Joi.validate(req.body, userSchema, function (err, value) {
            if ( !!err ) {
                res.send(err);
            } else {
                var user = new User(req.body);
                user.save();
                res.send('user created');
            }
        });
    });

}
