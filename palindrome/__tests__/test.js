let algos = require("../palindrome.js")

test("check if word is a palindrome", () => {
  expect(algos.palindrome("eye")).toBe(true)
  expect(algos.palindrome("a man a plan a canal panama")).toBe(true)
  expect(algos.palindrome("eyed")).toBe(false)
})
