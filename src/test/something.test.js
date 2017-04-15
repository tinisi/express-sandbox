var request = require('supertest');
var app = require('../app');
require('expectations');

describe('GET /user', function(req, res) {
  it('respond with json', function(done) {
    request(app)
      .get('/users')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
        expect(res.text).toEqual('respond with a resource');
        done();
      });
  });
});