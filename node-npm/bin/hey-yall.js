'use strict'

const heyYall = require('../lib/hey-yall.js')

const inFile = process.argv[2]

if (!inFile) {
  console.log('You are missing your inFile')
}

heyYall(inFile)
