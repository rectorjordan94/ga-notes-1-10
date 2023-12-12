'use strict'

const randomizer = require('../lib/randomizer.js')

const inFile = process.argv[2]
const outFile = process.argv[3]

if (!inFile && !outFile) {
	console.log('You are missing your inFile or your ourFile')
}

randomizer(inFile, outFile);
