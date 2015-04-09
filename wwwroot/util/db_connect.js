
var mongoose = require('mongoose');

module.exports = {
    connect: function(callback) {
        // TODO: I'll want some options soon like
        var options = {};
        var uri = 'mongodb://localhost/jtest'
        mongoose.connect(uri, options);
        // just a catch all in case there are issues
        mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
        
        mongoose.connection.once('open', function () {
            callback('connection open');
        });
    },
    close: function(callback) {
        mongoose.connection.on('close', callback);
        mongoose.connection.close();
    }
}
