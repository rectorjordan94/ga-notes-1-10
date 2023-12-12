'use strict'

const fs = require('fs')
const shuffle = require('knuth-shuffle').knuthShuffle

const randomizer = function (inFile, outFile) {
	fs.readFile(inFile, 'utf-8', (error, data) => {
		if (error) {
			console.error(error.stack)
			return
		}

		let dataArray = data.split('\n')

		// remove blank line at the end of the file
		dataArray = dataArray.filter((line) => line.length > 0)

		// randomize the array
		const randomLines = shuffle(dataArray.slice(0))

		fs.writeFile(outFile, randomLines.join('\n'), { flag: 'w' }, (error) => {
			if (error) {
				console.error(error.stack)
				return
			}

			console.log('\nrandomized!')
		})
	})
}

module.exports = randomizer
