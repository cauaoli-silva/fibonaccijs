const fibonacci = require("../src/fibonacci");

test("fibonacci de 0 é 0", () => {
  expect(fibonacci(0)).toBe(0);
});

test("fibonacci de 1 é 1", () => {
  expect(fibonacci(1)).toBe(1);
});

test("fibonacci de 5 é 5", () => {
  expect(fibonacci(5)).toBe(5);
});

test("fibonacci de 10 é 55", () => {
  expect(fibonacci(10)).toBe(55);
});