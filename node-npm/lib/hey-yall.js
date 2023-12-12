'use strict'

const fs = require('fs')

const heyYall = function (inFile) {
  fs.readFile(inFile, 'utf8', (error, content) => {
    if (error) {
      console.error(error);
    }

    const lines = content.split('\n');

    // clean up the array by removing the empty line
    const nonBlankLines = lines.filter((line) => line.length > 0)

    nonBlankLines.forEach((line) => {
      console.log(`Hey ${line}!`)
    })
  })
}

module.exports = heyYall
