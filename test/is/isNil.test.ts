import isNill from "../../src/snippets/is/isNill";

test("isNill", () => {
  expect(isNill(null)).toBeTruthy();
  expect(isNill(undefined)).toBeTruthy();
  expect(isNill(123)).toBeFalsy();
});
