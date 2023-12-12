let algos = require("../oddsFromEvens.js");

test("Return aa new array which has all even integers (ordered from lowest to highest) followed by all odd integers (ordered from highest to lowest).", () => {
  expect(algos.oddsFromEvens([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toMatchObject([
    0,
    2,
    4,
    6,
    8,
    9,
    7,
    5,
    3,
    1
  ])
  expect(algos.oddsFromEvens([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toMatchObject([
    2,
    4,
    6,
    8,
    10,
    9,
    7,
    5,
    3,
    1
  ])
  expect(algos.oddsFromEvens([423, 322, 918, 45, 6, 79, 55])).toMatchObject([
    6,
    322,
    918,
    423,
    79,
    55,
    45
  ])
})