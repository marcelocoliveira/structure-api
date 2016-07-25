process.on('uncaughtException', function(err) {
  console.error(err.stack)
  process.exit(1)
})

process.on('unhandledRejection', function(err) {
  console.error('Unhandled Rejection')
  console.error(err.stack)
})

require('babel-core/register')
require('babel-polyfill')

var path = require('path')
require('dotenv').config({path: path.join(__dirname, '../../.env')})

var chai  = require('chai'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai')

chai.use(sinonChai)

global.expect = chai.expect
global.sinon  = sinon
