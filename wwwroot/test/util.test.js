require('expectations');
var thing = require('../util/thing')

describe('thing', function() {
  it('calls callback with expected value', function(done) {
    thing(function(result) {
      console.log(result);
      expect(result).toEqual('Foo');
      done();
    })
  });
});
