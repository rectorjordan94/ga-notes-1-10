let algos = require("../getIndexToInsert.js");

//INSERT INDEX

test("find the correct index to insert the given number", () => {
  expect(algos.getIndexToInsert([40, 60, 5], 6)).toBe(1);
  expect(algos.getIndexToInsert([40, 60, 5], -1)).toBe(0);
  expect(algos.getIndexToInsert([30, 60, 5, 22, 56, 784, 80], 72)).toBe(5);
});