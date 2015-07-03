'use strict'

# Write your tests in CoffeeScript or JS

exclaimify = require('../exclaimify')

describe 'exclaimify.coffee (coffee test)', ->
  it 'should make strings exciting!', ->
    exclaimify('test').should.equal 'test!'
    return
  return
