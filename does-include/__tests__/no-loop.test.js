const {doesInclude} = require('../no-loop')
const fs = require('fs')

describe.each([
  [
    [1, 2, 3, 4], 3, true
  ],
  [
    ['a', 'e', 'y', 'z'], 'f', false
  ],
  ['hello', 'e', true],
  [
    [], 'a', false
  ]
])('%# Does data include x ?', (data, x, expected) => {
  test(`Should check if ${x} is in ${data}`, () => {
    expect(doesInclude(data, x)).toBe(expected)
  })
})

describe('Function should not use loops', () => {
  const file = fs.readFileSync(__dirname + '/../no-loop.js', 'utf-8')
  test('Should not use loops', () => {
    expect(file.toString().includes('for')).toBe(false)
  })
  test('Should not use loops', () => {
    expect(file.toString().includes('while')).toBe(false)
  })
})
