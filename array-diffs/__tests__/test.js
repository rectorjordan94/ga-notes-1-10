let algos = require("../arrayDiffs.js");

test("Return an array with all the unique numbers (the numbers that are not in both arrays).", () => {
  expect(
    algos.arrayDiffs([1, 44, 2, 3, 5], [33, 1, 2, 3, 4, 5])
  ).toMatchObject([44, 33, 4]);
});
