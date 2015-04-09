
var User = require('../../models/user.js');

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
        var user = new User(req.body);
        user.save();
        res.send('user created');
    });

}
