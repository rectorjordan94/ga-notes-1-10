'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const example = require('../lib/example')

const Assertion = chai.Assertion

describe('Sync', function () {
  it('is true', function () {
    const sync = new Assertion(example.sync(true))
    sync.assert(sync._obj === true, 'Expected sync to return true')
  })
})

describe('Async', function () {
  it('is true', function (done) {
    example.async(true, function (error, value) {
      if (error || value !== true) {
        error = error || new Error(`value is ${value}`)
      }

      done(error)
    })
  })
})

describe('Promise', function () {
  it('is true', function () {
    return expect(example.promise(true)).to.eventually.be.true
  })
})
