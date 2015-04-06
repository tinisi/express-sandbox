module.exports = function(app) {

    app.get('/api/users', function(req, res){
        // set up some fake data to reply with
        userList = ['Bob', 'Sue', 'Jim']
        res.status(201).json(userList);
    });

    app.post('/api/users', function(req, res){
        console.log(req.body);
        res.send('user created');
    });

}