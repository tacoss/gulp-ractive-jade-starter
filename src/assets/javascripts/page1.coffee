'use strict'
exclaimify = require('./exclaimify')
console.log exclaimify('page1.js loaded')
button = document.getElementById('button')

alertAsyncMessage = ->
  # CommonJS async syntax webpack magic
  require.ensure [], ->
    message = require('./asyncMessage')
    alert exclaimify(message)
    return
  return

console.log '\n  asset references like this one:\n    assets/images/gulp.png\n  get updated in js too!'
button.addEventListener 'click', alertAsyncMessage
document.getElementById('coffee').addEventListener 'click', ->
  console.warn 'Loading cup of coffee'
  console.log exclaimify(require('./aCupOf')('You know how to'))
  return
