'use strict';

// Write your tests in CoffeeScript or JS

var exclaimify = require('../exclaimify');

describe('exclaimify.coffee (JS test)', function () {

  it('should make strings exciting!', function () {
    exclaimify('test').should.equal('test!');
  });
});
