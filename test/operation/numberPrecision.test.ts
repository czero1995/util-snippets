import {
  plus,
  subtract,
  multiply,
  divide,
  amendNumber,
  digitLength,
  decimalCovertInteger
} from "../../src/snippets/operation/numberOperation";

test("plus", () => {
  expect(plus(0.1, 0.2)).toBe(0.3);
});
test("subtract", () => {
  expect(subtract(0.3, 0.1)).toBe(0.2);
});

test("multiply", () => {
  expect(multiply(0.1, 0.2)).toBe(0.02);
});
test("divide", () => {
  expect(divide(0.3, 0.1)).toBe(3);
});

test("amendNumber", () => {
  expect(amendNumber(0.09999999999999998)).toBe(0.1);
});
test("digitLength", () => {
  expect(digitLength(0.3)).toBe(1);
  expect(digitLength(0.33)).toBe(2);
  expect(digitLength(0.333)).toBe(3);
});
test("decimalCovertInteger", () => {
  expect(decimalCovertInteger(0.3)).toBe(3);
  expect(decimalCovertInteger(0.33)).toBe(33);
  expect(decimalCovertInteger(0.333)).toBe(333);
});
